import { LessonRecord } from './LessonExtractor';

export interface PreventiveRule {
  ruleId: string;
  originLessonId: string;
  ruleStatement: string;
  appliesToDomains: string[];
  status: 'DRAFT' | 'ACTIVE' | 'ARCHIVED';
}

export class PreventionGenerator {
  
  /**
   * Generates a structural rule that the ecosystem must obey before future node admissions.
   */
  public generateRuleFromLesson(lesson: LessonRecord, domains: string[]): PreventiveRule | null {
    if (lesson.maturity !== 'LESSON_CONFIRMED' || lesson.confidence < 0.70) {
      throw new Error("Lesson is not mature enough to generate a preventive rule.");
    }

    return {
      ruleId: `GIFT-HUB-PR-${Date.now()}`,
      originLessonId: lesson.lessonId,
      ruleStatement: this.deriveRuleStatement(lesson.learning),
      appliesToDomains: domains,
      status: 'ACTIVE'
    };
  }

  private deriveRuleStatement(learning: string): string {
    return `No economic node may activate without evidence-backed capability and trust validation based on: ${learning}`;
  }
}
