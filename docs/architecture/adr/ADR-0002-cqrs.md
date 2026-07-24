# ADR 0002: Command Query Responsibility Segregation (CQRS)

**Context:** Mission Control and the Evidence Explorer require instantaneous, complex querying of data, but the Event Store is optimized for append-only writes.
**Decision:** We will implement CQRS, separating the write models (Event Store) from the read models (Projections).
**Consequences:** Enables rapid dashboard rendering and horizontal scaling of read infrastructure, at the cost of eventual consistency.
**Alternatives Considered:** Direct querying of the Event Store (Rejected due to unacceptable latency during deep explainability traces).
