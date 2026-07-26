export enum ContributionType {
  KNOWLEDGE = 'KNOWLEDGE',
  LABOUR = 'LABOUR',
  EQUIPMENT = 'EQUIPMENT',
  RESEARCH = 'RESEARCH',
  CAPITAL = 'CAPITAL',
  LEARNING = 'LEARNING'
}

export interface CapabilityContribution {
  actorId: string;
  role: string;
  contributionType: ContributionType;
  contributionDesc: string;
  evidence: string[];
  trustScore: number;
  capabilityImpact: number;
  timestamp: string;
  growthRingId: string;
}

export class ContributionRecordManager {
  /**
   * Mints a permanent, sovereign record of a contributor's value addition.
   */
  public mintRecord(contribution: CapabilityContribution): CapabilityContribution {
    // In production, this would be sealed into a decentralized ledger or immutable log
    console.log(`[LEDGER] Minting contribution for ${contribution.actorId} in Ring ${contribution.growthRingId}`);
    return contribution;
  }
}
