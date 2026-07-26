import { CalibrationEngine } from '../calibration/calibration-engine';
import { SensorMeasurement, CalibrationRecord, TrustedMeasurement } from '../schemas/calibration.schema';

export class BalancedSensor {
  /**
   * The Balanced Truth Sensor Model: Does not just output a number, but a measurement paired with its cryptographic evidence and confidence.
   */
  static generateObservation(measurement: SensorMeasurement, calibration: CalibrationRecord): TrustedMeasurement {
    return CalibrationEngine.evaluate(measurement, calibration);
  }
}
