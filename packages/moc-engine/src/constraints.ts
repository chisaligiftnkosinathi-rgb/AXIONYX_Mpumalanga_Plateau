import { Constraint, ConstraintType, ConstraintSeverity } from './types';

// Example Hard Constraint
export const SafetyConstraint: Constraint = {
  id: 'c-safe-001',
  version: '1.0.0',
  effectiveFrom: '2026-01-01T00:00:00Z',
  effectiveTo: null,
  author: 'AXIONYX_GOVERNANCE',
  approval: 'BOARD',
  name: 'No Safety Violations',
  category: 'Safety',
  type: ConstraintType.HARD,
  severity: ConstraintSeverity.CRITICAL,
  evaluation: (context: any) => context.safetyRisk === 0,
  explanation: () => 'Action violates zero-harm safety policy.'
};

// Example Soft Constraint
export const CostConstraint: Constraint = {
  id: 'c-cost-002',
  version: '1.0.0',
  effectiveFrom: '2026-01-01T00:00:00Z',
  effectiveTo: null,
  author: 'FINANCE',
  approval: 'CFO',
  name: 'Minimize Magnetite Consumption',
  category: 'Cost',
  type: ConstraintType.SOFT,
  severity: ConstraintSeverity.MEDIUM,
  evaluation: (context: any) => context.magnetiteCost, // Returns a cost scalar
  explanation: () => 'Action increases magnetite consumption.'
};
