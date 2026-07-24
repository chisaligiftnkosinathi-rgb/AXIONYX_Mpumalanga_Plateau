// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/structure-engine/src/schemas/constraint.ts

/**
 * A Constraint defines the physical, regulatory, or logical boundaries of a system.
 * It prevents the Structure Engine from predicting impossible simulations.
 */
export interface Constraint {
  type: 'physical_limit' | 'capacity_limit' | 'regulatory_limit' | 'logical_limit';
  parameter: string; // e.g., "efficiency", "energy_storage"
  maximum?: number;
  minimum?: number;
  unit: string;      // e.g., "ratio", "kWh"
}
