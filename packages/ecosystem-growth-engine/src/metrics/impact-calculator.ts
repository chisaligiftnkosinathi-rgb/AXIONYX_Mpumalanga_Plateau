export interface ImpactData {
  revenueGenerated: number;
  businessesCreated: number;
  skillsDeveloped: number;
  problemsSolved: number;
}

export class ImpactCalculator {
  public aggregateImpact(data: ImpactData) {
    return {
      economicImpact: `ZAR ${data.revenueGenerated} | ${data.businessesCreated} Nodes`,
      humanImpact: `${data.skillsDeveloped} Capability Quests completed`,
      industrialImpact: `${data.problemsSolved} Ecosystem Pressures resolved`
    };
  }
}
