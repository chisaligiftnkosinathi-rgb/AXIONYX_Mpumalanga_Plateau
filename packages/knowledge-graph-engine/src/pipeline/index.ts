import { KnowledgeGraph, KnowledgeNode, KnowledgeEdge } from '../schemas/engine.schema';

export interface DocumentSource {
  id: string;
  content: string; // The raw PDF text or markdown
  metadata: {
    authority: string;
    title: string;
    version: string;
    publication_date: Date;
    effective_date: Date;
    valid_until?: Date;
  };
}

export interface ParsedBlock {
  id: string;
  type: 'heading' | 'paragraph' | 'list_item';
  content: string;
}

export interface SemanticEntity {
  id: string;
  rawText: string;
  inferredType: 'Vision' | 'Goal' | 'Outcome' | 'Indicator' | 'Programme' | 'Concept' | 'Skill';
}

export interface MappedNode extends Omit<KnowledgeNode, 'id'> {
  tempId: string;
}

export interface MappedEdge extends Omit<KnowledgeEdge, 'id' | 'sourceId' | 'targetId'> {
  tempSourceId: string;
  tempTargetId: string;
}

export class UniversalTranslationPipeline {
  constructor() {}

  /**
   * 1. Parser: Ingests raw document text (from PDFs) and outputs structural blocks.
   */
  public parseDocument(source: DocumentSource): ParsedBlock[] {
    // Simulated parsing logic
    return [
      { id: 'block_1', type: 'heading', content: 'Goal 1: High-Quality Education' },
      { id: 'block_2', type: 'paragraph', content: 'By 2030, all children should have access to high-quality early childhood development.' }
    ];
  }

  /**
   * 2. Semantic Extractor: Uses NLP/LLM to extract entities from structural blocks.
   */
  public extractEntities(blocks: ParsedBlock[]): SemanticEntity[] {
    // Simulated extraction logic
    return [
      { id: 'entity_1', rawText: 'High-Quality Education', inferredType: 'Goal' },
      { id: 'entity_2', rawText: 'Early Childhood Development', inferredType: 'Programme' }
    ];
  }

  /**
   * 3. Ontology Mapper: Maps semantic entities to the SA-NKI / Universal Constitution.
   */
  public mapToOntology(entities: SemanticEntity[], source: DocumentSource): MappedNode[] {
    return entities.map(entity => ({
      tempId: entity.id,
      type: entity.inferredType as any,
      name: entity.rawText,
      description: `Extracted from ${source.metadata.title}`,
      temporal: {
        valid_from: source.metadata.effective_date,
        valid_until: source.metadata.valid_until || null,
        effective_date: source.metadata.effective_date,
        publication_date: source.metadata.publication_date
      },
      metadata: { sourceDoc: source.id }
    }));
  }

  /**
   * 4. Relationship Builder: Infers and builds edges (requires, aligns_with, etc.)
   */
  public buildRelationships(nodes: MappedNode[]): MappedEdge[] {
    // Simulated relationship builder
    return [
      {
        tempSourceId: 'entity_2', // Programme
        tempTargetId: 'entity_1', // Goal
        type: 'aligns_with',
        temporal: nodes[0].temporal
      }
    ];
  }

  /**
   * 5. Policy Compiler: Compiles the nodes and edges into a finalized KnowledgeGraph.
   */
  public compile(nodes: MappedNode[], edges: MappedEdge[], source: DocumentSource): KnowledgeGraph {
    const graph = new KnowledgeGraph();

    // Add Document and Authority nodes for Provenance Graph
    const authorityNodeId = `auth_${source.metadata.authority.replace(/\s+/g, '_')}`;
    const docNodeId = source.id;

    graph.addNode({
      id: authorityNodeId,
      type: 'Authority',
      name: source.metadata.authority,
      description: 'Governing Body',
      temporal: nodes[0]?.temporal || { valid_from: null, valid_until: null, effective_date: null, publication_date: null }
    });

    graph.addNode({
      id: docNodeId,
      type: 'Document',
      name: source.metadata.title,
      description: `Version ${source.metadata.version}`,
      temporal: nodes[0]?.temporal || { valid_from: null, valid_until: null, effective_date: null, publication_date: null }
    });

    // Link Document to Authority (Document published_in/authorized_by Authority)
    graph.addEdge({
      id: `edge_${docNodeId}_auth`,
      sourceId: docNodeId,
      targetId: authorityNodeId,
      type: 'authorized_by',
      temporal: nodes[0]?.temporal || { valid_from: null, valid_until: null, effective_date: null, publication_date: null }
    });

    const idMap = new Map<string, string>();

    // Add Policy Nodes
    nodes.forEach(n => {
      const finalId = `node_${Math.random().toString(36).substr(2, 9)}`;
      idMap.set(n.tempId, finalId);
      graph.addNode({
        id: finalId,
        type: n.type,
        name: n.name,
        description: n.description,
        temporal: n.temporal,
        metadata: n.metadata
      });

      // Provenance edge: PolicyNode published_in Document
      graph.addEdge({
        id: `edge_${finalId}_doc`,
        sourceId: finalId,
        targetId: docNodeId,
        type: 'published_in',
        temporal: n.temporal
      });
    });

    // Add Policy Edges
    edges.forEach(e => {
      const finalSource = idMap.get(e.tempSourceId);
      const finalTarget = idMap.get(e.tempTargetId);
      if (finalSource && finalTarget) {
        graph.addEdge({
          id: `edge_${Math.random().toString(36).substr(2, 9)}`,
          sourceId: finalSource,
          targetId: finalTarget,
          type: e.type,
          temporal: e.temporal,
          metadata: e.metadata
        });
      }
    });

    return graph;
  }

  /**
   * Orchestrator: Runs the full pipeline from raw document to Knowledge Graph.
   */
  public executePipeline(source: DocumentSource): KnowledgeGraph {
    const blocks = this.parseDocument(source);
    const entities = this.extractEntities(blocks);
    const mappedNodes = this.mapToOntology(entities, source);
    const mappedEdges = this.buildRelationships(mappedNodes);
    return this.compile(mappedNodes, mappedEdges, source);
  }
}
