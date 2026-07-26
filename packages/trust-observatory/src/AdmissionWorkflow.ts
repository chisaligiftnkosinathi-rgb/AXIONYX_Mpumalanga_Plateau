export enum TrustState {
  DISCOVERED = 'DISCOVERED',
  EVIDENCE_COLLECTION = 'EVIDENCE_COLLECTION',
  CAPABILITY_VERIFIED = 'CAPABILITY_VERIFIED',
  TRUST_REVIEW = 'TRUST_REVIEW',
  ACTIVE = 'ACTIVE',
  REVIEW_REQUIRED = 'REVIEW_REQUIRED',
  TRUSTED_NETWORK_NODE = 'TRUSTED_NETWORK_NODE',
  QUARANTINED = 'QUARANTINED',
  REASSESSMENT = 'REASSESSMENT'
}

export class AdmissionWorkflow {
  public evaluateState(partnerId: string, currentMaturity: number, riskSignals: string[]): TrustState {
    if (riskSignals.length > 0) {
      return TrustState.REVIEW_REQUIRED;
    }
    
    if (currentMaturity >= 0.9) return TrustState.TRUSTED_NETWORK_NODE;
    if (currentMaturity >= 0.7) return TrustState.ACTIVE;
    if (currentMaturity >= 0.4) return TrustState.CAPABILITY_VERIFIED;
    
    return TrustState.EVIDENCE_COLLECTION;
  }

  public canRouteOpportunity(state: TrustState): boolean {
    return state === TrustState.ACTIVE || state === TrustState.TRUSTED_NETWORK_NODE;
  }
}
