export interface PolicyContext {
  facts: Record<string, any>;
}

export interface PolicyAction {
  action: string;
  payload?: any;
}

export interface PolicyResult {
  satisfied: boolean;
  actions: PolicyAction[];
  ruleEvaluated: string;
}

export interface IPolicy {
  id: string;
  name: string;
  evaluate(context: PolicyContext): PolicyResult;
}

export class PolicyEngine {
  private policies: Map<string, IPolicy> = new Map();

  registerPolicy(policy: IPolicy) {
    this.policies.set(policy.id, policy);
  }

  evaluate(policyId: string, context: PolicyContext): PolicyResult {
    const policy = this.policies.get(policyId);
    if (!policy) throw new Error(`Policy ${policyId} not found`);
    return policy.evaluate(context);
  }
}
