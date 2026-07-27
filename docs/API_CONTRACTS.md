# API Contracts and Versioning Policy
**Phase A: Architecture Freeze**

## 1. Package Boundaries
AXIONYX strictly isolates domains into discrete NPM packages within the monorepo:
- `packages/observation-layer` (Ingestion & Normalization)
- `packages/validation-engine` (OVL, Provenance, Evidence Tiering)
- `packages/knowledge-graph` (Entity Relationships)
- `packages/moc-engine` (Missions, Objectives, Constraints)
- `packages/decision-engine` (Policy Resolution, Action Ranking)
- `packages/operational-pilot` (The 10-Stage Orchestrator)

*Rule: Downstream packages may consume upstream models, but upstream packages must NEVER import downstream logic. (e.g., `observation-layer` cannot import from `decision-engine`).*

## 2. Canonical Observation API (Internal)
All incoming telemetry MUST conform exactly to this schema before being published to the Event Bus:
```typescript
interface ObservationEvent {
  metadata: { eventType: string; adapterId: string; version: string; };
  payload: {
    id: string; occurredAt: string; receivedAt: string;
    source: string; asset: string; measurement: string;
    value: any; unit: string; confidence: number;
    provenance: string; checksum: string;
  };
  provenance: { origin: string; chainHashes: string[]; };
  evidenceStatus: 'PENDING_OVL' | 'VALIDATED' | 'REJECTED';
}
```

## 3. Decision Result API
The handoff between the Decision Engine and the Approval/Execution layers MUST conform to:
```typescript
interface ExplainabilityRecord {
  observed: string;
  evidence: string;
  mission: string;
  why: string;
  confidence: string;
}

interface DecisionResult {
  actionId: string;
  decision: 'APPROVE' | 'REJECT' | 'REQUIRE_MORE_DATA';
  confidence: number;
  risk: 'LOW' | 'MEDIUM' | 'HIGH';
  uncertainty: 'LOW' | 'MEDIUM' | 'HIGH';
  explainability: ExplainabilityRecord;
}
```

## 4. Versioning Policy (SemVer strictly enforced)
- **Missions & Constraints**: versioned using standard `major.minor.patch` string (e.g., `1.0.0`).
- **Breaking Changes**: Any modification to a Hard Constraint or a Mission Objective requires a Major version bump.
- **Auditing**: Records must preserve the exact version string of the active Mission and Policy that drove the decision.
