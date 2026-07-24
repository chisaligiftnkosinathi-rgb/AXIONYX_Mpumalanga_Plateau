// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/computational-engine/src/environment/fields/magnetic-field.ts

import { Field } from '../../simulation/simulation-world';
import { ComputationalNode } from '../../core/computational-node';

export class MagneticField implements Field {
  id: string = 'global_magnetic_field';
  type: string = 'Magnetic';
  strength: number = 0;

  /**
   * Calculates mechanical force derived from an electromagnetic field.
   */
  calculateForce(current: number, wireLength: number, magneticFluxDensity: number): number {
    // F = I * L * B
    return current * wireLength * magneticFluxDensity;
  }
}
