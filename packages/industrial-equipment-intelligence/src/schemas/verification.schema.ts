export interface VerificationState {
  requirement: string;
  evidence_found: boolean;
  verification_state: 'SUPPORTED' | 'UNSUPPORTED' | 'PENDING';
}
