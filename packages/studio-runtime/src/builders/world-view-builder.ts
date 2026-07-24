// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-runtime/src/builders/world-view-builder.ts

import { WorldView } from '../../../studio-contracts/src/world-view';

export class WorldViewBuilder {
  /**
   * Translates the Computational Engine's StateSpace into the Studio's WorldView contract.
   */
  static buildFromSimulation(simulationState: any): WorldView {
    // In reality, this maps over simulationState.nodes and generates EntityViews
    return {
      id: simulationState.id || `world-${Date.now()}`,
      name: 'Simulated Environment',
      tick: simulationState.tick || 0,
      entities: [
        {
          id: 'ent-ocean',
          name: 'Ocean',
          domain: 'Water',
          currentState: {
            label: '28°C',
            statusIndicator: 'transition',
            metrics: { temperature: 28 }
          }
        }
      ],
      flows: [],
      globalStates: [],
      activePrinciples: []
    };
  }
}
