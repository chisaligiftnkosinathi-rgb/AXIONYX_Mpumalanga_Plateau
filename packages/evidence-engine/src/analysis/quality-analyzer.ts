// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/evidence-engine/src/analysis/quality-analyzer.ts

import { Measurement } from '../schemas/measurement';
import { EvidenceSource } from '../schemas/source';

export class QualityAnalyzer {
  /**
   * Assesses the fundamental quality of a single observation before it becomes Evidence.
   */
  static assessQuality(source: EvidenceSource, measurement: Measurement): number {
    // Weighs the reliability of the source against the accuracy of the instrument
    const baseQuality = (source.reliabilityScore + measurement.accuracy) / 2;
    return baseQuality;
  }
}
