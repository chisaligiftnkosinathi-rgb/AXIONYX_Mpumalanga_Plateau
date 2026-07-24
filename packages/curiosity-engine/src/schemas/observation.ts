// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/curiosity-engine/src/schemas/observation.ts

export interface ObservationEvidence {
  evidenceType: 'Image' | 'SensorData' | 'Text' | 'Audio';
  uri: string;
  description: string;
}

export interface ObservationMeasurement {
  property: string; // e.g., "Surface temperature"
  value: number;    // e.g., 42
  unit: string;     // e.g., "Celsius"
}

export interface Observation {
  id: string;
  actor: string;             // User or System identifying the observation
  context: string;           // Environment or situation
  object: string;            // The target of observation (e.g., "Samsung A54")
  event: string;             // What was happening (e.g., "Charging")
  detectedChange: string;    // The anomaly or shift (e.g., "Temperature increase")
  measurements: ObservationMeasurement[];
  evidence: ObservationEvidence[];
  timestamp: Date;
}
