// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/evidence-engine/src/schemas/provenance.ts

export interface ProvenanceGraph {
  experimentId: string;
  scenarioId: string;
  modelVersion: string;
  simulationRunId: string;
  eventId: string;
  observationId: string;
}
