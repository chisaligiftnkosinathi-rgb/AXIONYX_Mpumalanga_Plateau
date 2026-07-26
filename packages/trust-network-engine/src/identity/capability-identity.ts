export interface CapabilityIdentity {
  node: string;
  capabilities: string[];
  evidence: string[];
  trust_state: 'SEED' | 'GROWING' | 'MATURE';
  trust_index: number;
}

export class IdentityRegistry {
  public getIdentity(nodeId: string): CapabilityIdentity {
    // Mock return for Sensor Tree Chemist
    return {
      node: nodeId,
      capabilities: ["Analytical Chemistry", "Material Science", "Sensor Calibration"],
      evidence: ["AXIONYX Observatory", "SANAS Laboratory Graph", "Sensor Tree Simulation"],
      trust_state: "MATURE",
      trust_index: 92
    };
  }
}
