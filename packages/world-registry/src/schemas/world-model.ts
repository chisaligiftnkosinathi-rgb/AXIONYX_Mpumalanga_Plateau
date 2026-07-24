// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/world-registry/src/schemas/world-model.ts

export interface WorldModel {
  id: string;
  name: string; // e.g. "Earth Water Climate v1"
  domains: string[];
  entities: string[];
  flows: string[];
  validatedPrinciples: string[];
  simulationVersion: string;
  evidenceLevel: number; // Aggregate confidence based on experiments
}
