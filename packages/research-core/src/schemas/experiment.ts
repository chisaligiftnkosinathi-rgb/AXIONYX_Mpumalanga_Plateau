// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-core/src/schemas/experiment.ts

export interface Experiment {
  id: string;
  name: string;
  scenarioId: string;
  variablesTested: string[];
  results: string[]; // Event Stream IDs
  isCompleted: boolean;
}
