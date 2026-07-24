// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/circularity/lifecycle-analysis.ts

export interface LifecyclePhase {
  phase: 'mining' | 'manufacturing' | 'deployment' | 'usage' | 'second_life' | 'recovery';
  energyCostKwh: number;
  carbonEmissionsKg: number;
  durationYears: number;
}

export interface LifecycleAnalysis {
  entityId: string;
  phases: LifecyclePhase[];
  energyReturnOnInvestment: number;
  totalEmissions: number;
}
