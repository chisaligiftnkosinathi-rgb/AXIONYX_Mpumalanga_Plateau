// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/evidence-engine/src/schemas/evidence.ts

import { Measurement } from './measurement';
import { EvidenceSource } from './source';
import { Uncertainty } from './uncertainty';
import { ProvenanceGraph } from './provenance';

export interface Evidence {
  id: string;
  claim: string; // The specific observation or pattern being supported
  source: EvidenceSource;
  measurement: Measurement;
  uncertainty: Uncertainty;
  provenance: ProvenanceGraph;
  qualityScore: number; // Analyzed quality score (0.0 to 1.0)
  timestamp: Date;
}
