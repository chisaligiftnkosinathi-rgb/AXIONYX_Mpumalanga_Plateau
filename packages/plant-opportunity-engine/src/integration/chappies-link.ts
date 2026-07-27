import { OpportunityGenome } from '../genome/opportunity-genome';

export interface CapabilityQuest {
  questId: string;
  learnerCuriosity: string;
  assignedBlueprint: OpportunityGenome;
  steps: string[];
}

export class ChappiesLink {
  public generateCapabilityQuest(curiosity: string, genome: OpportunityGenome): CapabilityQuest {
    return {
      questId: `QUEST-${Date.now()}`,
      learnerCuriosity: curiosity,
      assignedBlueprint: genome,
      steps: [
        `Align ${curiosity} with ${genome.problem}`,
        ...genome.learningPath,
        `Build evidence portfolio for ${genome.potentialNode}`
      ]
    };
  }
}
