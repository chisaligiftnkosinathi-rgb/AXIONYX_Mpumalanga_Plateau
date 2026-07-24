// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-runtime/src/scenarios/scenario.ts

export interface Scenario {
  id: string;
  name: string; // e.g. "Increase Solar Heating"
  initialState: Record<string, any>;
  variables: {
    parameter: string;
    action: 'increase' | 'decrease' | 'set';
    value: number;
  }[];
  constraints: string[];
  expectedObservations: string[]; // Hypotheses to test
}
