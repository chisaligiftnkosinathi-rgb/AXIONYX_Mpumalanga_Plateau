# AXIONYX Platform Architecture

**Document Type:** Engineering Constitution
**Status:** Active
**Authority:** Core Engineering

> **The AXIONYX Platform is not a collection of applications. It is a capability operating system where every person, project, artifact, and economic outcome is connected through a shared model of identity, evidence, ownership, and impact.**

## 1. Domain-First Architecture
The platform is organized entirely around capabilities, not user interfaces. The UI is simply a translation layer. The core entity lineage must flow unbroken:
`User -> Identity -> Capability -> Mission -> Project -> Artifact -> Evidence -> IP Asset -> License -> Customer -> Revenue Event -> Impact Measurement`

## 2. API Contract First
Before any application is built, API schemas, event schemas, and domain types must be defined within `packages/contracts` using OpenAPI, Zod, and TypeScript types. This prevents domain fragmentation.

## 3. Event-Driven Architecture
Every state change in the ecosystem records evolution via an Event-Driven Architecture. For example: `PROJECT_CREATED` -> `EVIDENCE_CAPTURED` -> `VALIDATION_COMPLETED` -> `IP_REGISTERED` -> `LICENSE_CREATED` -> `REVENUE_RECEIVED`. This continuous stream feeds the Observatory and Knowledge Graph.

## 4. AI Gateway
Applications do not directly connect to OpenAI, Gemini, or local models. All AI interaction flows through the `ai-service` Gateway to ensure provider independence, cost control, logging, safety, and evaluation.

## 5. Security & Identity Foundation
The ecosystem handles student identities, IP, customer systems, and payments. The `packages/security` module enforces row-level permissions, audit logs, and encryption. Identity relies on Supabase Auth.

## 6. Local Development First
A learner must be able to run `axionyx start` via Docker Compose to spin up the complete developer environment (PostgreSQL, Supabase local, Redis, AI services, API services, Frontend) inside their Workspace.

## 7. The AXIONYX SDK
Learners build using AXIONYX primitives via the `tooling-sdk` and `ai-sdk`. 
```typescript
import { Mission } from "@axionyx/domain";
import { Evidence } from "@axionyx/evidence";
import { License } from "@axionyx/ip";
```

## 8. Build Order
1. **Phase 0 (Platform Foundation):** Monorepo, Database, Domain, Auth, Contracts, UI system.
2. **Phase 1 (Capability Workspace):** Identity, Mission, Projects, Evidence, Git integration.
3. **Phase 2 (Academy):** Curriculum tracking, Learning progress, Mentorship, Graduation.
4. **Phase 3 (Commercial Engine):** IP Registry, Licensing, Marketplace, Payments.
5. **Phase 4 (Intelligence Layer):** Knowledge graph, AI agents, Observatory.
