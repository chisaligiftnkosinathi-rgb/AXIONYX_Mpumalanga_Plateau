// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/structure-engine/src/schemas/relationship.ts

import { Entity } from './entity';

/**
 * A Relationship connects two entities. 
 * AXIONYX is an evidence-first system, so relationships require confidence and evidence.
 */
export interface Relationship {
  sourceEntity: Entity;
  targetEntity: Entity;
  
  relationshipType: 'dependency' | 'causal' | 'correlation';
  strength: number;       // 0.0 to 1.0 (magnitude of effect)
  confidence: number;     // 0.0 to 1.0 (certainty of the relationship)
  
  evidence: string[];     // URIs or references to empirical evidence (e.g., market_reports)
}
