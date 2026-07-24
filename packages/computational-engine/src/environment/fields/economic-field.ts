// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/computational-engine/src/environment/fields/economic-field.ts

import { Field } from '../../simulation/simulation-world';
import { ComputationalNode } from '../../core/computational-node';

export class EconomicField implements Field {
  id: string = 'global_economic_field';
  type: string = 'Economic';
  strength: number = 0; // Represents overall market liquidity or sentiment

  /**
   * Calculates capital flow pressure based on supply/demand differentials.
   */
  calculateMarketPressure(supplyVolume: number, demandVolume: number): number {
    if (supplyVolume === 0) return demandVolume > 0 ? Number.POSITIVE_INFINITY : 0;
    // Positive pressure = price goes up, negative pressure = price goes down
    return (demandVolume - supplyVolume) / supplyVolume;
  }
}
