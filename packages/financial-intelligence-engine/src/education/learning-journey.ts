// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/financial-intelligence-engine/src/education/learning-journey.ts

import { Scenario } from '@axionyx/structure-engine/src/schemas';

/**
 * The Education Layer Principle: The Financial Intelligence Engine 
 * should not just analyze, it should teach.
 */
export interface LearningJourney {
  scenarioSimulated: Scenario;
  
  conceptsLearned: string[];    // e.g., ['supply chains', 'commodities']
  systemsMapped: string[];      // e.g., ['Lithium Market System']
  skillsDeveloped: string[];    // e.g., ['risk analysis', 'systems thinking']
  
  nextInvestigation: string;    // e.g., "What happens if a new battery chemistry bypasses lithium?"
}
