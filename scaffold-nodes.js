const fs = require('fs');
const path = require('path');

const nodes = [
  { id: 'chappies', name: 'Chappies Curiosity Gateway', category: 'curiosity', purpose: 'Human curiosity structured opportunity' },
  { id: 'madcars', name: 'MadCars Mobility Intelligence', category: 'mobility', purpose: 'Transform vehicle buying from searching into understanding' },
  { id: 'chess-academy', name: 'Gift\'s Hub Chess Academy', category: 'education', purpose: 'Develop strategic thinking' },
  { id: 'curio', name: 'Curio Education Engine', category: 'education', purpose: 'Make curiosity the entry point into learning' },
  { id: 'materials', name: 'Material Science Intelligence', category: 'science', purpose: 'Connect industry demand with scientific capability' },
  { id: 'research-studio', name: 'Research Studio', category: 'research', purpose: 'A laboratory for human ideas' },
  { id: 'labs', name: 'Laboratory Network', category: 'science', purpose: 'Laboratory discovery and testing requirements' },
  { id: 'industry', name: 'Industrial Intelligence Node', category: 'industry', purpose: 'Mining, manufacturing, energy intelligence' },
  { id: 'agriculture', name: 'Agriculture Intelligence', category: 'agriculture', purpose: 'Connect Farmers to Knowledge and Markets' },
  { id: 'community', name: 'Community Opportunity Network', category: 'community', purpose: 'Township and local business visibility' },
  { id: 'creative', name: 'Creative Intelligence Studio', category: 'creative', purpose: 'Where creativity becomes structured opportunity' },
  { id: 'future', name: 'Future Civilization Research Node', category: 'research', purpose: 'AI governance, space systems, future societies' }
];

nodes.forEach(node => {
  const config = {
    id: node.id,
    name: node.name,
    version: "1.0.0",
    category: node.category,
    purpose: node.purpose,
    inputs: ["human_intent"],
    outputs: ["economic_opportunities"],
    connects_to: ["knowledge_graph", "opportunity_exchange"],
    governance: {
      requiresConsent: true,
      requiresEvidence: true
    }
  };
  fs.writeFileSync(path.join(__dirname, 'nodes', node.id, 'node.config.json'), JSON.stringify(config, null, 2));
});
console.log('Created 12 node.config.json files.');
