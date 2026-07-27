import { EvidenceLevel } from './evidence-validator';

export class ConfidenceCalculator {
  public calculateCTGI(level: EvidenceLevel): number {
    switch (level) {
      case EvidenceLevel.E5_ACCREDITED: return 99;
      case EvidenceLevel.E4_INDEPENDENT: return 85;
      case EvidenceLevel.E3_DATASET: return 70;
      case EvidenceLevel.E2_DOCUMENT: return 50;
      case EvidenceLevel.E1_HUMAN_OBSERVATION: return 30;
      case EvidenceLevel.E0_CLAIM: return 10;
      default: return 0;
    }
  }
}
