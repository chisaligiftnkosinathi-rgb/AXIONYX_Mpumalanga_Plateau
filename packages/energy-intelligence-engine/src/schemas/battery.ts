// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/schemas/battery.ts

import { Entity } from '@axionyx/structure-engine/src/schemas/entity';
import { Constraint } from '@axionyx/structure-engine/src/schemas/constraint';

export class BatteryAdapter {
  static toEntity(id: string, capacityKwh: number, chemistry: string): Entity {
    return {
      id,
      type: 'Battery',
      attributes: {
        capacityKwh,
        chemistry,
        cycles: 0,
        health: 1.0 // 100%
      }
    };
  }

  static getConstraints(capacityKwh: number): Constraint[] {
    return [
      {
        type: 'capacity_limit',
        parameter: 'energy_storage',
        maximum: capacityKwh,
        unit: 'kWh'
      }
    ];
  }
}
