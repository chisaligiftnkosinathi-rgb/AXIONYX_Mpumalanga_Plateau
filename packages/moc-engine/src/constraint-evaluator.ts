import { Constraint, ConstraintType } from './types';

export interface EvaluationResult {
  approved: boolean;
  score: number;
  rejections: string[];
}

export class ConstraintEvaluator {
  public evaluate(actionContext: any, constraints: Constraint[]): EvaluationResult {
    const hardConstraints = constraints.filter(c => c.type === ConstraintType.HARD);
    const softConstraints = constraints.filter(c => c.type === ConstraintType.SOFT);

    const rejections: string[] = [];

    // Phase 1: Hard Rejection
    for (const hc of hardConstraints) {
      if (!hc.evaluation(actionContext)) {
        rejections.push(hc.explanation());
      }
    }

    if (rejections.length > 0) {
      return { approved: false, score: 0, rejections };
    }

    // Phase 2: Soft Optimisation (Lower cost is better in this simulated logic)
    let score = 100;
    for (const sc of softConstraints) {
      const penalty = sc.evaluation(actionContext) as number;
      score -= penalty;
    }

    return { approved: true, score, rejections: [] };
  }
}
