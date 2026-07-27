import { InstitutionType } from '../core/institution-genome';

export class InstitutionalTranslator {
  public translateCapability(capabilityGenome: string, targetType: InstitutionType): string {
    switch (targetType) {
      case 'ACADEMIA':
        return `Research Competency: ${capabilityGenome}`;
      case 'INDUSTRY':
        return `Supplier Capability: ${capabilityGenome}`;
      case 'GOVERNMENT':
        return `Economic Development Asset: ${capabilityGenome}`;
      case 'CAPITAL':
        return `Verified Investment Opportunity: ${capabilityGenome}`;
      default:
        return capabilityGenome;
    }
  }

  public translateEvidence(evidenceString: string, targetType: InstitutionType): string {
    if (targetType === 'GOVERNMENT' && evidenceString.includes('Revenue')) {
      return 'Tax Compliance Record (SARS Adapter)';
    }
    if (targetType === 'INDUSTRY' && evidenceString.includes('Testing')) {
      return 'Accreditation Pathway (Mining Adapter)';
    }
    return evidenceString;
  }
}
