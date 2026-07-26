import { ReasoningResult } from './reasoning';

export interface PolicyRecommendation {
  assessmentId: string;
  decisionId: string;
  recommendedActions: string[];
  policyRationale: string;
}

export class PolicyEngine {
  evaluateAssessment(result: ReasoningResult): PolicyRecommendation {
    const actions: string[] = [];
    let rationale = '';

    const hasSafetyRisk = result.evidenceDimensions['Safety']?.includes('CONTRADICT');
    const hasPerformanceRisk = result.evidenceDimensions['Performance']?.includes('CONTRADICT');

    if (hasSafetyRisk || hasPerformanceRisk) {
      actions.push('Schedule Immediate Inspection');
      actions.push('Review Maintenance Budget');
      rationale = 'Governance Policy dictates that when Safety or Performance evidence contradicts the baseline state, an operational inspection must be triggered.';
    } else if (result.contradictingEvidence.length === 0 && result.supportingEvidence.length > 0) {
      actions.push('Log as Compliant');
      rationale = 'Asset is fully compliant with specifications.';
    } else {
      actions.push('Request Additional Evidence');
      rationale = 'Insufficient data to make a governance decision.';
    }

    return {
      assessmentId: `assessment-${result.claimId}-${Date.now()}`,
      decisionId: `decision-${result.claimId}-${Date.now()}`,
      recommendedActions: actions,
      policyRationale: rationale
    };
  }
}
