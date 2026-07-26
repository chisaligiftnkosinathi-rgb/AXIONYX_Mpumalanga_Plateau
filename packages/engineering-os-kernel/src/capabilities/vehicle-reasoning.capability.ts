import { ReasoningCapability, StewardshipContext, InterventionProposal } from '../schemas/primitives.schema';

export class VehicleReasoningCapability implements ReasoningCapability {
  id = 'cap_vehicle_reasoning_01';
  name = 'Vehicle Telemetry & Diagnostics AI';

  supports(domain: string): boolean {
    return domain === 'vehicle';
  }

  propose(context: StewardshipContext): InterventionProposal[] {
    const proposals: InterventionProposal[] = [];
    
    // Read ONLY from the provided canonical context
    const speed = context.state.metrics?.speed || 0;
    const temp = context.state.metrics?.temperature || 0;

    // Simulate AI identifying an issue based solely on evidence
    if (temp > 85) {
      const hashData = JSON.stringify({ assetId: context.assetId, temp, timestamp: context.timestamp });
      
      proposals.push({
        id: `prop_${Date.now()}_temp`,
        capabilityId: this.id,
        assetId: context.assetId,
        proposedAction: 'schedule_maintenance',
        confidence: 0.92,
        reasoning: `Engine temperature is critically high (${temp}°C). Expected range <85°C. Immediate maintenance required to prevent failure.`,
        evidenceRefs: context.evidence.map(e => e.id),
        createdAt: new Date().toISOString(),
        hash: `prop_hash_${Buffer.from(hashData).toString('base64').substring(0, 10)}`
      });
    }

    if (speed > 60) {
      const hashData = JSON.stringify({ assetId: context.assetId, speed, timestamp: context.timestamp });
      
      proposals.push({
        id: `prop_${Date.now()}_speed`,
        capabilityId: this.id,
        assetId: context.assetId,
        proposedAction: 'reduce_speed_limit',
        confidence: 0.99,
        reasoning: `Vehicle is operating at unsafe speed (${speed} km/h). Recommend remote speed limit enforcement.`,
        evidenceRefs: context.evidence.map(e => e.id),
        createdAt: new Date().toISOString(),
        hash: `prop_hash_${Buffer.from(hashData).toString('base64').substring(0, 10)}`
      });
    }

    return proposals;
  }
}
