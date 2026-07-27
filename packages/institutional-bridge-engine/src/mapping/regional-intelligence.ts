export interface RegionalMap {
  regionId: string;
  name: string;
  activeSkills: string[];
  activeIndustries: string[];
  infrastructureNodes: string[];
  opportunityFlow: number;
}

export class RegionalIntelligence {
  public calculateRCI(region: RegionalMap): number {
    const baseScore = 
      (region.activeSkills.length * 10) + 
      (region.activeIndustries.length * 15) + 
      (region.infrastructureNodes.length * 20) + 
      (region.opportunityFlow * 5);
      
    // Simplified scaling for demonstration
    return Math.min(Math.round(baseScore), 1000);
  }

  public generateMapOverlay(region: RegionalMap): string[] {
    return region.activeIndustries.map(ind => `${ind} Cluster -> Linked to ${region.activeSkills.length} Skills`);
  }
}
