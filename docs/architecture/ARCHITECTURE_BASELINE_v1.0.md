# AXIONYX ARCHITECTURE BASELINE
**Version:** v1.0.0
**Status:** FROZEN (Pre-Pilot)

## 1. Architectural Philosophy
*Reality is reconstructed from evidence, not assumptions.*
AXIONYX is an Operational Intelligence Platform. It derives current state strictly by replaying immutable domain events. The architecture aggressively decouples Policy (Decision), Workflow (Execution), and Persistence (Evidence).

## 2. Kernel Packages (v1.0.0)
No new kernel capabilities may be introduced unless justified by empirical evidence gathered during physical pilot deployments.

### Core Engines
- `@axionyx/event-bus`: Pub/Sub routing for Domain Events.
- `@axionyx/event-store`: PostgreSQL/Drizzle immutable ledger (4 planes).
- `@axionyx/projection-engine`: Rebuildable read models supporting strict CQRS.
- `@axionyx/workflow-engine`: XState-based execution layer.
- `@axionyx/policy-engine`: Data-driven compliance evaluation decoupled from code.
- `@axionyx/validation-engine`: Cryptographically signed IQ/OQ/PQ assertions.
- `@axionyx/identity`: Abstraction layer over Identity Providers (JWT/OIDC).
- `@axionyx/capability-registry`: Service self-discovery and dependency mapping.
- `@axionyx/publication-engine`: Immutable markdown/PDF report generation from Evidence.

## 3. Canonical Architecture Flow
```text
Reality (Instrument/User)
       ↓ (Observation)
Command API (Fastify)
       ↓ 
Policy Engine (Authorizes via active Standards)
       ↓
Workflow Engine (Executes transition)
       ↓
Domain Event
       ↓
Event Store (Appends Immutable Fact)
       ↓
Projection Engine (Updates ephemeral State)
       ↓
Server-Sent Events (SSE)
       ↓
Command Center UI (Observes State)
```

## 4. Semantic Versioning
All foundational packages are pinned at `v1.0.0`.
- Application configurations must explicitly declare dependency versions to ensure reproducible compliance during audits.

## 5. Deployment Model
- Infrastructure defined declaratively via Kubernetes.
- `Infrastructure Observer` maps K8s lifecycle events into the AXIONYX EventBus to maintain an observable Digital Twin of the infrastructure alongside the business domains.

## 6. Multi-Domain Generality
The Kernel is entirely domain-agnostic. To transition from a Laboratory Information Management System (LIMS) to Mining Intelligence, only the `Ontology`, `Policies`, and `Workflows` packages change. The Kernel remains immutable.
