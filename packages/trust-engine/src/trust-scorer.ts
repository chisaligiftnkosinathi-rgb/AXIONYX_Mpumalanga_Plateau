// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/trust-engine/src/trust-scorer.ts

import { TelemetryEvent } from '../../iot-ingestion-engine/src/normalization/telemetry-event';

export type TrustState = 'HIGH' | 'LOW' | 'CRITICAL';

export interface TrustEvaluation {
  event: TelemetryEvent;
  score: number;
  state: TrustState;
  reasons: string[];
}

export class TrustScorer {
  /**
   * Principle: "Reality Requires Provenance"
   * Evaluates telemetry and assigns a three-state trust classification.
   */
  static evaluate(event: TelemetryEvent): TrustEvaluation {
    let score = event.quality * 100; // Base score from sensor confidence
    const reasons: string[] = [];

    // Simulated evaluation constraints
    if (event.value > 150 && event.measurement === 'temperature') {
      score = 15; // Critical failure, physically impossible for this asset
      reasons.push('Outside physical constraints');
    } else if (event.value > 100 && event.measurement === 'temperature') {
      score = 62; // Low trust, anomalous but possible
      reasons.push('Sensor drift or abnormal condition detected');
    } else {
      reasons.push('Normal operating range', 'Known sensor identity');
    }

    let state: TrustState = 'HIGH';
    if (score < 40) state = 'CRITICAL';
    else if (score < 80) state = 'LOW';

    console.log(`[Trust Engine] Evaluated ${event.assetId} -> Score: ${score}% (${state})`);

    return { event, score, state, reasons };
  }
}
