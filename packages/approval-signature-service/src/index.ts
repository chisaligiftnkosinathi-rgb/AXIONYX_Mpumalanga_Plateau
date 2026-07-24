// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/approval-signature-service/src/index.ts

import * as crypto from 'crypto';

export interface ApprovalSignature {
  hash: string;
  timestamp: Date;
  engineerId: string;
  role: string;
  scope: string;
}

export class ApprovalSignatureService {
  /**
   * Generates a cryptographic signature required for hard-block physical execution.
   */
  static signCommand(engineerId: string, role: string, scope: string, payload: any): ApprovalSignature {
    console.log(`[Approval Service] Generating signature for ${engineerId} (${role}) on scope [${scope}]`);
    
    const dataString = JSON.stringify(payload) + engineerId + scope;
    const hash = crypto.createHash('sha256').update(dataString).digest('hex');

    return {
      hash: `HASH-${hash.substring(0, 8).toUpperCase()}`,
      timestamp: new Date(),
      engineerId,
      role,
      scope
    };
  }
}
