import { DecisionResult } from './decision-evaluator';

export interface ActionCandidate {
  id: string;
  description: string;
  expectedBenefits: string[];
  expectedRisks: string[];
  score: number;
}

export class ActionSelector {
  public selectBestAction(decisionResult: DecisionResult, candidates: ActionCandidate[]): ActionCandidate | null {
    if (decisionResult.decision !== 'APPROVE') {
      return null; // Cannot select action without approval from the evaluator
    }

    // Sort by highest score (expected benefit minus risk weight)
    const sorted = candidates.sort((a, b) => b.score - a.score);
    return sorted[0];
  }
}
