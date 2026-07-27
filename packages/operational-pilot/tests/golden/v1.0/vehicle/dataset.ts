export const GoldenDatasetVehicle_v1 = {
  scenario: 'Dataset Beta - Ertiga Battery Alert',
  input: {
    observationId: 'OBS-002',
    timestamp: '2026-07-27T09:12:33.000Z',
    asset: 'Suzuki-Ertiga-Fleet1',
    metric: 'BatteryVoltage',
    value: 11.2,
    unit: 'V',
    provenanceHash: 'def456_obd2_telemetry'
  },
  expected: {
    evidenceLevel: 'E4',
    mission: 'Maintain Fleet Reliability',
    constraintResult: 'PASS',
    decision: 'Schedule battery replacement immediately',
    confidence: 95,
    explainabilityHash: 'a1b2c3d4e5f6'
  }
};
