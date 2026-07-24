// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/command-protocol/src/index.ts

export interface AMPCommand {
  protocolVersion: string;
  missionId: string;
  targetAssetId: string;
  action: string;
  parameters: Record<string, any>;
  cryptographicSignature?: string;
  timestamp: Date;
}

export class AxionyxMissionProtocol {
  /**
   * Translates an approved governance intent into an executable payload (AMP)
   * for the physical gateway (SCADA, PLC).
   */
  static formatCommand(payload: Omit<AMPCommand, 'protocolVersion' | 'timestamp'>): AMPCommand {
    return {
      protocolVersion: 'AMP-v1.0',
      timestamp: new Date(),
      ...payload
    };
  }
}
