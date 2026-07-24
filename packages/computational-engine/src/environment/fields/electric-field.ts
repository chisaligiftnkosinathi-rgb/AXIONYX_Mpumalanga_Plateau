// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/computational-engine/src/environment/fields/electric-field.ts

import { Field } from '../../simulation/simulation-world';
import { ComputationalNode } from '../../core/computational-node';

export class ElectricField implements Field {
  id: string = 'global_electric_field';
  type: string = 'Electric';
  strength: number = 0;

  /**
   * Calculates voltage differentials pushing current through the network.
   */
  calculateCurrent(source: ComputationalNode, destination: ComputationalNode, resistance: number): number {
    const v1 = source.currentState.measurements['voltage'] || 0;
    const v2 = destination.currentState.measurements['voltage'] || 0;
    
    // Ohm's law: I = V/R
    if (resistance <= 0) return 0;
    return (v1 - v2) / resistance;
  }
}
