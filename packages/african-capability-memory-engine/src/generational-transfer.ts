export interface CuriosityQuest {
  learnerId: string;
  questDescription: string;
  inheritedLessonId: string;
}

export class GenerationalTransfer {
  public transferToCuriosityEngine(lessonId: string, learnerInterest: string): CuriosityQuest {
    // Bridges A66.64 back to A66.55 (Chappies)
    if (learnerInterest === 'Science') {
      return {
        learnerId: 'LEARNER_NEW',
        inheritedLessonId: lessonId,
        questDescription: 'A previous generation solved a coal sampling challenge. Your curiosity quest is to explore water quality monitoring because the next industrial gap is emerging.'
      };
    }
    
    return {
      learnerId: 'LEARNER_NEW',
      inheritedLessonId: lessonId,
      questDescription: 'Explore this inherited wisdom to solve a new local problem.'
    };
  }
}
