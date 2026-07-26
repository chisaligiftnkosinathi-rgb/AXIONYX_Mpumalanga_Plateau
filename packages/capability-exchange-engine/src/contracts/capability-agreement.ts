export interface Contributor {
  role: string;
  contribution: string;
}

export interface CapabilityAgreement {
  opportunity: string;
  contributors: Contributor[];
  shared_learning: boolean;
  future_capability_created: string;
}

export class AgreementBuilder {
  public createLivingRecord(opportunity: string, contributors: Contributor[], capabilityCreated: string): CapabilityAgreement {
    return {
      opportunity,
      contributors,
      shared_learning: true,
      future_capability_created: capabilityCreated
    };
  }
}
