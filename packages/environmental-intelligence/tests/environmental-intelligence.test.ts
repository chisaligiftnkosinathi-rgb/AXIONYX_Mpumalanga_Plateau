import { CalibrationEngine } from '../src/calibration/calibration-engine';
import { SensorMeasurement, CalibrationRecord } from '../src/schemas/calibration.schema';

describe('Calibration Intelligence', () => {
  it('assigns UNKNOWN confidence if calibration is missing', () => {
    const raw: SensorMeasurement = { parameter: 'pH', value: 7.35, event_id: '1' };
    const result = CalibrationEngine.evaluate(raw, null);
    expect(result.confidence).toBe('UNKNOWN');
    expect(result.corrected_value).toBe(7.35);
  });

  it('assigns VERIFIED confidence and applies offset when calibration is valid', () => {
    const raw: SensorMeasurement = { parameter: 'pH', value: 7.35, event_id: '1' };
    const cal: CalibrationRecord = { reality_id: 'C1', sensor: 'S1', reference_standard: 'Ref1', calibration_date: 'd', offset: -0.05, status: 'VERIFIED' };
    const result = CalibrationEngine.evaluate(raw, cal);
    expect(result.confidence).toBe('VERIFIED');
    expect(result.corrected_value).toBe(7.30);
    expect(result.evidence).toContain('C1');
  });
});
