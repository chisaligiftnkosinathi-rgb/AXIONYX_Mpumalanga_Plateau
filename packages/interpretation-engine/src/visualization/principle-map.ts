// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/interpretation-engine/src/visualization/principle-map.ts

export class PrincipleMap {
  /**
   * Generates a visual primitive linking a Principle to its domains and evidence.
   */
  static generate(principleName: string, domains: string[]): string {
    let output = `Principle Map: [[ ${principleName} ]]\n`;
    output += `Applicable Domains:\n`;
    domains.forEach(d => {
      output += `  |- ${d}\n`;
    });
    return output;
  }
}
