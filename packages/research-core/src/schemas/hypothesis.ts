// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-core/src/schemas/hypothesis.ts

export interface Hypothesis {
  id: string;
  statement: string;
  requiredEvidenceIds: string[];
  validationStatus: 'PENDING' | 'SUPPORTED' | 'REJECTED';
}
