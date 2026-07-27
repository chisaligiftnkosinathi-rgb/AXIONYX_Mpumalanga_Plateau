export interface FrictionProfile {
  currencyFriction: number;
  regulatoryFriction: number;
  logisticsFriction: number;
  dataSovereigntyFriction: number;
}

export class FrictionCalculator {
  /**
   * Calculates total resource friction between two capability genomes.
   * If friction is high, it heavily penalizes the Capability Emergence Index (CEI).
   */
  public calculateTotalFriction(profile: FrictionProfile): number {
    const total = 
      profile.currencyFriction + 
      profile.regulatoryFriction + 
      profile.logisticsFriction + 
      profile.dataSovereigntyFriction;
    
    // Ensure friction is never zero to prevent division by zero in CEI
    return Math.max(total, 0.1);
  }
}
