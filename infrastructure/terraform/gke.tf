# AXIONYX Infrastructure as Code - Google Kubernetes Engine (GKE) Autopilot

provider "google" {
  project = var.project_id
  region  = var.region
}

# ---------------------------------------------------------
# GKE Autopilot Cluster
# ---------------------------------------------------------
resource "google_container_cluster" "primary" {
  name     = "axionyx-autopilot"
  location = var.region

  # Enable Autopilot
  enable_autopilot = true

  # Release Channel
  release_channel {
    channel = "REGULAR"
  }

  # Security: Workload Identity is enabled by default in Autopilot
}

# ---------------------------------------------------------
# Artifact Registry for OCI Images
# ---------------------------------------------------------
resource "google_artifact_registry_repository" "axionyx_repo" {
  location      = var.region
  repository_id = "axionyx-registry"
  description   = "Docker repository for AXIONYX Platform images"
  format        = "DOCKER"
}
