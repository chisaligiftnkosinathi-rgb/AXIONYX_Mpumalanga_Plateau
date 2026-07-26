import { SensorMeasurement, CalibrationRecord, TrustedMeasurement } from '../schemas/calibration.schema';

export class CalibrationEngine {
  /**
   * Applies calibration records to raw measurements to produce trusted, corrected values.
   */
  static evaluate(measurement: SensorMeasurement, calibration: CalibrationRecord | null): TrustedMeasurement {
    if (!calibration || calibration.status !== 'VERIFIED') {
      return {
        parameter: measurement.parameter,
        raw_value: measurement.value,
        corrected_value: measurement.value,
        confidence: 'UNKNOWN',
        evidence: []
      };
    }

    return {
      parameter: measurement.parameter,
      raw_value: measurement.value,
      corrected_value: measurement.value + calibration.offset,
      confidence: 'VERIFIED',
      evidence: [calibration.reality_id, calibration.reference_standard]
    };
  }
}
