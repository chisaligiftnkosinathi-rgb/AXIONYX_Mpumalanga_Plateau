export interface EvidencePayload {
  available: string[];
  confidence: number;
  level: string; // E0-E5
}

export interface DecisionResult {
  decision: 'APPROVE' | 'REJECT' | 'REQUIRE_MORE_DATA';
  confidence: number;
  evidence: string;
  risk: 'LOW' | 'MEDIUM' | 'HIGH';
  uncertainty: 'LOW' | 'MEDIUM' | 'HIGH';
  missingInformation: string;
  reasoning: string;
}

export class DecisionEvaluator {
  public evaluate(scenario: string, evidence: EvidencePayload): DecisionResult {
    // Example: Evaluate coal dense medium density increase
    const isE4OrHigher = ['E4', 'E5'].includes(evidence.level);
    
    if (evidence.confidence < 80 || !isE4OrHigher) {
      return {
        decision: 'REQUIRE_MORE_DATA',
        confidence: evidence.confidence,
        evidence: evidence.level,
        risk: 'HIGH',
        uncertainty: 'HIGH',
        missingInformation: 'Laboratory analysis missing.',
        reasoning: 'Evidence confidence too low to proceed without independent verification.'
      };
    }

    return {
      decision: 'APPROVE',
      confidence: 91,
      evidence: evidence.level,
      risk: 'MEDIUM', // We know the risk (yield reduction)
      uncertainty: 'LOW', // We are certain of the risk
      missingInformation: 'None',
      reasoning: 'Historical evidence agrees with prediction.'
    };
  }
}
