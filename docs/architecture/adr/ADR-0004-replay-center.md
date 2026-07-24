# ADR 0004: Event-Driven Replay Center

**Context:** Demonstrations, audits, and Academy lessons require historical context. Storing static videos is insufficient for exploring alternate decisions or proving exact system state.
**Decision:** Implement the Replay Center as a direct consumer of the Event Store (via a portable `JsonEventStoreAdapter`). The scrubber drives time, perfectly reconstructing the Digital Twin.
**Consequences:** Demonstrations become fully interactive and mathematically truthful.
**Alternatives Considered:** Screen recording software (Rejected due to lack of interactivity and verifiable evidence).
