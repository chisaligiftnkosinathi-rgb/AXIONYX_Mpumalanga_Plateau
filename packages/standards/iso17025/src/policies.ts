import { IPolicy, PolicyContext, PolicyResult } from '@axionyx/policy-engine/src/PolicyEngine';

export const ISO17025_InstrumentDriftPolicy: IPolicy = {
  id: 'iso17025.instrument.drift',
  name: 'ISO/IEC 17025 Instrument Drift Tolerance',
  evaluate(context: PolicyContext): PolicyResult {
    const drift = context.facts['drift'];
    const threshold = 0.05; // Data-driven threshold from standard

    if (drift > threshold) {
      return {
        satisfied: false,
        ruleEvaluated: 'ISO/IEC 17025:2017 6.4.10 (Intermediate Checks)',
        actions: [
          { action: 'PAUSE_WORKFLOW' },
          { action: 'GENERATE_EVIDENCE', payload: { type: 'DRIFT_EXCEEDED' } },
          { action: 'DEGRADE_TRUST', payload: { impact: -0.15 } }
        ]
      };
    }

    return {
      satisfied: true,
      ruleEvaluated: 'ISO/IEC 17025:2017 6.4.10 (Intermediate Checks)',
      actions: []
    };
  }
};
