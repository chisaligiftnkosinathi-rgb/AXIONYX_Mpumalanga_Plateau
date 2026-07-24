// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/computational-engine/src/core/constraint-solver.ts

import { Constraint } from '@axionyx/structure-engine/src/schemas/constraint';

export class ConstraintSolver {
  /**
   * Evaluates if a proposed value violates any defined physical or logical boundaries.
   */
  static evaluate(value: number, constraints: Constraint[]): number {
    let resolvedValue = value;
    
    for (const constraint of constraints) {
      if (constraint.maximum !== undefined && resolvedValue > constraint.maximum) {
        resolvedValue = constraint.maximum; // Clip to max
      }
      if (constraint.minimum !== undefined && resolvedValue < constraint.minimum) {
        resolvedValue = constraint.minimum; // Clip to min
      }
    }
    
    return resolvedValue;
  }
}
