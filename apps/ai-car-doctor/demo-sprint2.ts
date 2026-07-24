import { VehicleIdentityService } from '../../packages/vehicle-identity/src';
import { suzukiErtigaGraph } from '../../packages/domain-intelligence/automotive/src/ertiga';
import { 
  RealityAcquisitionEngine, 
  ObservationEngine, 
  EvidenceEngine, 
  RuleEngine, 
  ReasoningEngine, 
  DecisionEngine, 
  ExplanationEngine 
} from './engines';

async function runSprint2Demonstration() {
  console.log("==============================================");
  console.log("🛠️  AXIONYX SPRINT 2: 8-ENGINE PROVENANCE DEMO");
  console.log("==============================================\n");

  // A. Vehicle Identity
  const identityService = new VehicleIdentityService();
  const digitalTwin = identityService.decodeVin("MA3BNC22S00584767");
  console.log(`[+] Identity Initialized: ${digitalTwin.identity.year} ${digitalTwin.identity.manufacturer} ${digitalTwin.identity.model}`);

  // 1. Reality Acquisition
  const realityEngine = new RealityAcquisitionEngine();
  const rawData = realityEngine.captureInputs([{ targetId: 'comp-bumper-cover', condition: 'Small scratch on front passenger side' }]);

  // 2. Observation Engine
  const obsEngine = new ObservationEngine();
  const observations = obsEngine.extractObservations(rawData);

  // 3. Evidence Engine
  const evidenceEngine = new EvidenceEngine();
  const evidenceList = evidenceEngine.convertToEvidence(observations);

  // 4. Rule Engine
  const ruleEngine = new RuleEngine();
  const rules = evidenceList.map(ev => ruleEngine.evaluatePhysicalRules(ev));

  // 5. Reasoning Engine
  const reasoningEngine = new ReasoningEngine(suzukiErtigaGraph);
  const hypotheses = reasoningEngine.generateHypotheses(evidenceList, rules);

  // 6. Decision Engine
  const decisionEngine = new DecisionEngine();
  const decisions = decisionEngine.evaluateDecisions(hypotheses);

  // 7. Explanation Engine
  const explanationEngine = new ExplanationEngine();
  const finalReport = explanationEngine.generateReport(evidenceList, decisions);

  console.log(finalReport);
  console.log("End of 8-Engine Workflow.");
}

runSprint2Demonstration().catch(console.error);
