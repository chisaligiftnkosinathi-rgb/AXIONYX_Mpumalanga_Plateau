export interface CapabilityLineageNode {
  contributorId: string;
  role: 'SENIOR_EXPERT' | 'RESEARCH_FELLOW' | 'STUDENT' | 'INSTITUTION';
  knowledgeTransferred: string[];
  successors: string[]; // IDs of those inheriting the capability
}

export class CapabilityLineageEngine {
  /**
   * Maps how capability reproduces across generations to prevent civilization failure.
   */
  public recordSuccession(mentorId: string, studentId: string, knowledge: string): CapabilityLineageNode {
    return {
      contributorId: mentorId,
      role: 'SENIOR_EXPERT',
      knowledgeTransferred: [knowledge],
      successors: [studentId]
    };
  }
}
