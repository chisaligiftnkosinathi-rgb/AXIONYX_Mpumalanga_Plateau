// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/digital-twin-engine/src/schemas/identity.ts

export type TwinLifecycleStatus = 
  | 'CREATED'
  | 'CONNECTED'
  | 'OBSERVING'
  | 'CALIBRATING'
  | 'PREDICTING'
  | 'OPTIMIZING'
  | 'EVOLVING';

export interface DigitalTwinIdentity {
  id: string;
  name: string;
  version: string;
  physicalAssetId: string;
  owner: string;
  lifecycleStatus: TwinLifecycleStatus;
  created: Date;
  updated: Date;
}
