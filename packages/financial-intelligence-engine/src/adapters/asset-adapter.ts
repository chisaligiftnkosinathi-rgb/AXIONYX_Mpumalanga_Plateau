// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/financial-intelligence-engine/src/adapters/asset-adapter.ts

import { Entity, Relationship, State, Flow } from '@axionyx/structure-engine/src/schemas';

/**
 * An Asset is a Domain Adapter. It translates a Financial Concept into
 * a pure structural Entity that the Structure Engine can simulate.
 */
export class AssetAdapter {
  static toEntity(assetId: string, assetClass: string, valuation: number): Entity {
    return {
      id: assetId,
      type: 'Asset',
      attributes: {
        assetClass,
        valuation
      }
    };
  }

  static toFlow(asset: Entity, buyer: Entity, price: number): Flow {
    return {
      source: asset,
      destination: buyer,
      quantity: price,
      direction: 'unidirectional',
      constraints: ['Liquidity', 'RegulatoryApproval']
    };
  }
}
