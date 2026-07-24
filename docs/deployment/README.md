# AXIONYX Deployment Governance

This directory contains the operational runbooks and procedures for the AXIONYX platform. Because Operational Intelligence is our core product, our deployment and recovery practices must be flawless.

## 1. [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
Detailed instructions on how to use Kustomize and GitHub Actions to deploy to new cloud environments (AWS, Azure, GCP).

## 2. [RELEASE_PROCESS.md](RELEASE_PROCESS.md)
The strict CI/CD gates required before a release is approved (Security Scans, Linting, Replay Validation).

## 3. [BACKUP_STRATEGY.md](BACKUP_STRATEGY.md)
How we backup the immutable Event Store and PostgreSQL projections, ensuring zero historical data loss.

## 4. [DISASTER_RECOVERY.md](DISASTER_RECOVERY.md)
The procedure for completely regenerating the read models (Projections) from the Event Store in the event of total regional failure.

## 5. [RUNBOOK.md](RUNBOOK.md)
Standard operating procedures for managing the External Secrets Operator, responding to Observability alerts, and resolving scaling bottlenecks.
