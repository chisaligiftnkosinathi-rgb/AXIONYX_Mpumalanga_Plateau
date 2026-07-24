# AXIONYX Deployment Readiness Checklist

Every release must satisfy this checklist before it reaches the Google Kubernetes Engine (GKE) production environment.

## 1. Engineering
- [ ] All tests pass
- [ ] Replay Verification Suite passes
- [ ] Containers build successfully
- [ ] Security scan passes

## 2. Platform
- [ ] Health endpoints operational
- [ ] Metrics exported
- [ ] Structured logging enabled
- [ ] Secrets stored in Secret Manager

## 3. Demonstration
- [ ] Golden Path replay package verified
- [ ] Mission Control renders correctly
- [ ] Replay Center synchronized
- [ ] Evidence Explorer complete
- [ ] Demo Console generates outputs
- [ ] Experience Portal publicly accessible

## 4. Operations
- [ ] Backup strategy verified
- [ ] Rollback procedure tested
- [ ] Monitoring dashboards active
- [ ] Incident runbook available
