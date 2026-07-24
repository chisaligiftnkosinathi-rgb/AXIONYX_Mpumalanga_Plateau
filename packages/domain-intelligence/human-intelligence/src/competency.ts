// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/domain-intelligence/human-intelligence/src/competency.ts

export interface Actor {
  id: string;
  name: string;
  role: string;
  competencies: Competency[];
}

export interface Competency {
  id: string;
  domain: string;
  level: 'Exposure' | 'Curiosity' | 'Observation' | 'Understanding' | 'Practice' | 'Competency' | 'Mastery' | 'Contribution' | 'Stewardship';
  capabilitiesUnlocked: string[];
}

export interface CapabilityRequirement {
  capability: string;
  minimumCompetencyLevel: string;
}

export class CompetencyIntelligence {
  /**
   * Evaluates if an Actor has the required Competency to fulfill a Capability constraint.
   */
  public evaluatePermission(actor: Actor, requiredCapability: string): boolean {
    const relevantCompetency = actor.competencies.find(c => 
      c.capabilitiesUnlocked.includes(requiredCapability)
    );

    if (!relevantCompetency) return false;

    const allowedLevels = ['Competency', 'Mastery', 'Contribution', 'Stewardship'];
    return allowedLevels.includes(relevantCompetency.level);
  }
}
