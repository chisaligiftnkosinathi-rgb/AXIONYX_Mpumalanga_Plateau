export type NodeType =
  | 'Vision'
  | 'Framework'
  | 'Policy'
  | 'Goal'
  | 'Outcome'
  | 'Indicator'
  | 'Programme'
  | 'Standard'
  | 'Regulation'
  | 'Law'
  | 'Authority'
  | 'Document'
  | 'DocumentRevision'
  | 'Concept'
  | 'Skill'
  | 'Competency'
  | 'Capability'
  | 'Assessment'
  | 'Evidence'
  | 'Qualification'
  | 'Institution'
  | 'Organisation'
  | 'Community'
  | 'Person'
  | 'Resource'
  | 'Research'
  | 'Target'
  | 'Asset'
  | 'Observation'
  | 'Verification'
  | 'Organisation'
  | 'Programme'
  | 'Role'
  | 'Boundary'
  | 'Dataset'
  | 'Series'
  | 'StatisticalObservation'
  | 'Unit'
  | 'Project'
  | 'Claim'
  | 'Hypothesis'
  | 'Assessment'
  | 'Decision'
  | 'Recommendation'
  | 'Risk'
  | 'Scenario'
  | 'Forecast'
  | 'Assumption'
  | 'Impact'
  | 'Actor'
  | 'Identity'
  | 'Credential'
  | 'PolicyOption'
  | 'Consultation'
  | 'Submission'
  | 'Delegation'
  | 'Resolution';

export type EdgeType =
  | 'requires'
  | 'supports'
  | 'assessed_by'
  | 'required_by'
  | 'implements'
  | 'aligns_with'
  | 'operationalizes'
  | 'maps_to'
  | 'contributes_to'
  | 'evidenced_by'
  | 'derived_from'
  | 'generated_by'
  | 'authorized_by'
  | 'published_in'
  | 'supersedes'
  | 'version'
  | 'measures'
  | 'measured_by'
  | 'measured_in'
  | 'verifies'
  | 'funds'
  | 'owns'
  | 'produces'
  | 'publishes'
  | 'contains'
  | 'located_in'
  | 'supported_by'
  | 'contradicted_by'
  | 'assesses'
  | 'decides'
  | 'recommends'
  | 'mitigates'
  | 'generates'
  | 'projects'
  | 'assumes'
  | 'impacts'
  | 'authenticated_as'
  | 'verified_by'
  | 'issued_by'
  | 'delegates_to'
  | 'adopts'
  | 'proposes'
  | 'opens'
  | 'collects'
  | 'supports'
  | 'opposes';

export interface TemporalAttributes {
  valid_from: Date | null;
  valid_until: Date | null;
  effective_date: Date | null;
  publication_date: Date | null;
}

export type EvidenceConfidence = 'VERIFIED' | 'HIGH' | 'MEDIUM' | 'LOW' | 'REJECTED';
export type EvidenceDimensionCategory = 'Construction Quality' | 'Safety' | 'Performance' | 'Compliance' | 'Environmental Impact' | 'General';

export type GraphContextType = 'REALITY' | 'SCENARIO' | 'HISTORICAL' | 'FORECAST' | 'ARCHIVED';

export interface EvidenceMetadata {
  authority?: string;
  method?: string;
  confidence?: EvidenceConfidence | number;
  coverage?: string;
  timestamp?: string;
  dimensionCategory?: EvidenceDimensionCategory;
  submissionType?: 'vote' | 'comment' | 'evidence' | 'proposal' | 'objection' | 'amendment';
  [key: string]: any;
}

export interface KnowledgeGraphData {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
}

export interface ChangeSet {
  scenarioId: string;
  changes: Array<{
    targetNodeId: string;
    property: string;
    oldValue: any;
    newValue: any;
  }>;
}

export interface ForecastResult {
  scenarioId: string;
  indicatorId: string;
  expectedValue: any;
  range: [any, any];
  confidence: number;
  assumptions: string[];
  evidenceSources: number;
}

export interface KnowledgeNode {
  id: string;
  type: NodeType;
  name: string;
  description: string;
  temporal: TemporalAttributes;
  authority?: string; // Phase 14: Authority Domain Ownership
  metadata?: EvidenceMetadata | Record<string, any>;
}

export interface KnowledgeEdge {
  id: string;
  sourceId: string;
  targetId: string;
  type: EdgeType;
  temporal: TemporalAttributes;
  metadata?: Record<string, any>;
}

export class KnowledgeGraph {
  private nodes: Map<string, KnowledgeNode> = new Map();
  private edges: Map<string, KnowledgeEdge> = new Map();

  addNode(node: KnowledgeNode): void {
    if (this.nodes.has(node.id)) {
      throw new Error(`Node with id ${node.id} already exists.`);
    }
    this.nodes.set(node.id, node);
  }

  addEdge(edge: KnowledgeEdge): void {
    if (!this.nodes.has(edge.sourceId)) {
      throw new Error(`Source node ${edge.sourceId} does not exist.`);
    }
    if (!this.nodes.has(edge.targetId)) {
      throw new Error(`Target node ${edge.targetId} does not exist.`);
    }
    this.edges.set(edge.id, edge);
  }

  getNode(id: string): KnowledgeNode | undefined {
    return this.nodes.get(id);
  }

  getEdge(id: string): KnowledgeEdge | undefined {
    return this.edges.get(id);
  }

  getEdgesFrom(sourceId: string): KnowledgeEdge[] {
    return Array.from(this.edges.values()).filter(e => e.sourceId === sourceId);
  }

  getEdgesTo(targetId: string): KnowledgeEdge[] {
    return Array.from(this.edges.values()).filter(e => e.targetId === targetId);
  }
}
