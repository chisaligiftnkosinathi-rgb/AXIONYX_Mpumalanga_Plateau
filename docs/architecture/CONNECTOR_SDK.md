# AXIONYX Connector SDK & Certification Standard

To support the vision of a universal Operational Intelligence Platform, AXIONYX exposes a public SDK allowing third-party integrators (OEMs, System Integrators) to author custom adapters.

## The Certification Standard
Before an adapter can be listed in the **Connector Marketplace**, it must pass the following certification checks:

1. **Reliable Observation Ingestion:** Must handle backpressure and guarantee at-least-once delivery to the `Reality Inbox`.
2. **Schema Validation:** Payloads must perfectly conform to the canonical `Observation` ontology.
3. **Replay Compatibility:** Must include historical backfill capabilities to support initial Replay Center generation.
4. **Evidence Preservation:** Must cryptographically sign the origin source (e.g., MAC address of an IoT sensor).
5. **Health Monitoring:** Must implement standard heartbeat and status telemetry.

## Interfaces
All connectors must implement `IOperationalSystemAdapter`:
```typescript
interface IOperationalSystemAdapter {
    connect(): Promise<void>;
    observe(): AsyncIterable<Observation>;
    capabilities(): CapabilityDescriptor[];
    disconnect(): Promise<void>;
}
```
