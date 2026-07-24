// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/curiosity-engine/src/schemas/knowledge.ts

export interface KnowledgeGraphNode {
  id: string;
  domain: string;
  concept: string;
  dependencies: KnowledgeGraphNode[];
}

/**
 * The Hidden Knowledge Discovery maps a single curiosity gap 
 * into a rich dependency graph of underlying scientific concepts.
 */
export interface HiddenKnowledgeDiscovery {
  curiosityId: string;
  rootNode: KnowledgeGraphNode;
}
