// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/learning-engine/examples/demo.ts

import { MaizeInvestigationLCS } from './investigation_001_maize';
import { LearningEngineCompiler } from '../src/compiler';

console.log("===============================================================");
console.log(`AXIONYX LEARNING ENGINE: COMPILING LCS INVESTIGATION`);
console.log(`SOURCE: ${MaizeInvestigationLCS.id} - ${MaizeInvestigationLCS.title}`);
console.log(`DOMAIN: ${MaizeInvestigationLCS.domain}`);
console.log("===============================================================\n");

const compiler = new LearningEngineCompiler();
const outputs = compiler.compile(MaizeInvestigationLCS);

outputs.forEach((output, index) => {
  console.log(`\n>>> EXPORT ${index + 1}: ${output.platform} | Format: ${output.format}`);
  console.log(`---------------------------------------------------------------`);
  console.log(output.content.trim());
  console.log(`---------------------------------------------------------------`);
});
