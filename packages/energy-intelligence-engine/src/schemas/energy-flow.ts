// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/schemas/energy-flow.ts

export interface EnergyFlow {
  id: string;
  source: string;        // e.g., "Solar Array"
  destination: string;   // e.g., "Battery"
  amount: number;        // e.g., 450
  unit: string;          // e.g., "kWh"
  energyType: 'electrical' | 'chemical' | 'thermal' | 'radiant';
  efficiency: number;    // e.g., 0.91
  losses: number;        // e.g., 40
  timestamp: Date;
  evidence: string[];    // e.g., ['inverter_telemetry']
}
