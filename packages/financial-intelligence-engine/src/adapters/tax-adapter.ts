// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/financial-intelligence-engine/src/adapters/tax-adapter.ts

import { Entity, Flow, Relationship } from '@axionyx/structure-engine/src/schemas';

export class TaxAdapter {
  static toEntity(taxSystemName: string): Entity {
    return {
      id: taxSystemName,
      type: 'TaxRule',
      attributes: {}
    };
  }

  static applyObligation(incomeFlow: Flow, taxRule: Entity, rate: number): Flow {
    // Tax represents a diverted structural flow constrained by rules
    return {
      source: incomeFlow.destination,
      destination: taxRule,
      quantity: incomeFlow.quantity * rate,
      direction: 'unidirectional',
      constraints: ['StatutoryObligation', 'ComplianceDeadline']
    };
  }
}
