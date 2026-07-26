import { VerificationState } from '../schemas/verification.schema';
import { EquipmentReality } from '../schemas/equipment-event.schema';

export class VerificationEngine {
  /**
   * Deterministically verifies requirements against collected evidence.
   */
  static verify(reality: EquipmentReality, requirementName: string, expectedEvidenceKeyword: string): VerificationState {
    const hasEvidence = reality.design_events.some(e => 
      e.event === 'verification_completed' && 
      e.evidence.some(ev => ev.includes(expectedEvidenceKeyword))
    );

    return {
      requirement: requirementName,
      evidence_found: hasEvidence,
      verification_state: hasEvidence ? 'SUPPORTED' : 'UNSUPPORTED'
    };
  }
}
