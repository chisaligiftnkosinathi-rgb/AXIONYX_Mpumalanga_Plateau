// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/evidence-engine/src/schemas/measurement.ts

export interface Measurement {
  variable: string;    // e.g. "temperature"
  value: number;       // e.g. 25
  unit: string;        // e.g. "Celsius"
  instrument: string;  // e.g. "simulation", "historical_data", "sensor"
  accuracy: number;    // e.g. 0.98 (98% confidence in reading)
  timestamp: Date;
}
