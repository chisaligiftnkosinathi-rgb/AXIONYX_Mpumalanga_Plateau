// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/evidence-engine/src/schemas/uncertainty.ts

export interface Uncertainty {
  range: { min: number; max: number };
  assumptions: string[];
  limitations: string[];
  confidenceInterval: number; // e.g. 0.95 for 95% CI
}
