// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/trust-engine/src/quarantine/quarantine-zone.ts

import { TrustEvaluation } from '../trust-scorer';

export class QuarantineZone {
  private quarantinedEvents: TrustEvaluation[] = [];

  /**
   * Isolates CRITICAL trust telemetry, preventing it from corrupting
   * the Digital Twin state, while preserving it for security forensics.
   */
  isolate(evaluation: TrustEvaluation) {
    console.log(`[Quarantine Zone] Event isolated: ${evaluation.event.assetId} | Reasons: ${evaluation.reasons.join(', ')}`);
    this.quarantinedEvents.push(evaluation);
    // Triggers Cerberus Governance Agent investigation workflow
  }
}
