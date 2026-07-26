import { ForecastResult } from '../schemas/engine.schema';
import { GraphContext } from './scenario';

export class ForecastEngine {
  generateForecast(context: GraphContext, indicatorId: string, impactedNodes: string[]): ForecastResult {
    const indicator = context.getNode(indicatorId);
    if (!indicator) throw new Error(`Indicator not found: ${indicatorId}`);

    // Look for budget changes in impacted nodes to simulate a statistical model
    let budgetCut = false;
    for (const nodeId of impactedNodes) {
      const node = context.getNode(nodeId);
      if (node?.metadata && node.metadata.budget !== undefined) {
        // Simple mock detection of budget drop
        budgetCut = node.metadata.budget < 100; 
      }
    }

    // Default expected value
    let expectedValue = 92;
    let range: [number, number] = [88, 95];
    let confidence = 0.95;

    // Simulate statistical impact
    if (budgetCut) {
      expectedValue = 82;
      range = [79, 85];
      confidence = 0.87;
    }

    return {
      scenarioId: context.id,
      indicatorId: indicator.id,
      expectedValue,
      range,
      confidence,
      assumptions: [
        'Historical deterioration rates hold true',
        'No external emergency funding acquired'
      ],
      evidenceSources: 17
    };
  }

  compare(baseline: ForecastResult, scenario: ForecastResult): any {
    return {
      indicator: baseline.indicatorId,
      reality: {
        expected: baseline.expectedValue,
        range: baseline.range
      },
      scenario: {
        id: scenario.scenarioId,
        expected: scenario.expectedValue,
        range: scenario.range
      },
      delta: scenario.expectedValue - baseline.expectedValue,
      risk: scenario.expectedValue < 90 ? 'HIGH' : 'LOW'
    };
  }
}
