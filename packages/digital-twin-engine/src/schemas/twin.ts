// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/digital-twin-engine/src/schemas/twin.ts

import { DigitalTwinIdentity } from './identity';

export interface DigitalTwin {
  identity: DigitalTwinIdentity;
  type: string;
  physicalAsset: any;
  currentState: any;
  model: {
    simulationVersion: string;
    physicsRules: string[];
  };
}
