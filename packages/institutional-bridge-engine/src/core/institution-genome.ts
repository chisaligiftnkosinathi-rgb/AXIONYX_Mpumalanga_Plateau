export type InstitutionType = 'ACADEMIA' | 'INDUSTRY' | 'GOVERNMENT' | 'CAPITAL';

export interface InstitutionGenome {
  institutionId: string;
  name: string;
  type: InstitutionType;
  location: string;
  capabilities: string[];
  needs: string[];
  evidenceRequirements: string[];
  relationships: string[];
}
