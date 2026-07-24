export enum EntityType {
  SYSTEM = 'SYSTEM',
  SUBSYSTEM = 'SUBSYSTEM',
  ASSEMBLY = 'ASSEMBLY',
  SUBASSEMBLY = 'SUBASSEMBLY',
  COMPONENT = 'COMPONENT',
  MATERIAL = 'MATERIAL',
  FASTENER = 'FASTENER',
  TOOL = 'TOOL',
  PROCEDURE = 'PROCEDURE',
  INSPECTION = 'INSPECTION',
  MEASUREMENT = 'MEASUREMENT'
}

export enum RelationshipType {
  PART_OF = 'PART_OF',
  CONNECTED_TO = 'CONNECTED_TO',
  SUPPORTED_BY = 'SUPPORTED_BY',
  PROTECTS = 'PROTECTS',
  PROTECTED_BY = 'PROTECTED_BY',
  COOLED_BY = 'COOLED_BY',
  COOLS = 'COOLS',
  POWERED_BY = 'POWERED_BY',
  POWERS = 'POWERS',
  CALIBRATED_WITH = 'CALIBRATED_WITH',
  INSPECTED_BY = 'INSPECTED_BY',
  REPLACED_BY = 'REPLACED_BY',
  MANUFACTURED_WITH = 'MANUFACTURED_WITH'
}

export interface DomainEntity {
  id: string;
  type: EntityType;
  name: string;
  description: string;
}

export interface DomainRelationship {
  sourceId: string;
  targetId: string;
  relationshipType: RelationshipType;
}

// The Digital Blueprint (Engineering Model) - The Source of Truth
export interface EngineeringModel {
  entities: DomainEntity[];
  relationships: DomainRelationship[];
}

export interface ComponentKnowledge extends DomainEntity {
  type: EntityType.COMPONENT;
  manufacturer?: string;
  supplier?: string;
  purpose: string;
  function: string;
  material?: string;
  dimensions?: string;
  mass?: number;
  manufacturingProcess?: string;
  finish?: string;
  coating?: string;
  tolerances?: string;
  torqueSpecifications?: Record<string, string>;
  calibrationSpecifications?: string;
  expectedLifetime?: string;
  replacementCriteria?: string;
  failureModes?: string[];
  symptoms?: string[];
  safetyCritical: boolean;
}

// ==========================================
// CANONICAL EVIDENCE OBJECT
// ==========================================
export interface Evidence {
  id: string;
  source: string; // e.g., 'Reality Acquisition Layer'
  timestamp: string;
  subject: string; // entityId
  observation: string;
  measurement?: any;
  confidence: {
    observationConfidence: number;
    evidenceQuality: 'LOW' | 'MEDIUM' | 'HIGH';
  };
  provenance: string[]; // Audit trail
}
