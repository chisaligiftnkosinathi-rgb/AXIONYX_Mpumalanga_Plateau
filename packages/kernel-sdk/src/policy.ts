export interface PolicyDecision {
    policyId: string;
    policyVersion: string;
    outcome: 'Accepted' | 'Rejected' | 'Pending';
    findings: string[];
    evaluatedAt: string;
}
