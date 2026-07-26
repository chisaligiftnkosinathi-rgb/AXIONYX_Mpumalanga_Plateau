import { GraphContext } from './scenario';

export class SimulationEngine {
  propagateImpact(context: GraphContext, rootNodeIds: string[]): string[] {
    const impactedNodes: string[] = [];
    const queue = [...rootNodeIds];
    const visited = new Set<string>();

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (visited.has(current)) continue;
      visited.add(current);
      impactedNodes.push(current);

      // Simple downward propagation logic for demonstration
      // If a node is updated, anything that depends on it is impacted
      // e.g. Programme -> Project -> Asset -> Indicator -> Goal
      const edgesFrom = context.getEdgesFrom(current);
      for (const edge of edgesFrom) {
        if (['funds', 'implements', 'measures', 'contributes_to'].includes(edge.type)) {
          queue.push(edge.targetId);
        }
      }
      
      // Also check reverse mappings where the current node is the source of truth
      const edgesTo = context.getEdgesTo(current);
      for (const edge of edgesTo) {
        if (['generated_by', 'evidenced_by', 'measures'].includes(edge.type)) {
          queue.push(edge.sourceId);
        }
      }
    }

    return impactedNodes;
  }
}
