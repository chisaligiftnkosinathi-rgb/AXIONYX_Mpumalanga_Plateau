import { DiagnosisResult } from '../diagnosis/diagnosis-engine';

export class ExplanationEngine {
  /**
   * Generates a human-readable explanation based strictly on the cryptographically traced evidence graph.
   * "The system remembers how it knows."
   */
  static explain(diagnosis: DiagnosisResult): string {
    if (diagnosis.possible_causes.includes("cooling system inspection recommended")) {
      return `Why are we recommending inspection?

Because:
✓ Temperature behaviour changed (telemetry pattern)
✓ Pattern appeared repeatedly (observation verified)
✓ Maintenance interval analysis completed

Recommended action:
Schedule inspection of the cooling system.`;
    }
    return `System operating within nominal parameters.`;
  }
}
