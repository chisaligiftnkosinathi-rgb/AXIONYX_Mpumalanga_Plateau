export interface TransformationLink {
  fromNodeId: string;
  toNodeId: string;
  evidenceProvided: boolean; // Does this link contain truthful evidence of transformation?
}

export interface CapabilityChain {
  chainId: string;
  resources: number; // 0.0 to 1.0
  capability: number; // 0.0 to 1.0
  learning: number; // 0.0 to 1.0
  links: TransformationLink[];
}

export class TraceabilityGraphEngine {
  
  /**
   * Calculates the Traceability Factor (T) based on broken links (Half-Truths).
   */
  private calculateTraceability(links: TransformationLink[]): number {
    if (links.length === 0) return 0;
    const verifiedLinks = links.filter(l => l.evidenceProvided).length;
    return verifiedLinks / links.length;
  }

  /**
   * Calculates System Integrity = R × C × T × L
   */
  public calculateSystemIntegrity(chain: CapabilityChain): number {
    const traceability = this.calculateTraceability(chain.links);
    return chain.resources * chain.capability * traceability * chain.learning;
  }

  /**
   * Diagnoses the nervous system of the supply chain.
   */
  public diagnoseGraph(chain: CapabilityChain) {
    const traceability = this.calculateTraceability(chain.links);
    const integrity = this.calculateSystemIntegrity(chain);

    const brokenLinks = chain.links.filter(l => !l.evidenceProvided);

    if (brokenLinks.length > 0) {
      return {
        integrity,
        traceability,
        status: 'FRAGMENTED_REALITY',
        diagnosis: `Defect found. Traceability broken at ${brokenLinks.length} links. Blame moves randomly because nobody possesses the whole truth.`,
        intervention: 'Restore evidence continuity at broken links to isolate true root cause.'
      };
    }

    return {
      integrity,
      traceability,
      status: 'COHERENT_SYSTEM',
      diagnosis: 'Full information continuity. Raw Material → Product → Customer → Learning is unbroken.',
      intervention: 'Trust verified. Capability chain can safely scale.'
    };
  }
}
