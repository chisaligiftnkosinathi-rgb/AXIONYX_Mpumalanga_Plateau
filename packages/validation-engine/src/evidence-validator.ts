export enum EvidenceLevel {
  E0_CLAIM = 'E0_CLAIM',
  E1_HUMAN_OBSERVATION = 'E1_HUMAN_OBSERVATION',
  E2_DOCUMENT = 'E2_DOCUMENT',
  E3_DATASET = 'E3_DATASET',
  E4_INDEPENDENT = 'E4_INDEPENDENT',
  E5_ACCREDITED = 'E5_ACCREDITED'
}

export class EvidenceValidator {
  public validate(evidenceType: string): EvidenceLevel {
    if (evidenceType.includes('SANAS')) return EvidenceLevel.E5_ACCREDITED;
    if (evidenceType.includes('Dataset')) return EvidenceLevel.E3_DATASET;
    if (evidenceType.includes('Certificate')) return EvidenceLevel.E2_DOCUMENT;
    return EvidenceLevel.E0_CLAIM;
  }
}
