# ADR 0001: Event Sourcing as the Source of Truth

**Context:** AXIONYX must provide absolute cryptographic explainability for every operational decision made. Traditional CRUD databases overwrite state, destroying historical context.
**Decision:** We will use Event Sourcing. Every state change is stored as an immutable domain event in an append-only ledger.
**Consequences:** High auditability, perfect Replay Center functionality. Requires Projection Engines to build read-models.
**Alternatives Considered:** Relational tables with heavy audit logging (Rejected due to complexity in perfectly reconstructing state years later).
