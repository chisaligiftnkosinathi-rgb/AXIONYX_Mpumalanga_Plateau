import { Portfolio, EvidenceCompleteness, LearningActivity } from '../schemas/education.schema';

/**
 * Evidence Gap Analyzer Capability
 * Instead of asking "Is the learner ready?", this asks "What evidence is missing?"
 * This is a highly actionable quality assurance tool.
 */
export class EvidenceGapAnalyzer {

  /**
   * Analyzes a learner's portfolio for a specific activity to compute Evidence Completeness.
   */
  public analyzeCompleteness(portfolio: Portfolio, activity: LearningActivity): EvidenceCompleteness {
    
    // Find evidence for this activity
    const activityEvidence = portfolio.evidenceLog.filter(e => e.activityId === activity.id);
    const presentElements: string[] = [];
    const missingElements: string[] = [];
    
    // Simulated checking logic: in reality, NLP/ScieEngine would extract semantic elements
    // For this MVP, we parse a simple string of keywords.
    const aggregatedData = activityEvidence.map(e => e.data.toLowerCase()).join(' ');

    for (const required of activity.requiredEvidenceElements) {
      if (aggregatedData.includes(required.toLowerCase())) {
        presentElements.push(required);
      } else {
        missingElements.push(required);
      }
    }

    const completenessPercentage = (presentElements.length / activity.requiredEvidenceElements.length) * 100;

    return {
      activityId: activity.id,
      requiredElements: activity.requiredEvidenceElements,
      presentElements,
      missingElements,
      completenessPercentage
    };
  }

  /**
   * Summarizes the missing evidence for a qualification readiness report.
   */
  public generateReadinessReport(completenessMetrics: EvidenceCompleteness[]): string {
    let report = `### Qualification Readiness Report\n\n`;
    
    let totalScore = 0;
    const missingSummary: string[] = [];

    for (const metric of completenessMetrics) {
      totalScore += metric.completenessPercentage;
      if (metric.missingElements.length > 0) {
        missingSummary.push(`- Missing for Activity ${metric.activityId}: ${metric.missingElements.join(', ')}`);
      }
    }

    const avgScore = totalScore / completenessMetrics.length;
    report += `**Qualification Readiness**: ${avgScore.toFixed(1)}%\n\n`;

    if (missingSummary.length > 0) {
      report += `**Missing Evidence Action Plan**:\n`;
      report += missingSummary.join('\n');
      report += `\n\n*Estimated completion: 3 weeks if all missing evidence is submitted.*`;
    } else {
      report += `**Status**: Fully Ready for Moderation and Certification.`;
    }

    return report;
  }
}
