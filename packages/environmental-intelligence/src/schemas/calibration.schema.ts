export interface CalibrationRecord {
  reality_id: string;
  sensor: string;
  reference_standard: string;
  calibration_date: string;
  offset: number;
  status: 'VERIFIED' | 'UNVERIFIED';
}

export interface SensorMeasurement {
  parameter: string;
  value: number;
  event_id: string;
}

export interface TrustedMeasurement {
  parameter: string;
  raw_value: number;
  corrected_value: number;
  confidence: 'VERIFIED' | 'UNKNOWN';
  evidence: string[];
}
