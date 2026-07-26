export interface NodeGovernance {
    requiresConsent: boolean;
    requiresEvidence: boolean;
}

export interface NodeIdentity {
    id: string;
    name: string;
    version: string;
    category: string;
    purpose: string;
    inputs: string[];
    outputs: string[];
    connects_to: string[];
    governance: NodeGovernance;
}
