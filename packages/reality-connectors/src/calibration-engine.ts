// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/reality-connectors/src/calibration-engine.ts

import { RealityObservation } from './schemas/timeseries';

export interface CalibrationResult {
  entityId: string;
  variable: string;
  expectedValue: number;
  actualValue: number;
  errorPercentage: number;
}

export class CalibrationEngine {
  /**
   * Compares the World Model's simulation output against Reality.
   */
  static computeError(expected: number, reality: RealityObservation): CalibrationResult {
    const errorPercentage = Math.abs(expected - reality.value) / expected;
    console.log(`[Calibration] Model Error computed: ${(errorPercentage * 100).toFixed(2)}%`);
    
    return {
      entityId: reality.entityId,
      variable: reality.variable,
      expectedValue: expected,
      actualValue: reality.value,
      errorPercentage
    };
  }
}
