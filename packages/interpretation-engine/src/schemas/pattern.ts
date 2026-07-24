// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/interpretation-engine/src/schemas/pattern.ts

/**
 * A Pattern aggregates repeated Observations across domains into statistical structures.
 */
export interface Pattern {
  id: string;
  conditions: string[];
  transition: string[];
  result: string[];
  confidence: number;
  description: string; // e.g., "Energy input correlates with state transition"
}
