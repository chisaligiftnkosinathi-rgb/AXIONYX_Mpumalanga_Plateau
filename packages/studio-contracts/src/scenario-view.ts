// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-contracts/src/scenario-view.ts

/**
 * Visual primitive representing "Let me experiment".
 * Used by the Simulation Room / Scenario Player to accept user input controls.
 */
export interface ScenarioControlView {
  id: string;
  label: string; // e.g. "Sunlight intensity"
  type: 'slider' | 'toggle' | 'dropdown';
  currentValue: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
}

export interface ScenarioView {
  id: string;
  name: string; // e.g. "Solar civilization"
  controls: ScenarioControlView[];
  predictedImpacts: { parameter: string; direction: 'up' | 'down' | 'stable' }[];
}
