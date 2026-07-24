// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/interpretation-engine/src/schemas/hypothesis.ts

/**
 * A Hypothesis represents a candidate theory before cross-domain validation.
 */
export interface Hypothesis {
  id: string;
  statement: string; // e.g., "Energy transfer influences material state"
  supportingPatterns: string[];
  testedDomains: string[]; // e.g., ["Water", "Metals"]
  confidence: number;
  evidence: string[];
  status: 'candidate' | 'validated' | 'rejected';
}
