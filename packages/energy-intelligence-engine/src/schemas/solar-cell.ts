// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/schemas/solar-cell.ts

import { Entity } from '@axionyx/structure-engine/src/schemas/entity';
import { Constraint } from '@axionyx/structure-engine/src/schemas/constraint';

export class SolarCellAdapter {
  static toEntity(id: string, surfaceArea: number, efficiencyMax: number): Entity {
    return {
      id,
      type: 'SolarCell',
      attributes: {
        surfaceArea,     // m2
        efficiencyMax,   // ratio
        degradationRate: 0.02 // 2% annually
      }
    };
  }

  static getConstraints(): Constraint[] {
    return [
      {
        type: 'physical_limit',
        parameter: 'efficiency',
        maximum: 0.33, // Shockley-Queisser limit roughly
        unit: 'ratio'
      }
    ];
  }
}
