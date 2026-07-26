import { ResearcherCapability, Claim, Evidence, Contradiction, ResearchProposal } from '../schemas/primitives.schema';

export class BatteryResearcherCapability implements ResearcherCapability {
  id = 'cap_battery_researcher_01';
  name = 'Battery Degradation Researcher AI';

  supports(domain: string): boolean {
    return domain === 'battery';
  }

  auditKnowledge(claims: Claim[], evidence: Evidence[]): { contradictions: Contradiction[], proposals: ResearchProposal[] } {
    const contradictions: Contradiction[] = [];
    const proposals: ResearchProposal[] = [];

    // Simulate AI parsing claims for contradictions
    const heatClaim = claims.find(c => c.statement.includes('heat') || c.statement.includes('Temperature'));
    const chargingClaim = claims.find(c => c.statement.includes('charging rate') || c.statement.includes('C-rate'));

    if (heatClaim && chargingClaim) {
      const contradictionId = `contra_${Date.now()}`;
      contradictions.push({
        id: contradictionId,
        claimAId: heatClaim.id,
        claimBId: chargingClaim.id,
        reason: 'Claim A attributes degradation primarily to temperature, while Claim B attributes it primarily to fast charging rates. These variables are often conflated because fast charging generates heat.',
        supportingEvidenceA: heatClaim.evidenceRefs,
        supportingEvidenceB: chargingClaim.evidenceRefs,
        confidence: 0.95
      });

      proposals.push({
        id: `prop_${Date.now()}`,
        targetContradictionId: contradictionId,
        proposedExperiment: 'Conduct isolated charge cycle tests. Group 1: 1C charge rate at 40°C. Group 2: 3C charge rate at actively cooled 20°C. Group 3: 1C charge rate at 20°C (Control).',
        expectedOutcomes: [
          'If Group 1 degrades fastest, ambient heat is the primary driver.',
          'If Group 2 degrades fastest, C-rate is the primary driver regardless of bulk temperature.',
          'If both degrade similarly, both claims are valid but incomplete, suggesting a synergistic degradation model.'
        ],
        justification: 'Current literature conflates the Joule heating of fast charging with ambient environmental heat. We must decouple the variables.'
      });
    }

    return { contradictions, proposals };
  }
}
