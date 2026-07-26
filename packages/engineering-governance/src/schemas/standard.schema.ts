export interface StandardRequirement {
  id: string;
  description: string;
  evidenceRequired: string[];
  verificationRules: string[];
}

export interface GovernanceStandard {
  id: string;
  name: string; // e.g., "ISO 9001"
  version: string; // e.g., "2015"
  effectiveDate: string;
  supersededBy?: string; // Links to newer version if deprecated
  requirements: StandardRequirement[];
}
