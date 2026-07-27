import { HumanCapabilityGenome } from '../genome/human-capability';

export interface IndustrialDemand {
  industry: string;
  requiredSkills: string[];
  location: string;
}

export class CapabilityMatcher {
  public calculateMatchScore(person: HumanCapabilityGenome, demand: IndustrialDemand, personLocation: string): number {
    let score = 0;
    
    // Knowledge intersection
    const matchingSkills = person.knowledge.filter(k => demand.requiredSkills.includes(k));
    score += matchingSkills.length * 20;

    // Location match
    if (personLocation === demand.location) {
      score += 30;
    }

    // Evidence weight
    const avgEvidence = person.evidence.reduce((acc, curr) => acc + curr.strength, 0) / (person.evidence.length || 1);
    score += avgEvidence * 0.5;

    return Math.min(score, 100);
  }
}
