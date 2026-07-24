// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/computational-engine/src/core/state-space.ts

import { ComputationalNode } from './computational-node';

/**
 * The State Space mathematically defines the boundaries and current positions of all entities.
 */
export class StateSpace {
  nodes: Map<string, ComputationalNode> = new Map();

  registerNode(node: ComputationalNode): void {
    this.nodes.set(node.entityId, node);
  }

  getNodeState(entityId: string) {
    return this.nodes.get(entityId)?.currentState;
  }
}
