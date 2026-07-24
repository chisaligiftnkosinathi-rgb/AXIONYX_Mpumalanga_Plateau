// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/schemas/material-flow.ts

export interface MaterialFlow {
  id: string;
  source: string;        // e.g., "Battery Usage"
  destination: string;   // e.g., "Recovery"
  materialType: string;  // e.g., "Lithium"
  amount: number;        
  unit: string;          // e.g., "kg"
  recoveryRate: number;  // 0.0 to 1.0
  timestamp: Date;
  evidence: string[];    // e.g., ['recycling_facility_manifests']
}
