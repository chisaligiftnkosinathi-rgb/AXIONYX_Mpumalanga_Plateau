export type LessonMaturity = 
  | 'LESSON_CREATED'
  | 'LESSON_CONFIRMED'
  | 'PREVENTIVE_RULE_GENERATED'
  | 'RULE_ACTIVE'
  | 'RULE_MONITORED'
  | 'LESSON_EVOLVED';

export interface LessonRecord {
  lessonId: string;
  sourceNcId: string;
  failurePattern: string;
  rootCause: string;
  learning: string;
  maturity: LessonMaturity;
  confidence: number;
}

export class LessonExtractor {
  
  /**
   * Extracts a formal lesson from a confirmed Root Cause.
   */
  public extractLesson(sourceNcId: string, failurePattern: string, rootCause: string): LessonRecord {
    return {
      lessonId: `GIFT-HUB-LL-${Date.now()}`,
      sourceNcId,
      failurePattern,
      rootCause,
      learning: this.synthesizeLearning(rootCause),
      maturity: 'LESSON_CREATED',
      confidence: 0.40
    };
  }

  private synthesizeLearning(rootCause: string): string {
    // Basic conceptual placeholder for intelligence synthesis
    return `System learning derived from: ${rootCause}. Capabilities must be explicitly connected to demand.`;
  }

  public validateLesson(lesson: LessonRecord, evidenceScore: number): LessonRecord {
    if (evidenceScore > 0.70) {
      return {
        ...lesson,
        maturity: 'LESSON_CONFIRMED',
        confidence: 0.75
      };
    }
    return lesson;
  }
}
