import * as fs from 'fs';
import * as path from 'path';
import { StandardsTranslator } from '../standards/standards-translator';
import { DesignRecord } from '../design/design-record';
import { VerificationEngine } from '../verification/verification-engine';
import { ComplianceChecker } from '../verification/compliance-checker';

async function run() {
  console.log("Starting AXIONYX Industrial Equipment Intelligence v0.1");
  
  const realityPath = path.resolve(__dirname, '../../../../packages/experience/src/demo-data/coal-equipment-001.json');
  const dataset = JSON.parse(fs.readFileSync(realityPath, 'utf8'));

  console.log(\`\\nProcessing Reality ID: \${dataset.reality_id} (\${dataset.equipment.name})\`);

  // 1. Standards Translation
  const isoRequirement = dataset.standard_requirements[0];
  const translatedRequirements = StandardsTranslator.translate(isoRequirement);
  
  console.log(\`\\n[STANDARDS TRANSLATION]\\nTranslated \${isoRequirement.standard} into \${translatedRequirements.length} engineering requirements.\`);

  // 2. Design Governance
  const ddrs = DesignRecord.extractDDRs(dataset.design_events);
  console.log(\`\\n[DESIGN RECORDS]\\nExtracted \${ddrs.length} Design Decision Records.\`);

  // 3. Verification Engine
  const temperatureVerification = VerificationEngine.verify(dataset, 'Temperature control', 'thermal_stability');

  // 4. Compliance Report
  const report = ComplianceChecker.generateComplianceReport(isoRequirement.standard, [temperatureVerification]);
  
  console.log(\`\\n[COMPLIANCE CHECKER]\\n\${report}\`);

  // Output Artifact
  const outDir = path.resolve(__dirname, '../../../../dist/equipment-demo');
  fs.mkdirSync(outDir, { recursive: true });
  
  const outputText = \`AXIONYX GENERATED ASSET\\n\\nSource Reality: \${dataset.reality_id}\\n\\n\${report}\\n\\nDDRs Recorded: \${ddrs.length}\`;
  fs.writeFileSync(path.join(outDir, 'equipment-report.txt'), outputText, 'utf8');

  console.log(\`\\nExecution Complete. Artifact written to dist/equipment-demo/equipment-report.txt\`);
}

run().catch(console.error);
