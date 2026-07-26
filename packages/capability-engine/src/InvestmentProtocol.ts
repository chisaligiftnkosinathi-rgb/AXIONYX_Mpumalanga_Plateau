export interface EnterpriseNode {
  nodeId: string;
  name: string;
  metrics: {
    marketDemand: number;
    operationalCapability: number;
    evidenceMaturity: number;
    learningRate: number; // The ability to adapt from NCs
  };
}

export interface InvestmentDecision {
  nodeId: string;
  investmentPotentialScore: number;
  readinessState: 'REJECT' | 'EVIDENCE_UPGRADE_REQUIRED' | 'INVESTABLE' | 'CATALYST_READY';
  interventionStrategy: string;
}

export class InvestmentProtocol {
  
  /**
   * Calculates the Investment Potential based on the Walala Wasala equation:
   * Investment Potential = Demand × Capability × Evidence × Learning Rate
   */
  public calculateInvestmentPotential(node: EnterpriseNode): number {
    return (
      node.metrics.marketDemand *
      node.metrics.operationalCapability *
      node.metrics.evidenceMaturity *
      node.metrics.learningRate
    );
  }

  /**
   * Evaluates an enterprise and returns the required banking intervention.
   * Instead of outright rejecting nodes with low evidence, the bank funds the *evidence upgrade*.
   */
  public evaluateNode(node: EnterpriseNode): InvestmentDecision {
    const score = this.calculateInvestmentPotential(node);
    
    // High demand and capability, but low evidence -> We don't reject. We upgrade evidence.
    if (node.metrics.marketDemand > 0.7 && node.metrics.operationalCapability > 0.6 && node.metrics.evidenceMaturity < 0.4) {
      return {
        nodeId: node.nodeId,
        investmentPotentialScore: score,
        readinessState: 'EVIDENCE_UPGRADE_REQUIRED',
        interventionStrategy: 'Deploy Walala Wasala Evidence Layer to structure existing reality.'
      };
    }

    if (score >= 0.7) {
      return {
        nodeId: node.nodeId,
        investmentPotentialScore: score,
        readinessState: 'CATALYST_READY',
        interventionStrategy: 'Deploy Industrial Reaction Capital to trigger massive scale.'
      };
    } else if (score >= 0.4) {
      return {
        nodeId: node.nodeId,
        investmentPotentialScore: score,
        readinessState: 'INVESTABLE',
        interventionStrategy: 'Standard capability financing to accelerate market absorption.'
      };
    }

    return {
      nodeId: node.nodeId,
      investmentPotentialScore: score,
      readinessState: 'REJECT',
      interventionStrategy: 'Fundamental demand or capability missing. Re-evaluate.'
    };
  }
}
