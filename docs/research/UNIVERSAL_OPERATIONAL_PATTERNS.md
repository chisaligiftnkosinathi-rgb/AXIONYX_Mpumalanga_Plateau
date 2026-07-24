# Universal Operational Patterns

The AXIONYX Kernel is an ontology-driven Operational Intelligence Platform. It does not contain industry-specific logic. Instead, it models recurring **Operational Patterns**.

By organizing knowledge by operational behavior rather than industry, we prove that laboratories, fleets, mines, and municipalities are fundamentally identical at the computational level. Any new domain simply configures these patterns with a different ontology, telemetry source, and policy set.

---

## 1. The Threshold Detection Pattern

**Flow:**
`Continuous Monitoring` → `Threshold Exceeded` → `Risk Scoring` → `Escalation` → `Intervention` → `Reporting`

**Domain Instances:**
- **Laboratory:** ICP-MS internal standard drift exceeds 2% → Workflow paused.
- **Fleet:** Vehicle exceeds 120km/h → Driver score drops, manager alerted.
- **Water Plant:** Chlorine level falls below minimum → Operations center notified.

---

## 2. The Asset Health & Maintenance Pattern

**Flow:**
`Asset Utilization/Wear` → `Prediction Threshold` → `Maintenance Required` → `Evidence Created` → `Audit/Sign-off`

**Domain Instances:**
- **Laboratory:** Mass spectrometer cone hours exceed 500h → Cleaning required.
- **Mining:** Crusher vibration frequency shifts → Preventive maintenance scheduled.
- **Fleet:** Truck engine hours exceed service interval → Workshop booking generated.

---

## 3. The Queue & Allocation Pattern

**Flow:**
`Queue Ingestion` → `Priority Scoring` → `Resource Allocation` → `Execution` → `Completion`

**Domain Instances:**
- **Laboratory:** Urgent water samples arrive → Assigned to standby GC-MS immediately.
- **Municipality:** Burst pipe reported → Nearest available technician dispatched.
- **Manufacturing:** High-priority custom order received → Assembly line dynamically rerouted.

---

## 4. The Chain of Custody Pattern

**Flow:**
`Asset Registered` → `Transfer of Custody` → `Cryptographic Signature` → `Location/State Update` → `Final Archive`

**Domain Instances:**
- **Laboratory:** Blood sample passes from courier to receiving bay to analyst to fridge.
- **Logistics:** High-value pharmaceutical pallet moves across cold-chain checkpoints.
- **Law Enforcement:** Forensic evidence moves from crime scene to secure locker.

---

## 5. The Compliance & Approval Pattern

**Flow:**
`Activity Completed` → `Evidence Evaluated against Policy` → `Pass/Fail` → `Secondary Approval` → `Certificate Published`

**Domain Instances:**
- **Laboratory:** Final measurement passes ISO 17025 checks → Quality Manager signs off → CoA published.
- **Energy:** Power station shift change completed → Safety checks passed → Plant remains operational.
- **Healthcare:** Patient vitals normalize → Policy clears discharge → Doctor signs release.
