// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/cyber-twin-engine/src/schemas/cyber-asset.ts

export type CyberAssetType = 'PLC_CONTROLLER' | 'SCADA_NETWORK' | 'IOT_SENSOR' | 'API_GATEWAY' | 'AI_AGENT' | 'USER_ACCOUNT';

export interface CyberAsset {
  id: string;
  type: CyberAssetType;
  linkedPhysicalAssetId?: string;
  networkTopology: {
    ipAddress: string;
    connectedNodes: string[];
  };
  securityProfile: {
    encryptionStandard: string;
    lastAudit: Date;
    vulnerabilityScore: number;
  };
}
