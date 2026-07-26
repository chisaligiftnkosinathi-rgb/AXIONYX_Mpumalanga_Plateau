import { KnowledgeGraph, KnowledgeNode, KnowledgeEdge } from '../schemas/engine.schema';

export type GapSeverity = 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
export type GapCategory = 'GEOGRAPHY' | 'EVIDENCE' | 'MEASUREMENT' | 'POLICY' | 'GOVERNANCE' | 'TRUST' | 'FOUNDATION';

export interface DiscoveryFix {
  action: 'CREATE_NODE' | 'CREATE_EDGE' | 'UPDATE_PROPERTY' | 'DELETE_NODE';
  payload: any;
}

export interface DiscoveryGap {
  id: string;
  severity: GapSeverity;
  category: GapCategory;
  entityId: string;
  explanation: string;
  recommendation: string;
  autoFix?: DiscoveryFix;
}

export interface DimensionScore {
  score: number; // 0.0 to 1.0
  weight: number;
}

export interface MaturityAssessment {
  overall: number; // 0.0 to 1.0
  layers: {
    foundation: number;
    evidence: number;
    intelligence: number;
    governance: number;
  };
  dimensions: {
    runtime: DimensionScore;
    knowledge: DimensionScore;
    reference: DimensionScore;
    geography: DimensionScore;
    measurement: DimensionScore;

    observation: DimensionScore;
    verification: DimensionScore;
    evidence: DimensionScore;
    provenance: DimensionScore;

    reasoning: DimensionScore;
    policy: DimensionScore;
    scenario: DimensionScore;
    forecast: DimensionScore;

    consultation: DimensionScore;
    resolution: DimensionScore;
    trust: DimensionScore;
  };
  gaps: DiscoveryGap[];
  recommendations: string[];
}

export interface RepairSuggestion {
  gapId: string;
  description: string;
  patch: any;
}

/**
 * Interface for the future automated Repair Engine
 */
export interface IRepairEngine {
  analyze(gaps: DiscoveryGap[]): RepairSuggestion[];
  applyPatch(suggestion: RepairSuggestion): boolean;
}

export class DiscoveryEngine {
  constructor(private graph: KnowledgeGraph) {}

  /**
   * Finds missing observations, missing verifications, or old evidence.
   */
  findBrokenEvidenceChains(): DiscoveryGap[] {
    const gaps: DiscoveryGap[] = [];
    const claims = Array.from((this.graph as any).nodes.values() as KnowledgeNode[]).filter(n => n.type === 'Claim' || n.type === 'Evidence');
    
    for (const claim of claims) {
      const edges = this.graph.getEdgesTo(claim.id).filter(e => e.type === 'evidenced_by' || e.type === 'verifies');
      if (edges.length === 0) {
        gaps.push({
          id: `gap-evd-${claim.id}`,
          severity: 'ERROR',
          category: 'EVIDENCE',
          entityId: claim.id,
          explanation: `Node ${claim.id} lacks verified evidence or observation chains.`,
          recommendation: `Request a new field Observation and Verification for ${claim.id}.`
        });
      }
    }
    return gaps;
  }

  /**
   * Finds Indicators that have no datasets or time series mapped to them.
   */
  findUnmeasuredIndicators(): DiscoveryGap[] {
    const gaps: DiscoveryGap[] = [];
    const indicators = Array.from((this.graph as any).nodes.values() as KnowledgeNode[]).filter(n => n.type === 'Indicator');
    
    for (const ind of indicators) {
      const edges = this.graph.getEdgesFrom(ind.id).filter(e => e.type === 'measured_by');
      const edgesTo = this.graph.getEdgesTo(ind.id).filter(e => e.type === 'measures');
      
      if (edges.length === 0 && edgesTo.length === 0) {
        gaps.push({
          id: `gap-meas-${ind.id}`,
          severity: 'WARNING',
          category: 'MEASUREMENT',
          entityId: ind.id,
          explanation: `Indicator ${ind.id} (${ind.name}) is not mapped to any authoritative Dataset or Series.`,
          recommendation: `Map this indicator to a StatsSA Dataset or local telemetry stream.`
        });
      }
    }
    return gaps;
  }

  /**
   * Finds Governance flows that were opened (Consultations, Decisions) but never resolved.
   */
  findGovernanceGaps(): DiscoveryGap[] {
    const gaps: DiscoveryGap[] = [];
    const consultations = Array.from((this.graph as any).nodes.values() as KnowledgeNode[]).filter(n => n.type === 'Consultation' || n.type === 'Decision');
    
    for (const c of consultations) {
      const resolutions = this.graph.getEdgesFrom(c.id).filter(e => e.type === 'adopts' || e.type === 'resolves');
      const resolutionsTo = this.graph.getEdgesTo(c.id).filter(e => e.type === 'adopts' || e.type === 'resolves');
      
      // We assume an edge 'resolves' points from Resolution to Consultation, or Consultation 'adopts' Option.
      // For simplicity, if there is no Resolution node connected to this Consultation/Decision, it is open.
      const hasResolution = Array.from((this.graph as any).nodes.values() as KnowledgeNode[])
        .some(n => n.type === 'Resolution' && (this.graph.getEdgesFrom(n.id).some(e => e.targetId === c.id) || this.graph.getEdgesTo(n.id).some(e => e.sourceId === c.id)));
      
      if (!hasResolution) {
        gaps.push({
          id: `gap-gov-${c.id}`,
          severity: 'CRITICAL',
          category: 'GOVERNANCE',
          entityId: c.id,
          explanation: `Governance process ${c.id} was opened but no Resolution was ever adopted.`,
          recommendation: `Evaluate the submissions and generate a Resolution to close the loop.`
        });
      }
    }
    return gaps;
  }

