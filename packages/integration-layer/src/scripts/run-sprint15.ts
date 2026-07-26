import { Asset, Reflection } from '../../../engineering-os-kernel/src/schemas/primitives.schema';
import { OSKernelPipeline } from '../../../engineering-os-kernel/src/core/pipeline';
import { PluginManager } from '../../../engineering-os-kernel/src/manager/plugin-manager';
import { VehicleTeacherCapability } from '../../../engineering-os-kernel/src/capabilities/vehicle-teacher.capability';

async function runSprint15() {
  console.log("===========================================================");
  console.log(" AXIONYX SPRINT 15: THE SCIENTIFIC ENGINE                  ");
  console.log("===========================================================\n");

  // 1. Initialize Plugin Manager and Kernel
  const pluginManager = new PluginManager();
  
  // Register the Teacher Capability (AI Scientist)
  const vehicleTeacher = new VehicleTeacherCapability();
  pluginManager.registerTeacherCapability(vehicleTeacher);

  const kernel = new OSKernelPipeline(pluginManager);

  // 2. Setup Context
  const twinState: Asset = {
    id: 'asset_vehicle_TRK-9002',
    domain: 'vehicle',
    state: { status: 'operating', lastUpdated: new Date().toISOString() },
    capabilities: [],
    evidenceGraph: [],
    metadata: {}
  };

  // 3. Mock a History of Reflections (Accumulated Wisdom)
  const historicalReflections: Reflection[] = [
    {
      id: 'refl_1',
      outcomeId: 'out_1',
      timestamp: new Date(Date.now() - 86400000 * 3).toISOString(), // 3 days ago
      evaluation: {
        intent: 'Speed reduction achieved temperature stabilization.',
        efficiency: 'High', safety: 'High', stewardship: 'Good'
      },
      recommendedPolicyUpdates: []
    },
    {
      id: 'refl_2',
      outcomeId: 'out_2',
      timestamp: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
      evaluation: {
        intent: 'Speed reduction failed to normalize temperature due to steep gradient load.',
        efficiency: 'Medium', safety: 'High', stewardship: 'Acceptable'
      },
      recommendedPolicyUpdates: []
    },
    {
      id: 'refl_3',
      outcomeId: 'out_3',
      timestamp: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
      evaluation: {
        intent: 'Speed reduction prevented thermal failure but payload load required manual intervention.',
        efficiency: 'Medium', safety: 'High', stewardship: 'Good'
      },
      recommendedPolicyUpdates: []
    }
  ];

  // 4. Execute the Scientific Synthesis
  kernel.synthesizeKnowledge(historicalReflections, twinState);
}

runSprint15();
