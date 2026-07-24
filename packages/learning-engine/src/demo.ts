import { KnowledgeCompiler, Investigation } from './compiler';

const compiler = new KnowledgeCompiler();

// A sample Investigation from the Knowledge Graph
const maizeInvestigation: Investigation = {
  id: 'INV-4827',
  title: 'Nitrogen Deficiency in Maize',
  question: 'Why do maize leaves turn yellow?',
  domain: 'Botany & Agriculture',
  graph: {
    nodes: ['Maize', 'Chlorophyll', 'Nitrogen', 'Photosynthesis', 'Soil'],
    edges: ['Nitrogen -> required for -> Chlorophyll', 'Chlorophyll -> required for -> Photosynthesis'],
    standards: ['Agronomy Nitrogen Baseline', 'ISO Soil Testing'],
    capabilities: ['Photosynthesis', 'Growth', 'Yield']
  },
  evidence: [
    { type: 'Visual', description: 'Yellowing of older leaves' },
    { type: 'Soil Test', description: 'Nitrogen level 15 ppm (Constraint: >= 25 ppm)' }
  ]
};

console.log("==========================================");
console.log(`AXIONYX KNOWLEDGE COMPILER: ${maizeInvestigation.title}`);
console.log("==========================================\n");

// Compile the investigation
const compiledAssets = compiler.compile(maizeInvestigation);

compiledAssets.forEach((asset, idx) => {
  console.log(`[OUTPUT ${idx + 1}] Target: ${asset.audience} | Format: ${asset.format} | Type: ${asset.type}`);
  console.log(`------------------------------------------`);
  console.log(`${asset.content}`);
  console.log(`------------------------------------------\n`);
});
