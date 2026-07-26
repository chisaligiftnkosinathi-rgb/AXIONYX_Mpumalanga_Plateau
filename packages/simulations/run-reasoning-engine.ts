import { KnowledgeRuntime } from '../knowledge-graph-engine/src/runtime/index';
import { ReasoningEngine } from '../knowledge-graph-engine/src/runtime/reasoning';
import { PolicyEngine } from '../knowledge-graph-engine/src/runtime/policy';

import { saPack } from '../pack-south-africa/src/index';
import { geographyPack } from '../pack-reference-geography/src/index';
import { statssaPack } from '../pack-statssa/src/index';
import { mpumalangaPack } from '../pack-mpumalanga/src/index';
import { emalahleniPack } from '../pack-emalahleni/src/index';

async function runReasoningSimulation() {
  console.log('===========================================================');
  console.log(' AXIONYX SCIE-ENGINE: NATIONAL REASONING ENGINE (v1.0)');
  console.log(' Evaluating Evidence Dimensions & Policy Governance');
  console.log('===========================================================');
  
  const runtime = new KnowledgeRuntime();
  
  console.log(`\n[1] Installing Knowledge Packs...`);
  runtime.loadPack(saPack);
  runtime.loadPack(geographyPack);
  runtime.loadPack(statssaPack);
  runtime.loadPack(mpumalangaPack);
  runtime.loadPack(emalahleniPack);
  
  console.log(`[2] Compiling Engine...`);
  runtime.compile();
  
  const graph = (runtime as any).graph;
  const reasoningEngine = new ReasoningEngine(graph);
  const policyEngine = new PolicyEngine();

  const claimId = 'ema-claim-good-condition';
  console.log(`\n[3] Evaluating Claim: "${graph.getNode(claimId).name}"`);
  
  // Step 1: Reasoning Engine evaluates the evidence
  const reasoningResult = reasoningEngine.evaluateClaim(claimId);
  
  console.log('\n--- REASONING RESULT ---');
  console.log(`Supporting Evidence Count: ${reasoningResult.supportingEvidence.length}`);
  console.log(`Contradicting Evidence Count: ${reasoningResult.contradictingEvidence.length}`);
  console.log('\nEvidence Dimensions Detected:');
  for (const [dim, types] of Object.entries(reasoningResult.evidenceDimensions)) {
    console.log(`  - ${dim}: ${types.join(', ')}`);
  }
  
  console.log('\nRule Evaluations:');
  reasoningResult.ruleEvaluations.forEach(r => console.log(`  - ${r}`));
  
  console.log(`\nExplanation:\n  ${reasoningResult.explanation}`);
  
  // Step 2: Policy Engine recommends governance action
  console.log('\n[4] Requesting Governance Policy Decision...');
  const policyResult = policyEngine.evaluateAssessment(reasoningResult);
  
  console.log('\n--- POLICY DECISION ---');
  console.log(`Rationale:\n  ${policyResult.policyRationale}`);
  console.log(`Recommended Actions:`);
  policyResult.recommendedActions.forEach(action => console.log(`  -> ${action}`));

  console.log('\n===========================================================');
  console.log(' SIMULATION COMPLETE');
  console.log('===========================================================');
}

runReasoningSimulation().catch(console.error);
