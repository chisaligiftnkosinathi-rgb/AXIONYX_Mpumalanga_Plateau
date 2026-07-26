import { EngineeringReality, EngineeringRisk } from '../schemas/engineering-event.schema';

export interface RiskEvaluation {
  risk_id: string;
  description: string;
  impact: string;
  recommended_action: string;
}

export class RiskEngine {
  /**
   * Translates raw risks into explainable action plans.
   */
  static evaluateRisks(reality: EngineeringReality): RiskEvaluation[] {
    return reality.risks.filter(r => r.status === 'open').map(risk => {
      let impact = "Unknown impact";
      let action = "Investigate further";

      if (risk.description.includes("Deployment readiness")) {
        impact = "Release confidence reduced due to lack of rollback verification.";
        action = "Complete deployment verification and rollback test.";
      }

      return {
        risk_id: risk.id,
        description: risk.description,
        impact: impact,
        recommended_action: action
      };
    });
  }
}
