export interface EmalahleniNode {
  nodeId: string;
  domain: 'ENERGY_COAL' | 'PHARMA_MEDICAL';
  metrics: {
    energy: number; // E
    instrumentation: number; // I
    capability: number; // C
    environment: number; // Env
    resources: number; // R
    learningVelocity: number; // LV
  };
}

export interface ImpuritySignal {
  expectedState: number;
  observedState: number;
  description: string;
}

export class SystemsHealthEngine {
  
  /**
   * Calculates the overall Industrial Health Score.
   * Health = (Energy × Instrumentation × Capability × Environment × Resources) × LearningVelocity
   */
  public calculateHealthScore(metrics: EmalahleniNode['metrics']): number {
    const rawReaction = 
      metrics.energy * 
      metrics.instrumentation * 
      metrics.capability * 
      metrics.environment * 
      metrics.resources;
      
    return rawReaction * metrics.learningVelocity;
  }

  /**
   * Translates an impurity signal into a Deviation Vector.
   * Treats impurities not as enemies, but as signals of an unknown state.
   */
  public processImpurity(signal: ImpuritySignal): { 
    deviationVector: number; 
    action: string 
  } {
    if (signal.expectedState === 0) return { deviationVector: 0, action: 'UNKNOWN_EXPECTATION' };
    
    const deviationVector = Math.abs(signal.expectedState - signal.observedState) / signal.expectedState;
    
    // Instead of blame, we isolate the unknown state for learning.
    return {
      deviationVector,
      action: `Isolate deviated batch (${(deviationVector * 100).toFixed(1)}% variance). Trigger Root Cause Analysis to map unknown environmental pressure.`
    };
  }

  /**
   * Evaluates the node's immune response to an impurity.
   */
  public evaluateImmuneResponse(node: EmalahleniNode, signal: ImpuritySignal) {
    const healthScore = this.calculateHealthScore(node.metrics);
    const processing = this.processImpurity(signal);

    if (node.metrics.instrumentation < 0.2) {
      return {
        healthScore,
        immuneState: 'BLIND',
        conclusion: 'Critical vulnerability. Cannot detect impurity without instrumentation. Capability collapses.'
      };
    }

    if (node.metrics.learningVelocity < 0.3) {
      return {
        healthScore,
        immuneState: 'STAGNANT',
        conclusion: 'Impurity detected but not processed. Failure repeats. Low learning velocity destroys system health.'
      };
    }

    return {
      healthScore,
      immuneState: 'ADAPTIVE',
      conclusion: 'Impurity detected via instrumentation. High learning velocity converts deviation into new capability.',
      action: processing.action
    };
  }
}
