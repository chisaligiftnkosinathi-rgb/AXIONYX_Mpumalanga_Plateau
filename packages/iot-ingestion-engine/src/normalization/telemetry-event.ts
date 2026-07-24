// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/iot-ingestion-engine/src/normalization/telemetry-event.ts

export interface TelemetryEvent {
  assetId: string;
  timestamp: Date;
  measurement: string; // e.g. "temperature"
  value: number;
  unit: string;
  quality: number; // 0.0 to 1.0 confidence
  source: string; // e.g. "SCADA-Node-1"
}
