import * as fs from 'fs';
import * as path from 'path';
import { DiagnosisEngine } from '../diagnosis/diagnosis-engine';
import { ExplanationEngine } from '../explanation/explanation-engine';
import { ServiceMatcher } from '../service/service-matcher';

async function run() {
  console.log("Starting AXIONYX Vehicle Intelligence (AI Car Doctor) v0.1");
  
  const realityPath = path.resolve(__dirname, '../../../../packages/experience/src/demo-data/vehicle-sample-001.json');
  const dataset = JSON.parse(fs.readFileSync(realityPath, 'utf8'));

  console.log(`\nProcessing Reality ID: ${dataset.reality_id} (${dataset.identity.manufacturer} ${dataset.identity.model})`);

  // 1. Diagnosis
  const diagnosis = DiagnosisEngine.diagnose(dataset);
  console.log(`\n[DIAGNOSIS] Observation: ${diagnosis.observation}`);
  console.log(`[DIAGNOSIS] Confidence: ${diagnosis.confidence}`);

  // 2. Explanation
  const explanation = ExplanationEngine.explain(diagnosis);
  console.log(`\n[EXPLANATION]\n${explanation}`);

  // 3. Service Match (Opportunity Layer)
  const serviceOpportunity = ServiceMatcher.findOpportunity(diagnosis.possible_causes[0] || "");
  console.log(`\n[OPPORTUNITY] Customer Need: ${serviceOpportunity.customer_need}`);
  console.log(`[OPPORTUNITY] Provider: ${serviceOpportunity.matched_provider}`);
  console.log(`[OPPORTUNITY] Reason: ${serviceOpportunity.reason}`);

  // Output Artifact
  const outDir = path.resolve(__dirname, '../../../../dist/vehicle-demo');
  fs.mkdirSync(outDir, { recursive: true });
  
  const outputText = `AXIONYX GENERATED ASSET\n\nSource Reality: ${dataset.reality_id}\n\n${explanation}\n\nOpportunity Created:\nProvider: ${serviceOpportunity.matched_provider}`;
  fs.writeFileSync(path.join(outDir, 'diagnosis-report.txt'), outputText, 'utf8');

  console.log(`\nExecution Complete. Artifact written to dist/vehicle-demo/diagnosis-report.txt`);
}

run().catch(console.error);
