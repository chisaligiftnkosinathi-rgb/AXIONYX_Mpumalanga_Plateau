import { Asset, Intervention, Outcome } from '../../../engineering-os-kernel/src/schemas/primitives.schema';
import { OSKernelPipeline } from '../../../engineering-os-kernel/src/core/pipeline';
import { PluginManager } from '../../../engineering-os-kernel/src/manager/plugin-manager';
import { VehicleReflectionCapability } from '../../../engineering-os-kernel/src/capabilities/vehicle-reflection.capability';

async function runSprint14() {
  console.log("===========================================================");
  console.log(" AXIONYX SPRINT 14: THE STEWARDSHIP MEMORY ENGINE          ");
  console.log("===========================================================\n");

  // 1. Initialize Plugin Manager and Kernel
  const pluginManager = new PluginManager();
  
  // Register the Reflection Capability (AI Memory)
  const vehicleReflection = new VehicleReflectionCapability();
  pluginManager.registerReflectionCapability(vehicleReflection);

  const kernel = new OSKernelPipeline(pluginManager);

  // 2. Setup Context from Time T0 (Sprint 13 History)
  const twinState: Asset = {
    id: 'asset_vehicle_TRK-9002',
    domain: 'vehicle',
    state: {
      status: 'operating',
      lastUpdated: new Date().toISOString(),
      metrics: {
        speed: 50, // Speed has normalized
        temperature: 82 // Temp has normalized
      }
    },
    capabilities: [],
    evidenceGraph: [],
    metadata: {}
  };

  const pastIntervention: Intervention = {
    id: 'int_1784901443907_123',
    decisionId: 'dec_1784901443906_abc',
    timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    action: 'reduce_speed_limit',
    status: 'executed'
  };

  // 3. Time T+1: Observation -> Outcome
  console.log(`[Time T+1] Evaluating consequences of past intervention...`);
  const semanticOutcome: Outcome = {
    id: `out_${Date.now()}`,
    interventionId: pastIntervention.id,
    timestamp: new Date().toISOString(),
    semanticResult: 'Engine temperature returned to operating range (82°C) after speed reduction to 50km/h.',
    evidenceRefs: ['evd_telemetry_t1']
  };

  // 4. Execute the Memory Loop (Reflection)
  kernel.evaluateOutcome(pastIntervention, semanticOutcome, twinState);
}

runSprint14();
