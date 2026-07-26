import { KnowledgeRuntime } from '../knowledge-graph-engine/src/runtime/index';
import { TrustEngine } from '../knowledge-graph-engine/src/runtime/trust';
import { GovernanceEngine } from '../knowledge-graph-engine/src/runtime/governance';

import { saPack } from '../pack-south-africa/src/index';
import { geographyPack } from '../pack-reference-geography/src/index';
import { statssaPack } from '../pack-statssa/src/index';
import { mpumalangaPack } from '../pack-mpumalanga/src/index';
import { emalahleniPack } from '../pack-emalahleni/src/index';

async function runGovernanceSimulation() {
  console.log('===========================================================');
  console.log(' AXIONYX SCIE-ENGINE: DEMOCRATIC GOVERNANCE ENGINE (v1.0)');
  console.log(' Evaluating Pluggable Trust & Public Consultation');
  console.log('===========================================================');
  
  const runtime = new KnowledgeRuntime();
  runtime.loadPack(saPack);
  runtime.loadPack(geographyPack);
  runtime.loadPack(statssaPack);
  runtime.loadPack(mpumalangaPack);
  runtime.loadPack(emalahleniPack);
  runtime.compile();
  
  const baseGraph = (runtime as any).graph;
  
  const trustEngine = new TrustEngine(baseGraph);
  const governanceEngine = new GovernanceEngine(baseGraph, trustEngine);

  console.log('\n[1] Creating Policy Options from Scenarios...');
  
  // Mock forecast results derived from Phase 10 Scenario Engine
  const forecastA = { scenarioId: 'SCENARIO-BUDGET-UP-15', indicatorId: 'mpu-indicator-road-quality', expectedValue: 92, range: [90, 95] as [number, number], confidence: 0.85, assumptions: [], evidenceSources: 12 };
  const forecastB = { scenarioId: 'SCENARIO-BUDGET-CUT-20', indicatorId: 'mpu-indicator-road-quality', expectedValue: 82, range: [79, 85] as [number, number], confidence: 0.87, assumptions: [], evidenceSources: 17 };
  
  const optionA = governanceEngine.createPolicyOption(forecastA, 'Option A: Increase Budget by 15%');
  const optionB = governanceEngine.createPolicyOption(forecastB, 'Option B: Decrease Budget by 20%');

  console.log(`  -> Created ${optionA}`);
  console.log(`  -> Created ${optionB}`);

  console.log('\n[2] Opening Public Consultation...');
  const consultationId = governanceEngine.openConsultation('eMalahleni Road Budget Consultation', [optionA, optionB]);
  console.log(`  -> Consultation ${consultationId} is OPEN`);

  console.log('\n[3] Authenticating Actors & Recording Submissions...');
  
  // Citizen Alice
  const aliceId = 'actor-citizen-1';
  console.log(`  -> Authenticating ${aliceId}...`);
  const aliceAuth = trustEngine.authenticate(aliceId, 'national-id');
  if (aliceAuth.isAuthenticated) {
    console.log(`     Verified! Linked Credential: ${aliceAuth.credentialIds.join(', ')}`);
    governanceEngine.recordSubmission(aliceId, consultationId, optionA, 'vote', 'I support Option A. We need better roads.');
    console.log(`     Recorded Submission supporting Option A.`);
  }

  // Citizen Bob
  const bobId = 'actor-citizen-2';
  console.log(`  -> Authenticating ${bobId}...`);
  const bobAuth = trustEngine.authenticate(bobId, 'national-id');
  if (bobAuth.isAuthenticated) {
    console.log(`     Verified! Linked Credential: ${bobAuth.credentialIds.join(', ')}`);
    governanceEngine.recordSubmission(bobId, consultationId, optionB, 'evidence', 'I support Option B to reduce rates. See attached property tax evidence.');
    console.log(`     Recorded Submission supporting Option B.`);
  }

  console.log('\n[4] Evaluating Consultation & Generating Resolution...');
  const resolutionResult = governanceEngine.evaluateConsultationAndResolve(consultationId);

  console.log('\n--- DEMOCRATIC RESOLUTION ---');
  console.log(`Resolution Node: ${resolutionResult.resolutionId}`);
  console.log(`Total Verified Submissions: ${resolutionResult.totalSubmissions}`);
  console.log(`Tally:`);
  for (const [optId, votes] of Object.entries(resolutionResult.tally)) {
    console.log(`  - ${optId}: ${votes} submission(s)`);
  }
  console.log(`\nOFFICIALLY ADOPTED: ${resolutionResult.winningOption}`);

  console.log('\n===========================================================');
  console.log(' GOVERNANCE SIMULATION COMPLETE');
  console.log('===========================================================');
}

runGovernanceSimulation().catch(console.error);
