import * as fs from 'fs';
import * as path from 'path';
import { ProgressEngine } from '../intelligence/progress-engine';
import { RiskEngine } from '../intelligence/risk-engine';
import { ArchitectureRecord } from '../governance/architecture-record';
import { DecisionLog } from '../governance/decision-log';
import { StatusExplainer } from '../translation/status-explainer';

async function run() {
  console.log("Starting AXIONYX Engineering Intelligence v0.1");
  
  const realityPath = path.resolve(__dirname, '../../../../packages/experience/src/demo-data/engineering-project-001.json');
  const dataset = JSON.parse(fs.readFileSync(realityPath, 'utf8'));

  console.log(\`\\nProcessing Reality ID: \${dataset.reality_id} (\${dataset.project.name})\`);

  // 1. Intelligence
  const progress = ProgressEngine.evaluateProgress(dataset);
  const risks = RiskEngine.evaluateRisks(dataset);
  
  // 2. Governance
  const adrs = ArchitectureRecord.extractADRs(dataset.events);
  const learnings = DecisionLog.extractLearnings(dataset.events);

  // 3. Explanation
  const explanation = StatusExplainer.explain(progress, risks, adrs);
  
  console.log(\`\\n[EXPLANATION]\\n\${explanation}\`);
  console.log(\`\\n[LEARNING EVENTS]\`);
  learnings.forEach(l => {
    console.log(\`- Observation: \${l.observation}\\n  Impact: \${l.impact}\`);
  });

  // Output Artifact
  const outDir = path.resolve(__dirname, '../../../../dist/engineering-demo');
  fs.mkdirSync(outDir, { recursive: true });
  
  const outputText = \`AXIONYX GENERATED ASSET\\n\\nSource Reality: \${dataset.reality_id}\\n\\n\${explanation}\\n\\nLearnings Extracted: \${learnings.length}\\nADRs Recorded: \${adrs.length}\`;
  fs.writeFileSync(path.join(outDir, 'engineering-report.txt'), outputText, 'utf8');

  console.log(\`\\nExecution Complete. Artifact written to dist/engineering-demo/engineering-report.txt\`);
}

run().catch(console.error);
