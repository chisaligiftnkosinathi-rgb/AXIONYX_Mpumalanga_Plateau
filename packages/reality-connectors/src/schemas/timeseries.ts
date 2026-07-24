// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/reality-connectors/src/schemas/timeseries.ts

export interface RealityObservation {
  id: string;
  source: string; // e.g. "sensor-farm-001"
  timestamp: Date;
  entityId: string;
  variable: string;
  value: number;
  unit: string;
  uncertainty?: number;
  metadata?: Record<string, unknown>;
}
