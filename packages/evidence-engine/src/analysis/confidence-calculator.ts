// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/evidence-engine/src/analysis/confidence-calculator.ts

import { Evidence } from '../schemas/evidence';

export interface ConfidenceDecomposition {
  evidenceQuality: number;
  reproducibility: number;
  domainCoverage: number;
  measurementAccuracy: number;
  modelAgreement: number;
  overall: number;
}

export class ConfidenceCalculator {
  /**
   * Generates a multi-dimensional confidence score for a proposed Principle
   * based on the array of supporting evidence.
   */
  static decomposeConfidence(evidenceSet: Evidence[]): ConfidenceDecomposition {
    // Mock algorithm for decomposing confidence
    const avgQuality = evidenceSet.reduce((acc, ev) => acc + ev.qualityScore, 0) / (evidenceSet.length || 1);
    const avgAccuracy = evidenceSet.reduce((acc, ev) => acc + ev.measurement.accuracy, 0) / (evidenceSet.length || 1);
    
    return {
      evidenceQuality: avgQuality,
      reproducibility: Math.min(1.0, evidenceSet.length * 0.1), // more evidence = higher reproducibility score
      domainCoverage: 0.70, // Mock: would check unique domains in provenance
      measurementAccuracy: avgAccuracy,
      modelAgreement: 0.85, // Mock: would check validation against multiple world models
      overall: (avgQuality + avgAccuracy) / 2 // simplified overall score
    };
  }
}
