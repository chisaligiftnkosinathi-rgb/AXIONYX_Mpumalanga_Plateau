export interface CapabilitySearch {
  skills: string[];
  evidenceLevel: number;
}

export interface IndustryProblem {
  id: string;
  description: string;
  requiredSolution: string;
}

export class OpportunityDetector {
  public findGaps(problem: IndustryProblem, search: CapabilitySearch) {
    return {
      potentialMatch: true,
      reason: `Found capability matching ${search.skills.join(', ')} to solve ${problem.requiredSolution}`
    };
  }
}
