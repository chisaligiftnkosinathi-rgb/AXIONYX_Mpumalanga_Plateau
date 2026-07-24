// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/trust-engine/src/schemas/trust.ts

import { StandardReference } from '../../../competency-engine/src/schemas/capability';

export interface RawEvidence {
  id: string;
  sourceType: 'Observation' | 'Measurement' | 'Investigation' | 'Pull Request';
  content: string;
  timestamp: Date;
  submittedBy: string; // Actor ID
}

export interface VerificationEvaluation {
  evidenceId: string;
  standardMatched: StandardReference;
  isCredible: boolean;
  confidenceScore: number; // Evaluated trust in the evidence (0.0 to 1.0)
  reasoning: string;       // Why do we believe this person has this capability?
  verifiedBy: string;      // Actor ID of the auditor
  verificationDate: Date;
}

export interface ProvenanceChain {
  claimId: string;
  evidence: RawEvidence[];
  verifications: VerificationEvaluation[];
  establishedTrustLevel: number;
}
