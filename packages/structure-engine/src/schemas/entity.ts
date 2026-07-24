// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/structure-engine/src/schemas/entity.ts

/**
 * An Entity is the most fundamental unit of a system.
 * It is completely domain-agnostic.
 */
export interface Entity {
  id: string;
  type: string;
  attributes: Record<string, any>;
}
