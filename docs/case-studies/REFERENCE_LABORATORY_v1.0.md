# AXIONYX Reference Laboratory Case Study
**Version 1.0 - Validation Track Validation**

## Executive Summary
This case study demonstrates the capability of the AXIONYX Operational Intelligence Platform in a live physical laboratory environment. It tracks a single, high-risk scenario—Instrument Drift—from raw physical observation through automated policy enforcement to the generation of cryptographically secure evidence.

## 1. What operational problem existed?
Modern laboratories struggle with **delayed intervention**. When an analytical instrument (such as an ICP-MS) drifts out of calibration, the drift is often only detected during post-analysis data review. This results in wasted reagents, destroyed samples, manual rework, and delayed client turnaround times.

## 2. How did AXIONYX observe it?
The platform was connected to the physical ICP-MS via the `AgilentIcpMsAdapter` operating inside the `RealityInbox`. AXIONYX observed the live CSV output stream from the instrument and converted the raw strings into structured `Observation` records in real time.

## 3. What evidence was collected?
Instead of simply caching the measurement, AXIONYX generated an immutable `MeasurementCaptured` Domain Event. This event explicitly captured:
- The measured concentration value
- The timestamp of acquisition
- The unique `aggregateId` of the sample (e.g., `S-001`)
- The explicit identity of the machine (`ICP-MS-01`)
- The explicit identity of the Operator on shift.

## 4. Which policies were applied?
The AXIONYX Policy Engine intercepted the event before any state was mutated. It loaded the active `ISO17025_InstrumentDriftPolicy` rule. Evaluating the `MeasurementCaptured` evidence against the historical baseline, the Policy Engine detected a 3.2% drift, exceeding the configured 2.0% maximum allowable threshold.

## 5. What workflow decisions were made?
Because AXIONYX workflows contain no logic and strictly follow Policy Engine mandates, the workflow engine automatically executed the `PAUSE_WORKFLOW` action.
- Sample processing for the batch was halted immediately.
- The `Trust Score` of the instrument degraded.
- A `Calibration Required` intervention was scheduled.

## 6. What measurable outcomes improved?
- **Response Time:** Intervention occurred in < 1 second of the measurement being acquired, compared to hours or days in traditional post-review setups.
- **Traceability:** The `Evidence Explorer` allowed auditors to click the "Workflow Paused" event and instantly trace it back down the tree to the exact ICP-MS output file that caused it.
- **Zero Ambiguity:** The exact version of the ISO 17025 policy that fired is immutably recorded in the PostgreSQL Event Store. Replaying the event store from scratch identically rebuilds the paused workflow state.

## Conclusion
The AXIONYX Reference Laboratory proves that by separating Observation, Evidence, Policy, and Workflow, the platform acts as an indestructible "Operational Git Blame"—ensuring that every decision is instantly understandable, perfectly reproducible, and cryptographically secure.
