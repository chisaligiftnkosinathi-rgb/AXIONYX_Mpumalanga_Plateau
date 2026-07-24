// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/interpretation-engine/src/visualization/state-transition-map.ts

export class StateTransitionMap {
  /**
   * Generates a visual primitive representing node state changes over time.
   */
  static generate(entityId: string, transitions: {from: string, to: string, trigger: string}[]): string {
    let output = `State Transition Map for [${entityId}]\n`;
    transitions.forEach(t => {
      output += `[${t.from}] --(${t.trigger})--> [${t.to}]\n`;
    });
    return output;
  }
}
