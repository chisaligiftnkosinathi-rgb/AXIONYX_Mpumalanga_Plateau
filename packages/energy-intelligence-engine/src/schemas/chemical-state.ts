// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/schemas/chemical-state.ts

export interface ChemicalState {
  material: string;
  concentration: number;
  temperature: number; // Celsius
  pressure: number;    // atm
  reactionRate: number;
}
