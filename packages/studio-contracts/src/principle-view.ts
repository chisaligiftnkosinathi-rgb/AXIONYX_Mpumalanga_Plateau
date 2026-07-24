// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-contracts/src/principle-view.ts

import { EvidenceView } from './evidence-view';

export interface ConfidenceMetrics {
  evidenceQuality: number;
  reproducibility: number;
  domainCoverage: number;
  measurementAccuracy: number;
  modelAgreement: number;
  overall: number;
}

/**
 * Visual primitive representing "A Truth discovered by AXIONYX".
 * Renders the Principle Card in the Knowledge Observatory.
 */
export interface PrincipleView {
  id: string;
  name: string; // e.g. "Energy-State Relationship"
  domains: string[]; // e.g. ["Water", "Finance", "Chemistry"]
  confidenceMetrics: ConfidenceMetrics;
  evidence: EvidenceView[];
}
