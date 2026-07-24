import { VehicleIdentityService } from '../../packages/vehicle-identity/src';
import { RealityAcquisitionLayer, RealityInput, RealitySourceType } from '../../packages/reality-acquisition/src';
import { ReasoningEngine } from '../../packages/reasoning-engine/src';
import { suzukiErtigaGraph } from '../../packages/domain-intelligence/automotive/src/ertiga';

async function runDemonstration() {
  console.log("==============================================");
  console.log("🛠️  AXIONYX AI CAR DOCTOR: GROUND TRUTH DEMONSTRATION");
  console.log("==============================================\n");

  // Step 1: Vehicle Identity
  console.log("[1] Acquiring Vehicle Identity (RC1 Document)...");
  const identityService = new VehicleIdentityService();
  const vin = "MA3BNC22S00584767"; // Real Ertiga VIN
  console.log(`    Decoding VIN: ${vin}`);
  
  const digitalTwin = identityService.decodeVin(vin);
  console.log(`    SUCCESS: Generated Digital Twin.`);
  console.log(`    -> Registration: ${digitalTwin.identity.registration} (${digitalTwin.identity.registrationAuthority})`);
  console.log(`    -> Identity: ${digitalTwin.identity.year} ${digitalTwin.identity.make} ${digitalTwin.identity.model} (${digitalTwin.identity.trim})`);
  console.log(`    -> Engine: ${digitalTwin.identity.engine} (No: ${digitalTwin.identity.engineNumber})\n`);

  // Step 2: Load Domain Graph
  console.log("[2] Loading Domain Graph (Reference Vehicle)...");
  console.log(`    Loaded topology graph: ${digitalTwin.structureGraphId}`);
  console.log(`    -> Graph contains ${suzukiErtigaGraph.entities.length} entities and ${suzukiErtigaGraph.relationships.length} engineering relationships.\n`);

  // Step 3: Reality Acquisition
  console.log("[3] Reality Acquisition (Bolt AI Inspection Data)...");
  const acquisitionLayer = new RealityAcquisitionLayer();
  
  const rawBoltReport: RealityInput = {
    sourceId: 'bolt-inspection-pdf',
    sourceType: RealitySourceType.BOLT_AI_INSPECTION,
    rawPayload: {
      damages: ['Front Passenger Bumper - Small scratch']
    }
  };
  
  console.log(`    Processing Bolt AI PDF...`);
  const observations = acquisitionLayer.processBoltInspectionReport(rawBoltReport);
  
  observations.forEach(observation => {
    console.log(`    OBSERVATION CONFIRMED:`);
    console.log(`    -> Target: ${observation.entityId}`);
    console.log(`    -> Condition: "${observation.condition}"`);
    console.log(`    -> Confidence: ${(observation.confidence * 100).toFixed(1)}%\n`);
  });

  // Step 4: Reasoning Engine (Failure Propagation)
  console.log("[4] Reasoning Engine (Failure Propagation)...");
  const reasoningEngine = new ReasoningEngine(suzukiErtigaGraph);
  
  console.log(`    Traversing dependency graph for downstream impacts...`);
  
  console.log(`\n==============================================`);
  console.log("📋 ENGINEERING INSPECTION REPORT");
  console.log("==============================================\n");
  
  let totalInferences = 0;
  observations.forEach(obs => {
    const inferences = reasoningEngine.evaluateFailurePropagation(obs);
    totalInferences += inferences.length;

    inferences.forEach(inf => {
      const entity = suzukiErtigaGraph.entities.find(e => e.id === inf.entityId);
      // Since it's a "Small scratch", the confidence of internal damage should be very low, but the reasoning engine still evaluates it.
      // We adjust the log to reflect that a small scratch doesn't immediately mean replace radar, but inspecting it is standard.
      console.log(`[!] Target Component : ${entity?.name}`);
      console.log(`    Reasoning        : ${inf.reasoning}`);
      console.log(`    Confidence       : ${(inf.confidence * 100).toFixed(1)}%`);
      console.log(`    Required Action  : ${inf.recommendedAction}\n`);
    });
  });

  if (totalInferences === 0) {
    console.log("No propagating structural failures detected. Cosmetic repair only.\n");
  }

  console.log("End of Workflow.");
}

runDemonstration().catch(console.error);
