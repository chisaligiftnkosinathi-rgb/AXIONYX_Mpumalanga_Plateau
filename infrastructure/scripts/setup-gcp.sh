#!/usr/bin/env bash
set -e

# AXIONYX GCP Bootstrap Script
# Provisions Artifact Registry, GKE Autopilot, and Workload Identity Federation

PROJECT_ID="melos-prime"
REGION="us-central1"
REPO_NAME="axionyx-registry"
CLUSTER_NAME="axionyx-autopilot"
GITHUB_ORG="axionyx"
GITHUB_REPO="axionyx-platform"

echo "Enabling GCP APIs..."
gcloud services enable \
  container.googleapis.com \
  artifactregistry.googleapis.com \
  iamcredentials.googleapis.com \
  secretmanager.googleapis.com

echo "Creating Artifact Registry..."
gcloud artifacts repositories create $REPO_NAME \
  --repository-format=docker \
  --location=$REGION \
  --description="AXIONYX Docker Repository"

echo "Creating GKE Autopilot Cluster..."
gcloud container clusters create-auto $CLUSTER_NAME \
  --region $REGION \
  --project=$PROJECT_ID

echo "Configuring Workload Identity Federation for GitHub Actions..."
gcloud iam workload-identity-pools create "github-pool" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --display-name="GitHub Actions Pool"

gcloud iam workload-identity-pools providers create-oidc "github-provider" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --workload-identity-pool="github-pool" \
  --display-name="GitHub Actions Provider" \
  --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
  --issuer-uri="https://token.actions.githubusercontent.com"

echo "Creating CI/CD Service Account..."
gcloud iam service-accounts create "github-actions-deployer" \
  --project="${PROJECT_ID}" \
  --display-name="GitHub Actions Deployer"

# Grant SA access to Artifact Registry and GKE
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions-deployer@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions-deployer@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="roles/container.developer"

# Bind the WIF pool to the Service Account
gcloud iam service-accounts add-iam-policy-binding "github-actions-deployer@${PROJECT_ID}.iam.gserviceaccount.com" \
  --project="${PROJECT_ID}" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/$(gcloud projects describe ${PROJECT_ID} --format='value(projectNumber)')/locations/global/workloadIdentityPools/github-pool/attribute.repository/${GITHUB_ORG}/${GITHUB_REPO}"

echo "Bootstrap complete. WIF Trust configured."
