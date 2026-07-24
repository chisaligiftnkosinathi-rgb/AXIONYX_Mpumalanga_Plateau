import { VehicleIdentityService } from '../../packages/vehicle-identity/src';
import { 
  VerificationEngine, 
  RealityFeedbackEngine, 
  KnowledgeEvolutionEngine, 
  KnowledgeGovernanceEngine,
  CaseIntelligenceEngine,
  Prediction
} from './phase5';

async function runPhase5Demonstration() {
  console.log("==============================================");
  console.log("🔬 AXIONYX PHASE 5: THE SCIENTIFIC LOOP");
  console.log("==============================================\n");

  const identityService = new VehicleIdentityService();
  const digitalTwin = identityService.decodeVin("MA3BNC22S00584767");
  console.log(`[+] Loaded Vehicle: ${digitalTwin.identity.year} ${digitalTwin.identity.manufacturer} ${digitalTwin.identity.model}`);

  // From Sprint 2, the Reasoning Engine output this prediction:
  const prediction: Prediction = {
    targetId: 'comp-front-radar',
    expectedState: 'UNDAMAGED', // NO_ACTION_REQUIRED
    confidence: {
      observationQuality: 0.95,
      evidenceAuthenticity: 'VERIFIED',
      ruleCoverage: 'COMPLETE',
      historicalSimilarity: 0.94,
      overallEngineeringConfidence: 0.96
    }
  };

  console.log(`\n[PREDICTION] Target: ${prediction.targetId} | Expected: ${prediction.expectedState} | Confidence: ${prediction.confidence.overallEngineeringConfidence * 100}%`);

  // 1. Verification Engine
  console.log(`\n[1] Verification Engine running in Workshop...`);
  const mechanicFound = 'BENT_BRACKET';
  console.log(`    Mechanic removes bumper. Actual State: ${mechanicFound}`);
  
  const verificationEngine = new VerificationEngine();
  const outcome = verificationEngine.verify(prediction, mechanicFound, 'MECH-GIFT-01');

  // 2. Reality Feedback Engine
  console.log(`\n[2] Reality Feedback Engine analyzing variance...`);
  const feedbackEngine = new RealityFeedbackEngine();
  const hasVariance = feedbackEngine.analyzeVariance(prediction, outcome);
  
  if (hasVariance) {
    console.log(`    [!] VARIANCE DETECTED: Prediction failed reality test.`);
  }

  // 3. Knowledge Evolution Engine
  console.log(`\n[3] Knowledge Evolution Engine generating proposal...`);
  const evolutionEngine = new KnowledgeEvolutionEngine();
  const proposal = evolutionEngine.generateProposal(prediction, outcome);
  console.log(`    Proposal ID: ${proposal.id}`);
  console.log(`    Variance   : ${proposal.varianceDetected}`);
  console.log(`    Action     : ${proposal.proposedRuleChange}`);
  console.log(`    Status     : ${proposal.status}`);

  // 4. Knowledge Governance Engine
  console.log(`\n[4] Knowledge Governance Engine (Human Review)...`);
  const governanceEngine = new KnowledgeGovernanceEngine();
  console.log(`    Human Engineer (Chief Tech) reviews the proposal and OEM physics data...`);
  governanceEngine.reviewProposal(proposal, 'APPROVE');
  console.log(`    Decision: ${proposal.status}. Engineering Model v1.1 published.`);

  // 5. Case Intelligence Engine
  console.log(`\n[5] Case Intelligence Engine archiving case...`);
  const caseEngine = new CaseIntelligenceEngine();
  const archivedCase = caseEngine.archiveCase({ prediction, outcome, variance: hasVariance, proposal });
  console.log(`    Case archived globally. Lesson: ${archivedCase.lessonsLearned}`);

  console.log("\nEnd of Scientific Loop.");
}

runPhase5Demonstration().catch(console.error);
