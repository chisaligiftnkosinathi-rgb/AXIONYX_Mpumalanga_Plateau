// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/interpretation-engine/src/schemas/principle.ts

/**
 * A Principle is a Universal Rule validated across multiple domains.
 */
export interface Principle {
  id: string;
  name: string; // e.g., "Energy-State Relationship"
  description: string;
  domains: string[]; // e.g., ["Water", "Battery", "Economy"]
  evidence: string[]; // Supporting Hypotheses and Patterns
}
