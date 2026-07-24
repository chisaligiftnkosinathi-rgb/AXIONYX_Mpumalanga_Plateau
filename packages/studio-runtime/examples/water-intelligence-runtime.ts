// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-runtime/examples/water-intelligence-runtime.ts

import { SimulationController } from '../src/runtime/simulation-controller';
import { KnowledgeViewBuilder } from '../src/builders/knowledge-view-builder';
import { Scenario } from '../src/scenarios/scenario';

/**
 * Example Reference: The Water Intelligence Explorer
 * Simulates a Studio UI session requesting a scenario, ticking the engine,
 * and receiving the translated WorldView and KnowledgeView.
 */

const controller = new SimulationController();

// 1. Studio requests a Scenario
const solarHeatingScenario: Scenario = {
  id: 'scen-water-001',
  name: 'Increase Solar Heating',
  initialState: { oceanTemp: 20 },
  variables: [{ parameter: 'solarInput', action: 'increase', value: 30 }],
  constraints: ['conservation_of_energy'],
  expectedObservations: ['Evaporation increases']
};

controller.loadScenario(solarHeatingScenario);

// 2. Studio initiates playback (simulating 3 ticks)
console.log('--- STARTING SIMULATION PLAYBACK ---');
for (let i = 1; i <= 3; i++) {
  const view = controller.advanceTick();
  console.log(`\n[TICK ${view.tick}] Frontend received WorldView:`);
  console.log(`Entities Rendered: ${view.entities.length} (${view.entities[0].name} at ${view.entities[0].currentState.label})`);
}

// 3. Interpretation Engine finishes learning
console.log('\n--- INTERPRETATION ENGINE FIRED ---');
const knowledgeView = KnowledgeViewBuilder.buildFromKnowledgeGraph({});
console.log(`Frontend received KnowledgeView. Displaying Principles:`);
knowledgeView.principles.forEach(p => {
  console.log(`✓ ${p.name} (Confidence: ${p.confidence})`);
  console.log(`  Evidence Link: ${p.evidence[0].description}`);
});
