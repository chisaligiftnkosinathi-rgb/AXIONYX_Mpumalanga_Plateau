// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/industry-twin-library/src/twins/mining/coal-mine-twin.ts

import { DigitalTwin } from '../../../../digital-twin-engine/src/schemas/twin';
import { CyberAsset } from '../../../../cyber-twin-engine/src/schemas/cyber-asset';

export const SmartCoalMineTwinV1: DigitalTwin = {
  identity: {
    id: "coal-mine-twin-v1",
    name: "AXIONYX Smart Mining Digital Twin",
    version: "1.1-secure",
    physicalAssetId: "asset-mine-001",
    owner: "AXIONYX",
    lifecycleStatus: "OPTIMIZING",
    created: new Date(),
    updated: new Date()
  },
  type: "Smart Mining Complex with Cyber Security",
  physicalAsset: {
    components: [
      "GeologicalLayers",
      "ExcavatorFleet",
      "Crusher",
      "WashPlant",
      "Laboratory",
      "ConveyorNetwork"
    ]
  },
  currentState: {
    extractionRate: "5000 t/day",
    washPlantEfficiency: "82%",
    energyConsumption: "45 MWh"
  },
  model: {
    simulationVersion: "sim-v1",
    physicsRules: [
      "Mass Conservation",
      "Thermodynamic Heat Loss",
      "Kinetic Wear"
    ]
  }
};

// Phase 8: Project Cerberus Integration
export const CyberMineTwinV1: CyberAsset[] = [
  {
    id: "plc-crusher-01",
    type: "PLC_CONTROLLER",
    linkedPhysicalAssetId: "Crusher",
    networkTopology: { ipAddress: "10.0.0.45", connectedNodes: ["SCADA_CORE"] },
    securityProfile: { encryptionStandard: "AES-256", lastAudit: new Date(), vulnerabilityScore: 0.1 }
  },
  {
    id: "ai-optimization-agent",
    type: "AI_AGENT",
    networkTopology: { ipAddress: "cloud-vnet-1", connectedNodes: ["SCADA_CORE", "CERBERUS_GUARDIAN"] },
    securityProfile: { encryptionStandard: "TLS 1.3", lastAudit: new Date(), vulnerabilityScore: 0.0 }
  }
];
