// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/ontology/src/index.ts

/**
 * The Central AXIONYX Ontology.
 * Every object, asset, sensor, and event in AXIONYX receives a canonical Ontology ID.
 * Example: ontology://instrument/icp-ms
 */

export interface OntologyNode {
  /** The globally unique canonical URI (e.g., ontology://sensor/temperature) */
  ontologyId: string;
  
  /** The canonical human-readable name */
  canonicalName: string;
  
  /** Official Definition */
  definition: string;
  
  /** Alternative names or industry jargon */
  aliases: string[];
  
  /** The standard units associated with this node (if applicable) */
  units?: string[];
  
  /** ISO, ASTM, or other compliance references */
  standards?: string[];
  
  /** The primary AXIONYX domain this belongs to */
  domain: string;
  
  /** Mandatory evidence required to validate this object's state */
  evidenceRequirements: string[];
}

export class OntologyRegistry {
  private nodes: Map<string, OntologyNode> = new Map();

  register(node: OntologyNode) {
    if (this.nodes.has(node.ontologyId)) {
      throw new Error(`[Ontology] Collision: Node ${node.ontologyId} is already registered.`);
    }
    this.nodes.set(node.ontologyId, node);
    console.log(`[Ontology] Registered Canonical Node: ${node.ontologyId}`);
  }

  resolve(ontologyId: string): OntologyNode | undefined {
    return this.nodes.get(ontologyId);
  }
}

export const axionyxOntology = new OntologyRegistry();
