import * as fs from 'fs';
import * as path from 'path';
import { Article } from '../schemas/article.schema';
import { ArticleGenerator } from '../generation/article-generator';
import { AudienceTranslator } from '../translation/audience-translator';

const publications: Article[] = [
  {
    id: "pub-001",
    type: "vision",
    title: "What Is AXIONYX? The Translation Engine Vision",
    author: "Founder",
    publishDate: "2026-07-24",
    sections: [
      { heading: "The Problem", content: "Industry generates massive amounts of data, but data is not automatically truth." },
      { heading: "The AXIONYX Engine", content: "We translate Reality -> Evidence -> Knowledge -> Trust -> Action." }
    ],
    evidenceCitations: []
  },
  {
    id: "pub-006",
    type: "research",
    title: "Why Calibration Creates Trust in IoT Sensors",
    author: "Engineering Team",
    publishDate: "2026-07-25",
    sections: [
      { heading: "Sensor Data is Not Truth", content: "A raw pH reading of 7.35 is meaningless without proof of accuracy." },
      { heading: "Audience Perspectives", content: 
        \`Engineer: \${AudienceTranslator.translateCalibrationEvidence('engineer', -0.05)}\\n\` + 
        \`Student: \${AudienceTranslator.translateCalibrationEvidence('student', -0.05)}\\n\` + 
        \`Executive: \${AudienceTranslator.translateCalibrationEvidence('executive', -0.05)}\`
      }
    ],
    evidenceCitations: ["CALIBRATION-RECORD-001", "IOT-SENSOR-DESIGN-001"]
  },
  {
    id: "pub-007",
    type: "build-log",
    title: "Building the AXIONYX Coal Intelligence Engine",
    author: "Engineering Team",
    publishDate: "2026-07-26",
    sections: [
      { heading: "Problem", content: "Translating physical coal samples into ISO compliant test results." },
      { heading: "Evidence Produced", content: "Automated extraction of ADR-001 through physical evidence payloads." }
    ],
    evidenceCitations: ["COAL-SAMPLE-001"]
  }
];

async function run() {
  console.log("Starting AXIONYX Knowledge Publication Engine...");
  
  const outDir = path.resolve(__dirname, '../../../../dist/publications');
  fs.mkdirSync(outDir, { recursive: true });

  for (const article of publications) {
    const md = ArticleGenerator.toMarkdown(article);
    const filename = \`\${article.id}.md\`;
    fs.writeFileSync(path.join(outDir, filename), md, 'utf8');
    console.log(\`Generated Publication: \${filename} [\${article.title}]\`);
  }

  console.log(\`\\nExecution Complete. \${publications.length} articles written to dist/publications/\`);
}

run().catch(console.error);
