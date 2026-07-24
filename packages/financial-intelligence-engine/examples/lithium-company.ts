// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/financial-intelligence-engine/examples/lithium-company.ts

import { CompanyAdapter } from '../src/adapters/company-adapter';
import { MarketAdapter } from '../src/adapters/market-adapter';
import { AssetAdapter } from '../src/adapters/asset-adapter';
import { Scenario } from '@axionyx/structure-engine/src/schemas/scenario';
import { LearningJourney } from '../src/education/learning-journey';

/**
 * Example Simulation: The Lithium Market Cycle
 * Demonstrating how AXIONYX calculates opposing forces in a system.
 */

// 1. Structure Engine Base Entities mapped via Adapters
const evMarket = MarketAdapter.toEntity('EV Market');
const batteryMarket = MarketAdapter.toEntity('Battery Market');
const lithiumCommodity = AssetAdapter.toEntity('Lithium', 'Commodity', 15000);
const miningCo = CompanyAdapter.toEntity('LithiumCorp', 'Mining');

// 2. Structural Simulation (Demand Side)
const demandScenario: Scenario = {
  initialState: {
    entity: evMarket,
    conditions: { 'adoption': 'accelerating' },
    measurements: { 'yoyGrowth': 0.4 },
    timestamp: new Date()
  },
  events: ['EV subsidies passed'],
  possibleTransitions: [],
  outcomes: [], // Will be computed by the Structure Engine
  confidence: 0.85
};

// 3. Structural Simulation (Opposing Force: Supply Side)
// The engine recognizes that demand ↑ -> price ↑ -> new entrants -> supply ↑ -> price pressure
const supplyScenario: Scenario = {
  initialState: {
    entity: lithiumCommodity,
    conditions: { 'price': 'high' },
    measurements: { 'pricePerTon': 60000 },
    timestamp: new Date()
  },
  events: ['Capital flows into mining sector', 'New mines come online'],
  possibleTransitions: [],
  outcomes: [], // Computed by Structure Engine
  confidence: 0.90
};

// 4. Financial Intelligence Engine compiles the Learning Journey
export const lithiumLearningJourney: LearningJourney = {
  scenarioSimulated: demandScenario,
  conceptsLearned: ['supply chains', 'commodities', 'company fundamentals', 'economics', 'risk analysis'],
  systemsMapped: ['The Electric Vehicle Component System'],
  skillsDeveloped: ['Systems Thinking', 'Causal Modeling', 'Risk Assessment'],
  nextInvestigation: 'What happens if a new battery chemistry bypasses lithium?'
};
