// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/schemas/information-flow.ts

export interface InformationFlow {
  id: string;
  source: string;          // e.g., "Sensors"
  destination: string;     // e.g., "Analytics"
  payloadType: 'measurement' | 'optimization' | 'control_decision';
  dataPoints: Record<string, any>;
  timestamp: Date;
}
