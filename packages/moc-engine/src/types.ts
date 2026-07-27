// First-Class Versioning
export interface VersionedEntity {
  id: string;
  version: string;
  effectiveFrom: string;
  effectiveTo: string | null;
  author: string;
  approval: string;
}

// Constraints as First-Class Objects
export enum ConstraintType { HARD = 'HARD', SOFT = 'SOFT' }
export enum ConstraintSeverity { CRITICAL = 'CRITICAL', HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW' }

export interface Constraint extends VersionedEntity {
  name: string;
  category: string;
  type: ConstraintType;
  severity: ConstraintSeverity;
  evaluation: (context: any) => boolean | number; // boolean for HARD, number for SOFT
  explanation: () => string;
}

// Hierarchical Mission
export interface Mission extends VersionedEntity {
  name: string;
  objectives: string[];
  constraints: Constraint[];
  kpis: string[];
  decisionPolicies: string[];
}
