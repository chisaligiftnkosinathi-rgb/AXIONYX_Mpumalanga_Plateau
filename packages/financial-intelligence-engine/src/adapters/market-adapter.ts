// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/financial-intelligence-engine/src/adapters/market-adapter.ts

import { Entity, Relationship, Flow } from '@axionyx/structure-engine/src/schemas';

export class MarketAdapter {
  static toEntity(marketName: string): Entity {
    return {
      id: marketName,
      type: 'Market',
      attributes: {}
    };
  }

  static createForce(driver: Entity, market: Entity, forceType: 'supply' | 'demand'): Relationship {
    return {
      sourceEntity: driver,
      targetEntity: market,
      relationshipType: 'causal',
      strength: 0.8,
      confidence: 0.95,
      evidence: ['macroeconomic_data', 'commodity_indexes']
    };
  }
}
