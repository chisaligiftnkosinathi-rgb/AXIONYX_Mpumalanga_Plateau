export interface CommunicationSignal {
  id: string;
  source: 'WHATSAPP' | 'SYSTEM' | 'SENSOR';
  content: string; // e.g., "Imported sensors failing in mines."
  urgency: number;
}

export interface CapabilityNode {
  id: string;
  type: 'RESOURCE' | 'CAPABILITY' | 'EVIDENCE';
  stage: number;
  tags: string[]; // e.g., ['electronics', 'manufacturing']
}

export class ImpandePollinationEngine {
  
  /**
   * The Opportunity Ledger: Translates raw communication into an Industrial Opportunity
   */
  public generateOpportunity(signal: CommunicationSignal) {
    // Basic NLP mock to extract intent
    if (signal.content.includes('failing') && signal.content.includes('sensors')) {
      return {
        id: `OPP-${Date.now()}`,
        derivedNeed: 'Industrial Sensor Manufacturing & Maintenance',
        capabilityGaps: ['Electronics Engineering', 'Instrumentation Technician', 'Quality Lab'],
        demandScore: 0.95 // High demand based on failure signal
      };
    }
    return null;
  }

  /**
   * The Central Bank Coordination Layer:
   * Matches the Opportunity Ledger against the Resource, Capability, and Evidence Ledgers.
   */
  public coordinateCapital(opportunity: any, ecosystemNodes: CapabilityNode[]) {
    const requiredTags = opportunity.capabilityGaps.map((g: string) => g.toLowerCase());
    
    // Search the Genome Map for Stage 3+ nodes that match the gap
    const matchedNodes = ecosystemNodes.filter(node => 
      node.stage >= 3 && 
      node.tags.some(tag => requiredTags.some(rt => rt.includes(tag)))
    );

    if (matchedNodes.length >= 2) {
      return {
        status: 'READY_FOR_CAPITAL',
        action: 'PROPOSE_MERGER',
        nodesToConnect: matchedNodes.map(n => n.id),
        capitalRule: 'Capital follows evidence. Evidence follows action. Action follows need. Deploy Sunlight.'
      };
    }

    return {
      status: 'AWAITING_CAPABILITY',
      action: 'MONITOR_SOIL',
      reason: 'Need identified, but Stage 3 capabilities are missing. Wait for seeds to germinate.'
    };
  }
}
