# AXIONYX Decision Support Platform
**Architecture Guide — Alpha 1.0**

## 1. Platform Philosophy
AXIONYX is an evidence-driven, domain-agnostic decision support platform. It is not merely an AI abstraction; it is a rigid scientific organism designed to survive contact with physical reality. It gathers observations, tests evidence, aligns with strict operational constraints, and justifies every recommendation transparently before execution.

## 2. Canonical Data Model
At the heart of the platform is the **Canonical Observation Envelope**. Regardless of the source (OPC UA, LIMS, CSV), all physical data is wrapped into a unified, immutable record containing:
- `metadata`: Source, Adapter, Version
- `payload`: The actual measurement and unit
- `provenance`: Origin tracking and chain-of-custody hashes
- `evidenceStatus`: State of validation within the platform

## 3. The 10-Stage Event Pipeline
AXIONYX operates sequentially across 10 deterministic stages:
1. **Observation**: Raw data ingested from the physical world.
2. **Evidence (OVL)**: Provenance verified and confidence assigned.
3. **Knowledge**: Domain intelligence models updated.
4. **Mission**: Active objective and constraints loaded.
5. **Constraints**: Action evaluated against Hard constraints.
6. **Decision**: Soft constraints optimized and action selected.
7. **Explainability**: 5-Point reasoning generated.
8. **Approval**: Authorization requested from operator.
9. **Execution**: Action enacted (Observation, Simulation, or physical).
10. **Learning**: Residual error tracked for model update.

## 4. Evidence Hierarchy
Evidence is scientifically graded (E0-E5) within the Observatory Validation Laboratory (OVL). Only data that proves its provenance, reproducibility, and agreement with observed reality can be upgraded to higher confidence tiers, preventing AI inflation or hallucinatory action.

## 5. Mission and Constraints
The Mission, Objectives & Constraints (MOC) Engine provides strict operational policy.
- **Missions** define the overall objective (e.g., "Produce Export-Quality Coal").
- **Hard Constraints** (Safety, Compliance, Equipment Limits) are boolean gates. A violation triggers an immediate, non-negotiable rejection.
- **Soft Constraints** (Cost, Throughput) are heavily weighted penalties used to rank valid actions.

## 6. Decision Policy
Deterministic rules resolve conflicts between multiple valid actions. Policy strictly dictates the priority order (e.g., Safety > Compliance > Evidence Quality > Mission Success > Cost), ensuring the platform's recommendations are infinitely reproducible and immune to random variation.

## 7. The 5-Point Explainability Protocol
The system is never a black box. Every recommendation must output:
1. What was observed?
2. What evidence supports this?
3. Which mission is being optimized?
4. Why was this action selected?
5. What is the confidence level?

## 8. Integration Model
Integration with the physical world is handled through decoupled **Adapters** in the Observation Layer. Whether reading a CSV file or listening to a live MQTT broker, adapters translate proprietary protocols into the Canonical Envelope, shielding the core pipeline from domain-specific implementation details.

## 9. Security and Governance
- **Immutable Events**: Once an event enters the system, it cannot be edited. Corrections are issued as new, superseding events.
- **First-Class Versioning**: Every mission, constraint, and decision policy is strictly versioned (`effectiveFrom`, `author`, `approval`) to allow perfect historical replay and auditing.

## 10. Deployment Architecture
- `packages/*`: Core logic engines (OVL, MOC, Decision, Observation).
- `apps/*`: Presentation layers and Role-based UX (Dashboards).
- The platform can run entirely offline or air-gapped on edge hardware inside industrial facilities, maintaining strict data sovereignty.

## 11. Global Holding Governance
AXIONYX strictly enforces the operational rules of a Global Holding network:
- **Asset Protection**: Every registered business entity is fundamentally treated as a protected asset monitored by the constraint engine.
- **Financial Centralization**: All downstream payments and billing operations must route upward to the central Mother Company's banking infrastructure (`ROUTE_TO_MOTHER`).
- **Decentralized Logistics**: While finance is centralized, each subsidiary entity maintains its own independent "shipping logic" and operational workflows.
- **Mandatory Pre-Declaration**: No entity can join the Global network without fully declaring its owned assets (hardware, vehicles, real estate) prior to registration.

## 12. Seed & Fruit Incubation Lineage
AXIONYX tracks the provenance of wealth creation across the network using the "Seed and Fruit" linkage:
- **The Seed (Origin)**: Community capital or foundational entities (e.g., a Stokvel) that provide the initial treasury or energy.
- **The Fruit (Realization)**: The resultant corporate asset or business (e.g., Imbally) that grows from the Seed.
- **The Lineage Map**: By linking the Fruit back to the Seed via `seedEntityId`, the platform mathematically proves how community wealth incubates structural corporate assets within the Global Holding network.
