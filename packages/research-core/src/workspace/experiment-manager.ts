// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-core/src/workspace/experiment-manager.ts

import { Experiment } from '../schemas/experiment';

export class ExperimentManager {
  static createExperiment(name: string, scenarioId: string, variables: string[]): Experiment {
    return {
      id: `exp-${Date.now()}`,
      name,
      scenarioId,
      variablesTested: variables,
      results: [],
      isCompleted: false
    };
  }
}
