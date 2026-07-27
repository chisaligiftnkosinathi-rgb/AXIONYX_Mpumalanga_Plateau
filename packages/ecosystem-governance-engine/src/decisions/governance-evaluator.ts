export type SeverityLevel = 0 | 1 | 2 | 3 | 4;

export interface NodeState {
  nodeId: string;
  revenue: number;
  evidenceVerified: boolean;
  regenerationActive: boolean;
  capabilityImportance: 'Low' | 'Medium' | 'High' | 'Critical';
  financialStress: 'Low' | 'Medium' | 'High';
}

export class GovernanceEvaluator {
  public evaluateNode(state: NodeState): { severity: SeverityLevel, message: string, action: string } {
    if (state.capabilityImportance === 'Critical' && state.financialStress === 'High') {
      return { severity: 3, message: 'Critical ecosystem capability at risk.', action: 'Trigger recovery protocol.' };
    }
    
    if (state.revenue > 0 && !state.regenerationActive) {
      return { severity: 1, message: 'Growth detected. Regeneration weakness identified.', action: 'Recommendation to invest.' };
    }

    if (!state.evidenceVerified) {
      return { severity: 4, message: 'Regeneration failure detected. Evidence missing.', action: 'Restrict ecosystem trust score.' };
    }

    return { severity: 0, message: 'Ecosystem health verified.', action: 'Continue.' };
  }
}
