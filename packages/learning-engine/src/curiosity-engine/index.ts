// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/learning-engine/src/curiosity-engine/index.ts

import { CuriosityArchetype, DiscoveryLayer } from '../schemas/lcs';

export class CuriosityEngine {
  /**
   * Transforms a raw observation into a compelling Discovery Layer for an investigation.
   */
  public generateDiscovery(
    archetype: CuriosityArchetype,
    observation: string,
    realWorldContext: string
  ): DiscoveryLayer {
    
    // In a full implementation, this might query the Knowledge Graph to build the mystery
    let question = '';
    let mystery = '';

    switch (archetype) {
      case 'Why?':
        question = `Why does ${observation.toLowerCase()} occur?`;
        mystery = `We observe ${observation.toLowerCase()}, but the underlying mechanism is hidden. What is driving this physical change?`;
        break;
      case 'What caused this?':
        question = `What caused this specific instance of ${observation.toLowerCase()}?`;
        mystery = `A failure or anomaly has occurred. We must trace the capability degradation back to its root constraint violation.`;
        break;
      case 'Can we predict it?':
        question = `Can AI predict when ${observation.toLowerCase()} will happen?`;
        mystery = `If we understand the systemic variables, we should be able to forecast the outcome before it occurs.`;
        break;
      default:
        question = `Investigation into ${observation}`;
        mystery = `Exploring the parameters surrounding ${observation}.`;
    }

    return {
      curiosityArchetype: archetype,
      observation,
      question,
      mystery,
      realWorldContext,
      whyItMatters: `Solving this enables us to improve stewardship over the related systems and prevent capability degradation.`
    };
  }
}
