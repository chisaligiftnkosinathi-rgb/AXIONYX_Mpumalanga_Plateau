import { KnowledgeRuntime } from '../knowledge-graph-engine/src/runtime/index';
import { ScenarioEngine } from '../knowledge-graph-engine/src/runtime/scenario';
import { SimulationEngine } from '../knowledge-graph-engine/src/runtime/simulation';
import { ForecastEngine } from '../knowledge-graph-engine/src/runtime/forecast';
import { ChangeSet } from '../knowledge-graph-engine/src/schemas/engine.schema';

import { saPack } from '../pack-south-africa/src/index';
import { geographyPack } from '../pack-reference-geography/src/index';
import { statssaPack } from '../pack-statssa/src/index';
import { mpumalangaPack } from '../pack-mpumalanga/src/index';
import { emalahleniPack } from '../pack-emalahleni/src/index';

async function runScenarioSimulation() {
  console.log('===========================================================');
  console.log(' AXIONYX SCIE-ENGINE: COUNTERFACTUAL & SCENARIO ENGINE');
  console.log(' Evaluating Scenario Branches & Uncertain Forecasts');
  console.log('===========================================================');
  
  const runtime = new KnowledgeRuntime();
  runtime.loadPack(saPack);
  runtime.loadPack(geographyPack);
  runtime.loadPack(statssaPack);
  runtime.loadPack(mpumalangaPack);
  runtime.loadPack(emalahleniPack);
  runtime.compile();
  
  const baseGraph = (runtime as any).graph;
  
  const scenarioEngine = new ScenarioEngine(baseGraph);
  const simulationEngine = new SimulationEngine();
  const forecastEngine = new ForecastEngine();

  // Baseline Forecast (Reality)
  console.log('\n[1] Evaluating Baseline (REALITY)');
  const baselineContext = scenarioEngine.createScenario('REALITY', []);
  const baselineForecast = forecastEngine.generateForecast(baselineContext, 'mpu-indicator-road-quality', []);

  // Define the Counterfactual Scenario
  console.log('\n[2] Creating Counterfactual Scenario: "Budget -20%"');
  const budgetCutDelta: ChangeSet = {
    scenarioId: 'SCENARIO-BUDGET-CUT',
    changes: [
      {
        targetNodeId: 'ema-project-n4-upgrade',
        property: 'budget',
        oldValue: 100,
        newValue: 80
      }
    ]
  };

  const scenarioContext = scenarioEngine.createScenario('SCENARIO-BUDGET-CUT', [budgetCutDelta]);
  
  console.log('\n[3] Propagating Impacts through Dependencies...');
  const impactedNodes = simulationEngine.propagateImpact(scenarioContext, ['ema-project-n4-upgrade']);
  console.log(`  -> Impact propagated to ${impactedNodes.length} dependent nodes.`);

  console.log('\n[4] Generating Uncertain Forecast...');
  const scenarioForecast = forecastEngine.generateForecast(scenarioContext, 'mpu-indicator-road-quality', impactedNodes);

  console.log('\n[5] Comparing Scenarios...');
  const comparison = forecastEngine.compare(baselineForecast, scenarioForecast);

  console.log('\n--- SCENARIO COMPARISON RESULT ---');
  console.log(`Indicator: Road Quality Index`);
  console.log(`\nREALITY Baseline:`);
  console.log(`  Expected: ${comparison.reality.expected}%`);
  console.log(`  Confidence Range: ${comparison.reality.range[0]}% - ${comparison.reality.range[1]}%`);
  
  console.log(`\nSCENARIO (Budget -20%):`);
  console.log(`  Expected: ${comparison.scenario.expected}%`);
  console.log(`  Confidence Range: ${comparison.scenario.range[0]}% - ${comparison.scenario.range[1]}%`);
  
  console.log(`\nDelta: ${comparison.delta > 0 ? '+' : ''}${comparison.delta}%`);
  console.log(`Governance Risk Flag: ${comparison.risk}`);
  
  console.log('\nAssumptions:');
  scenarioForecast.assumptions.forEach(a => console.log(`  - ${a}`));

  console.log('\n===========================================================');
  console.log(' SCENARIO SIMULATION COMPLETE');
  console.log('===========================================================');
}

runScenarioSimulation().catch(console.error);
