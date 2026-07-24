// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/ide-connectors/src/protocol/adp.ts

/**
 * AXIONYX Development Protocol (ADP)
 * The standardized JSON RPC protocol allowing external tools to communicate with the AXIONYX Engine.
 */
export interface ADPRequest {
  intent: 'create_simulation' | 'run_validation' | 'query_evidence' | 'propose_change';
  domain: string;
  model: string;
  payload: Record<string, any>;
  evidenceRequired: boolean;
}

export interface ADPResponse {
  status: 'SUCCESS' | 'VALIDATION_FAILED' | 'REJECTED';
  data: any;
  confidenceScore?: number;
}
