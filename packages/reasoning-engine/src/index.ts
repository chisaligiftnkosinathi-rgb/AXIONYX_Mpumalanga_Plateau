import { DomainGraph, RelationshipType, EntityType } from '../../domain-intelligence/core/src';

export interface Observation {
  entityId: string;
  condition: string;
  confidence: number; // 0 to 1
}

export interface Inference {
  entityId: string;
  reasoning: string;
  confidence: number;
  recommendedAction: string;
}

export class ReasoningEngine {
  constructor(private graph: DomainGraph) {}

  /**
   * Evaluates an observation and propagates failure down the relationship graph.
   * "Reality before AI" - Deterministic traversal before LLM summarization.
   */
  public evaluateFailurePropagation(observation: Observation): Inference[] {
    const inferences: Inference[] = [];

    // Find the observed entity
    const originEntity = this.graph.entities.find(e => e.id === observation.entityId);
    if (!originEntity) return inferences;

    // Find all relationships where the origin entity PROTECTS another entity
    // If a protector is compromised, the protected entity is at risk.
    const protectedRelationships = this.graph.relationships.filter(
      r => r.sourceId === originEntity.id && r.relationshipType === RelationshipType.PROTECTS
    );

    for (const rel of protectedRelationships) {
      const targetEntity = this.graph.entities.find(e => e.id === rel.targetId);
      if (targetEntity) {
        // We know the target entity might be damaged.
        // Let's check if it's a Component with known inspection methods.
        let action = `Inspect ${targetEntity.name} for damage.`;
        if (targetEntity.type === EntityType.COMPONENT && 'inspectionMethod' in targetEntity) {
          action = (targetEntity as any).inspectionMethod;
        }

        // Confidence degrades slightly as it propagates without direct evidence.
        const inferredConfidence = observation.confidence * 0.8;

        inferences.push({
          entityId: targetEntity.id,
          reasoning: `${originEntity.name} is observed as damaged (${observation.condition}). Because it PROTECTS the ${targetEntity.name}, there is a high probability of hidden damage.`,
          confidence: inferredConfidence,
          recommendedAction: action
        });
      }
    }

    return inferences;
  }
}
