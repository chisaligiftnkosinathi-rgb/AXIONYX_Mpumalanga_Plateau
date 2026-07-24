# AXIONYX Demonstration 1: Sample Lifecycle Intelligence

## Layer 1 — Executive Story (Business Value)
When a high-priority sample arrives at the laboratory, time is critical. AXIONYX instantly tracks the sample from physical registration to final certification, ensuring an unbroken chain of custody. By automatically enforcing quality policies at every step, AXIONYX prevents invalid data from reaching the client, eliminates manual audit preparation, and accelerates turnaround times by predicting bottlenecks before they happen.

## Layer 2 — Operational Story (Physical Flow)
1. **Analyst** registers the client request in the receiving bay.
2. The physical sample is barcoded and **Received**.
3. It is moved to the **ICP-MS** for chemical analysis.
4. The **Quality Manager** is notified of the results.
5. The **Certificate of Analysis (CoA)** is generated and dispatched to the client.

## Layer 3 — Operational Intelligence Story (The Universal Pipeline)
This represents the agnostic reasoning cycle of the AXIONYX platform:
`Observation` → `Evidence` → `Policy` → `Workflow` → `Projection` → `Decision` → `Publication`

## Layer 4 — Kernel Execution (Platform Behavior)
Behind the scenes, the AXIONYX Kernel orchestrates this flow through immutable events:
1. `SampleRegistrationSubmitted`
2. `PhysicalCustodyAcquired`
3. `MeasurementCaptured`
4. `PolicyEvaluated` (ISO 17025 validation passes)
5. `WorkflowAdvanced`
6. `ProjectionUpdated` (Mission Control visualizes the step)
7. `AuditPublished` (Narrative Engine generates the report)

## Layer 5 — Technical Appendix (For Engineering Evaluation)
*To prove the system logic, the underlying Event Store payloads reflect exact deterministic state.*

**Example Event: MeasurementCaptured**
```json
{
  "eventId": "e9b4-4b2a-8f12-092ccb3a98f1",
  "eventType": "MeasurementCaptured",
  "aggregateId": "S-001",
  "aggregateType": "Sample",
  "payload": {
    "instrumentId": "ICP-MS-01",
    "analyte": "Pb",
    "value": 12.41,
    "unit": "ppb"
  },
  "actor": "System::RealityInbox",
  "schemaVersion": "1.0.0",
  "occurredAt": "2026-07-24T12:00:00Z"
}
```

**Example Event: WorkflowAdvanced**
```json
{
  "eventId": "a1c2-9x87-3v45-119jjk2p67b0",
  "eventType": "WorkflowAdvanced",
  "aggregateId": "S-001",
  "aggregateType": "Sample",
  "payload": {
    "previousState": "ANALYZING",
    "newState": "PENDING_APPROVAL",
    "reason": "Policy Evaluated: PASS"
  },
  "policyVersion": "ISO17025_v2017",
  "actor": "System::PolicyEngine",
  "occurredAt": "2026-07-24T12:00:01Z"
}
```
