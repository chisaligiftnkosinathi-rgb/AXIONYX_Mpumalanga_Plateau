export const GoldenDatasetCoal_v1 = {
  scenario: 'Dataset Alpha - Coal Quality Recommendation',
  input: {
    observationId: 'OBS-001',
    timestamp: '2026-07-27T08:41:10.000Z',
    asset: 'DenseMediumCyclone-A',
    metric: 'ProductAsh',
    value: 16.2,
    unit: '%',
    provenanceHash: 'abc123_lab_export'
  },
  expected: {
    evidenceLevel: 'E4',
    mission: 'Produce Export-Quality Coal',
    constraintResult: 'PASS',
    decision: 'Increase medium density to 1.55',
    confidence: 91,
    explainabilityHash: 'f4d5e6a7b8c9'
  }
};
