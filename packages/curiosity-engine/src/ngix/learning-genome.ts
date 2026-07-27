export type LearningStage = 'Curiosity' | 'Beginner' | 'Learner' | 'Practitioner' | 'Expert' | 'Mentor';

export class LearningGenome {
  public advance(currentStage: LearningStage): LearningStage {
    const stages: LearningStage[] = ['Curiosity', 'Beginner', 'Learner', 'Practitioner', 'Expert', 'Mentor'];
    const idx = stages.indexOf(currentStage);
    if (idx >= 0 && idx < stages.length - 1) {
      return stages[idx + 1];
    }
    return currentStage;
  }
}
