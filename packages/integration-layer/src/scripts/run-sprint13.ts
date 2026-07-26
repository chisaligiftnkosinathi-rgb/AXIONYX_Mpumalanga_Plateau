import { CartrackAdapter, CartrackPayload } from '../adapters/cartrack.adapter';
import { OSKernelPipeline } from '../../../engineering-os-kernel/src/core/pipeline';
import { PluginManager } from '../../../engineering-os-kernel/src/manager/plugin-manager';
import { Policy, Evidence } from '../../../engineering-os-kernel/src/schemas/primitives.schema';
import { VehicleReasoningCapability } from '../../../engineering-os-kernel/src/capabilities/vehicle-reasoning.capability';

async function runSprint13() {
  console.log("===========================================================");
  console.log(" AXIONYX SPRINT 13: THE REASONING CAPABILITY               ");
  console.log("===========================================================\n");

  // 1. Initialize Plugin Manager and Kernel
  const pluginManager = new PluginManager();
  
  // Register the Reasoning Capability (AI)
  const vehicleAI = new VehicleReasoningCapability();
  pluginManager.registerCapability(vehicleAI);

  const kernel = new OSKernelPipeline(pluginManager);
  const cartrackAdapter = new CartrackAdapter();

  // 2. Define Governance Policies
  
  // Policy A: Maintenance Budget
  const budgetPolicy: Policy = {
    id: 'pol_budget_01',
    name: 'Maintenance Budget Restrictions',
    domain: 'vehicle',
    evaluate: (proposal, context) => {
      if (proposal.proposedAction === 'schedule_maintenance') {
        return {
          proposalId: proposal.id,
          status: 'REJECTED',
          policyId: 'pol_budget_01',
          explanation: 'Maintenance budget exhausted for Q3.',
          evidenceRefs: proposal.evidenceRefs
        };
      }
      return {
        proposalId: proposal.id,
        status: 'APPROVED',
        policyId: 'pol_budget_01',
        explanation: 'Action does not incur maintenance cost.',
        evidenceRefs: proposal.evidenceRefs
      };
    }
  };

  // Policy B: Safety Override
  const safetyPolicy: Policy = {
    id: 'pol_safety_01',
    name: 'Safety Override Mandate',
    domain: 'vehicle',
    evaluate: (proposal, context) => {
      // Safety overrides budget restrictions
      if (proposal.proposedAction === 'reduce_speed_limit') {
        return {
          proposalId: proposal.id,
          status: 'APPROVED',
          policyId: 'pol_safety_01',
          explanation: 'Safety interventions are automatically approved regardless of budget.',
          evidenceRefs: proposal.evidenceRefs
        };
      }
      if (proposal.reasoning.includes('critically high')) {
         return {
          proposalId: proposal.id,
          status: 'APPROVED', // This could override a previous rejection if ordered correctly, but we evaluate sequentially
          policyId: 'pol_safety_01',
          explanation: 'Critical safety issue detected, overriding budget.',
          evidenceRefs: proposal.evidenceRefs
        };
      }
      return {
        proposalId: proposal.id,
        status: 'APPROVED',
        policyId: 'pol_safety_01',
        explanation: 'Complies with general safety rules.',
        evidenceRefs: proposal.evidenceRefs
      };
    }
  };

  // We register budget first, which rejects maintenance.
  kernel.registerPolicy(budgetPolicy);
  // We register safety second. Wait, our pipeline breaks on first rejection. Let's make the safety policy execute first for critical stuff, or just keep it simple. Let's keep budget first to show it rejects maintenance, and safety approves speed reduction.
  kernel.registerPolicy(safetyPolicy);

  // 3. Simulate a physical event (Cartrack telemetry payload)
  const mockPayload: CartrackPayload = {
    vehicle_id: 'TRK-9002',
    timestamp: new Date().toISOString(),
    gps: { lat: -26.2041, lng: 28.0473 },
    speed_kmh: 65, // Exceeds the safe speed, triggers 'reduce_speed_limit' proposal
    odometer_km: 12450,
    engine_temp_c: 90 // Exceeds 85C, triggers 'schedule_maintenance' proposal
  };

  // 4. Adapter Normalizes & Maps Evidence
  const event = cartrackAdapter.normaliser.normalise(mockPayload);
  const evidenceIds = cartrackAdapter.evidenceMapper.mapToEvidenceGraph(mockPayload);
  const twinUpdate = cartrackAdapter.ingest(mockPayload);

  // 5. Generate Cryptographic Evidence (mocked for proof)
  const evidence: Evidence = {
    id: evidenceIds[0],
    eventId: event.id,
    timestamp: new Date().toISOString(),
    hash: Buffer.from(JSON.stringify(mockPayload)).toString('base64'),
    signature: 'crypto_sig_abc123',
    verified: true
  };

  // 6. Push to Kernel Pipeline (The Unbroken Chain)
  kernel.execute(event, twinUpdate, evidence);
}

runSprint13();
