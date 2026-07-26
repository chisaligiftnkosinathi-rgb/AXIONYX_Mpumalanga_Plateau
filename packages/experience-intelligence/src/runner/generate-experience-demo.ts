import * as fs from 'fs';
import * as path from 'path';
import { DemonstrationReplay } from '../demonstration/demonstration-replay';
import { CurriculumEngine } from '../learning/curriculum-engine';
import { ApplicationEngine } from '../application/application-engine';
import { ExperienceTranslator } from '../translation/experience-translator';

async function run() {
  console.log("Starting AXIONYX Experience Intelligence v0.1");
  
  // This engine must run strictly downstream of Environmental Intelligence
  const basePath = path.resolve(__dirname, '../../../../packages/experience/src/demo-data');
  const calibData = JSON.parse(fs.readFileSync(path.join(basePath, 'calibration-record-001.json'), 'utf8'));

  // The Evidence Graph explicitly maps every generated experience to the source reality
  const calibId = calibData.reality_id;

  // 1. Demonstration
  const demo = DemonstrationReplay.generateWaterDemo("WATER-CYCLE-001", "SENSOR-DESIGN-001", calibId);
  console.log(\`\\n[DEMONSTRATION GENERATED]\\nTitle: \${demo.title}\\nScenes: \${demo.scenes.length} (Backed by Evidence Graph)\`);

  // 2. Academy Lesson
  const lesson = CurriculumEngine.generateLesson(calibId);
  console.log(\`\\n[AXIONYX ACADEMY]\\nLesson: \${lesson.title} (\${lesson.difficulty})\\nEvidence Enforced: \${lesson.evidenceReferences.join(', ')}\`);

  // 3. Application Workflow
  const app = ApplicationEngine.generateMunicipalWorkflow(calibId);
  console.log(\`\\n[APPLICATION WORKFLOW]\\nDomain: \${app.domain}\\nActors: \${app.actors.join(', ')}\`);

  // 4. Human Translation
  const translation = ExperienceTranslator.translateCalibration(calibData.offset);
  console.log(\`\\n[HUMAN TRANSLATION]\\n\${translation}\`);

  // Output Artifact
  const outDir = path.resolve(__dirname, '../../../../dist/experience-demo');
  fs.mkdirSync(outDir, { recursive: true });
  
  const outputText = \`AXIONYX EXPERIENCE REPORT\\n\\nDemo: \${demo.title}\\nLesson: \${lesson.title}\\nWorkflow: \${app.domain}\\nTranslation: \${translation}\\n\\nAll experiences mathematically linked to Evidence: \${calibId}\`;
  fs.writeFileSync(path.join(outDir, 'experience-report.txt'), outputText, 'utf8');

  console.log(\`\\nExecution Complete. Artifact written to dist/experience-demo/experience-report.txt\`);
}

run().catch(console.error);
