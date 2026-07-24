// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/circularity/material-recovery.ts

export interface MaterialRecoveryMetric {
  material: string;
  initialMass: number;    // kg
  recoveredMass: number;  // kg
  recoveryEfficiency: number; // 0.0 to 1.0
  recyclingCost: number;
}
