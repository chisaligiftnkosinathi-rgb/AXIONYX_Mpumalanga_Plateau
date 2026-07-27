import { OpportunityGenome } from '../genome/opportunity-genome';

export class CapabilityBlueprint {
  public extractRequiredCapabilities(problem: string): string[] {
    if (problem.toLowerCase().includes('transport') || problem.toLowerCase().includes('mobility')) {
      return ['Fleet Management', 'Mechanical Diagnostics', 'Software Engineering', 'Driver Network Management'];
    }
    if (problem.toLowerCase().includes('water') || problem.toLowerCase().includes('sampling')) {
      return ['Environmental Science', 'Analytical Chemistry', 'Sampling Protocols'];
    }
    return ['General Problem Solving', 'Adaptability'];
  }

  public generateBlueprint(problemDesc: string, location: string): OpportunityGenome {
    const required = this.extractRequiredCapabilities(problemDesc);
    return {
      opportunityId: `OPP-${Date.now()}`,
      problem: problemDesc,
      location,
      industry: 'TBD',
      requiredCapability: required,
      learningPath: required.map(r => `Learn basics of ${r}`),
      capitalRequirement: 50000,
      potentialNode: `${location} Solution Node`
    };
  }
}
