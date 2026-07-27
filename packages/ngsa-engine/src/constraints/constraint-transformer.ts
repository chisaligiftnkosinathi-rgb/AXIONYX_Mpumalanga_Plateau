export interface NationalConstraintProfile {
  nation: string;
  constraint: string;
  severity: number;
  affectedCapabilities: string[];
  availableResources: string[];
  conversionPath: string;
  evidence: number;
  volatility: number;
  recoveryPotential: number;
}

export class ConstraintTransformer {
  /**
   * Calculates the Constraint Transformation Potential (CTP).
   * CTP = (Existing Capability × Evidence × Collaboration Potential) / Constraint Severity
   */
  public calculateCTP(
    existingCapability: number,
    evidence: number,
    collaborationPotential: number,
    severity: number
  ): number {
    if (severity <= 0) severity = 0.1;
    return (existingCapability * evidence * collaborationPotential) / severity;
  }
}
