import { KnowledgeGraph } from './index';

export interface ReasoningResult {
  claimId: string;
  claimName: string;
  supportingEvidence: string[];
  contradictingEvidence: string[];
  missingEvidence: string[];
  evidenceDimensions: Record<string, string[]>; // e.g. { 'Construction Quality': ['PASS'], 'Safety': ['FAIL'] }
  ruleEvaluations: string[];
  explanation: string;
}

export class ReasoningEngine {
  constructor(private graph: KnowledgeGraph) {}

  evaluateClaim(claimId: string): ReasoningResult {
    const claimNode = this.graph.getNode(claimId);
    if (!claimNode) throw new Error(`Claim not found: ${claimId}`);

    const supportingEdges = this.graph.getEdgesFrom(claimId).filter(e => e.type === 'supported_by');
    const contradictingEdges = this.graph.getEdgesFrom(claimId).filter(e => e.type === 'contradicted_by');

    const supportingEvidence = supportingEdges.map(e => e.targetId);
    const contradictingEvidence = contradictingEdges.map(e => e.targetId);
    const missingEvidence: string[] = [];
    const evidenceDimensions: Record<string, string[]> = {};
    const ruleEvaluations: string[] = [];

    // Analyze supporting evidence dimensions
    supportingEvidence.forEach(evId => {
      const evNode = this.graph.getNode(evId);
      const dim = evNode.metadata?.dimensionCategory || 'General';
      if (!evidenceDimensions[dim]) evidenceDimensions[dim] = [];
      evidenceDimensions[dim].push('SUPPORT');
    });

    // Analyze contradicting evidence dimensions
    contradictingEvidence.forEach(evId => {
      const evNode = this.graph.getNode(evId);
      const dim = evNode.metadata?.dimensionCategory || 'General';
      if (!evidenceDimensions[dim]) evidenceDimensions[dim] = [];
      evidenceDimensions[dim].push('CONTRADICT');
    });

    // Apply rules
    let explanation = `The claim "${claimNode.name}" was evaluated. `;
    
    if (evidenceDimensions['Construction Quality']?.includes('SUPPORT')) {
      ruleEvaluations.push('Construction Quality meets specification.');
      explanation += `The asset met construction specifications according to verified evidence. `;
    }

    if (evidenceDimensions['Performance']?.includes('CONTRADICT') || evidenceDimensions['Safety']?.includes('CONTRADICT')) {
      ruleEvaluations.push('Operational evidence indicates current deterioration or safety risk.');
      explanation += `However, recent field observations indicate operational deterioration. `;
    }

    if (contradictingEvidence.length > 0) {
      explanation += `The claim is therefore only partially supported.`;
    } else if (supportingEvidence.length > 0) {
      explanation += `The claim is fully supported.`;
    } else {
      explanation += `There is no evidence to evaluate this claim.`;
    }

    return {
      claimId,
      claimName: claimNode.name,
      supportingEvidence,
      contradictingEvidence,
      missingEvidence,
      evidenceDimensions,
      ruleEvaluations,
      explanation
    };
  }
}
