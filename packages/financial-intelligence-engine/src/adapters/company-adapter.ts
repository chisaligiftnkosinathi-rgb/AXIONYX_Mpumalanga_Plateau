// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/financial-intelligence-engine/src/adapters/company-adapter.ts

import { Entity, Relationship, State } from '@axionyx/structure-engine/src/schemas';

export class CompanyAdapter {
  static toEntity(companyId: string, sector: string): Entity {
    return {
      id: companyId,
      type: 'Company',
      attributes: {
        sector
      }
    };
  }

  static mapDependency(company: Entity, dependency: Entity, confidence: number): Relationship {
    return {
      sourceEntity: dependency,
      targetEntity: company,
      relationshipType: 'dependency',
      strength: 0.9,
      confidence: confidence,
      evidence: ['supply_chain_reports', 'annual_financials']
    };
  }
}
