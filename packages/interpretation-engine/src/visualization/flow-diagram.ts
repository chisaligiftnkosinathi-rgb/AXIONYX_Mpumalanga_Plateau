// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/interpretation-engine/src/visualization/flow-diagram.ts

export class FlowDiagram {
  /**
   * Generates a visual primitive representing cyclic or linear flows between entities.
   */
  static generate(flows: {source: string, destination: string, type: string}[]): string {
    let output = `Flow Diagram\n`;
    flows.forEach(f => {
      output += `[${f.source}] ==(${f.type})==> [${f.destination}]\n`;
    });
    return output;
  }
}
