import { Portfolio, SchoolTwin, Mastery } from '../schemas/education.schema';

/**
 * Moderation Engine Capability
 * Checks for multi-dimensional moderation such as Assessment Integrity,
 * Evidence Completeness, and Anomaly Detection.
 */
export class ModerationEngine {
  
  /**
   * Evaluates if a learner's mastery level is backed by actual evidence.
   */
  public auditPortfolioIntegrity(portfolio: Portfolio): string[] {
    const anomalies: string[] = [];

    for (const [competencyId, mastery] of Object.entries(portfolio.competencies)) {
      if ((mastery.level === 'COMPETENT' || mastery.level === 'MASTERY') && mastery.evidenceChain.length === 0) {
        anomalies.push(`Anomaly Detected: Competency '${competencyId}' marked as ${mastery.level} but has NO evidence chain.`);
      }
      
      // We can cross-reference completeness metrics
      for (const [activityId, metric] of Object.entries(portfolio.completenessMetrics)) {
         if (metric.completenessPercentage < 50 && (mastery.level === 'COMPETENT' || mastery.level === 'MASTERY')) {
            anomalies.push(`Anomaly Detected: Competency '${competencyId}' is ${mastery.level}, but associated Activity ${activityId} has < 50% Evidence Completeness.`);
         }
      }
    }

    return anomalies;
  }

  /**
   * Moderates a school's overall portfolio submissions and updates the School Twin.
   */
  public moderateSchool(school: SchoolTwin, portfolios: Portfolio[]): SchoolTwin {
    console.log(`[MODERATION ENGINE] Conducting Institutional Audit for ${school.name}...`);
    
    let totalAnomalies = 0;
    
    for (const portfolio of portfolios) {
      const anomalies = this.auditPortfolioIntegrity(portfolio);
      if (anomalies.length > 0) {
        totalAnomalies++;
        school.moderationOutcomes.push(`Portfolio ${portfolio.learnerId} flagged: ${anomalies[0]}`);
      }
    }

    // Update School Quality Score based on anomalies
    const anomalyRate = totalAnomalies / portfolios.length;
    school.assessmentQualityScore = Math.max(0, 100 - (anomalyRate * 100));
    
    console.log(`[MODERATION ENGINE] Audit complete. Quality Score updated to ${school.assessmentQualityScore}%`);
    return school;
  }
}