  /**
   * Finds physical assets lacking geographic coordinates or municipal boundaries.
   */
  findGeographicGaps(): DiscoveryGap[] {
    const gaps: DiscoveryGap[] = [];
    const assets = Array.from((this.graph as any).nodes.values() as KnowledgeNode[]).filter(n => n.type === 'Asset');
    
    for (const asset of assets) {
      const geoEdges = this.graph.getEdgesFrom(asset.id).filter(e => e.type === 'located_in');
      if (geoEdges.length === 0) {
        gaps.push({
          id: `gap-geo-${asset.id}`,
          severity: 'ERROR',
          category: 'GEOGRAPHY',
          entityId: asset.id,
          explanation: `Asset ${asset.id} (${asset.name}) is floating without a geographic 'located_in' constraint.`,
          recommendation: `Link this asset to a MainPlace or Municipality boundary.`
        });
      }
    }
    return gaps;
  }

  /**
   * Finds Goals without Projects or Projects without Goals.
   */
  findPolicyGaps(): DiscoveryGap[] {
    const gaps: DiscoveryGap[] = [];
    const goals = Array.from((this.graph as any).nodes.values() as KnowledgeNode[]).filter(n => n.type === 'Goal');
    
    for (const goal of goals) {
      // Very naive check for simulation: is there a chain to a project?
      // In reality, this would use a deep graph traversal (e.g. Goal -> Outcome -> Indicator -> Target -> Project)
      const hasExecution = this.graph.getEdgesFrom(goal.id).length > 0;
      if (!hasExecution) {
        gaps.push({
          id: `gap-pol-${goal.id}`,
          severity: 'WARNING',
          category: 'POLICY',
          entityId: goal.id,
          explanation: `Goal ${goal.id} has no execution pathways (Projects/Programmes) aligned to it.`,
          recommendation: `Align existing projects to this goal or create a new Programme.`
        });
      }
    }
    return gaps;
  }

  /**
   * Runs all discovery checks and produces an aggregated list of gaps.
   */
  runFullDiscovery(): DiscoveryGap[] {
    return [
      ...this.findBrokenEvidenceChains(),
      ...this.findUnmeasuredIndicators(),
      ...this.findGovernanceGaps(),
      ...this.findGeographicGaps(),
      ...this.findPolicyGaps()
    ];
  }

  /**
   * Evaluates the graph subset relevant to a target entity to compute a dependency-based maturity score.
   */
  computeMaturityAssessment(targetEntityId: string): MaturityAssessment {
    const allGaps = this.runFullDiscovery();
    
    // Filter gaps relevant to this entity (in a real system, we'd traverse the subgraph belonging to targetEntityId)
    // For this simulation, we'll just use the global gaps but weight them.
    const geoGaps = allGaps.filter(g => g.category === 'GEOGRAPHY').length;
    const evdGaps = allGaps.filter(g => g.category === 'EVIDENCE').length;
    const measGaps = allGaps.filter(g => g.category === 'MEASUREMENT').length;
    const govGaps = allGaps.filter(g => g.category === 'GOVERNANCE').length;
    const polGaps = allGaps.filter(g => g.category === 'POLICY').length;

    // Simulate dimension scoring (1.0 = perfect, 0.0 = terrible)
    // In production, this would be computed dynamically based on total nodes vs gaps.
    const score = (gaps: number) => Math.max(0, 1.0 - (gaps * 0.1));

    const geographyScore = score(geoGaps);
    const measurementScore = score(measGaps);
    const evidenceScore = score(evdGaps);
    const policyScore = score(polGaps);
    const governanceScore = score(govGaps);

    // Default other scores to 0.9 for simulation purposes
    const d = { score: 0.9, weight: 1 };

    const layers = {
      foundation: (1.0 + 1.0 + 1.0 + geographyScore + measurementScore) / 5, // (Runtime, Knowledge, Reference assumed 1.0)
      evidence: (d.score + d.score + evidenceScore + d.score) / 4,
      intelligence: (d.score + policyScore + d.score + d.score) / 4,
      governance: (d.score + governanceScore + d.score) / 3
    };

    // Overall is constrained by dependencies: Foundation * Evidence * Intelligence * Governance
    const overall = layers.foundation * layers.evidence * layers.intelligence * layers.governance;

    return {
      overall,
      layers,
      dimensions: {
        runtime: { score: 1.0, weight: 1 },
        knowledge: { score: 1.0, weight: 1 },
        reference: { score: 1.0, weight: 1 },
        geography: { score: geographyScore, weight: 1 },
        measurement: { score: measurementScore, weight: 1 },
        
        observation: d,
        verification: d,
        evidence: { score: evidenceScore, weight: 1 },
        provenance: d,

        reasoning: d,
        policy: { score: policyScore, weight: 1 },
        scenario: d,
        forecast: d,

        consultation: d,
        resolution: { score: governanceScore, weight: 1 },
        trust: d
      },
      gaps: allGaps,
      recommendations: [
        `Address ${geoGaps} Geographic Gaps to improve Foundation maturity.`,
        `Resolve ${govGaps} open Consultations to improve Governance maturity.`
      ]
    };
  }
}
