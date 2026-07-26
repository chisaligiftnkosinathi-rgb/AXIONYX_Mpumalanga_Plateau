const GraphEngine = require('./packages/knowledge-economy-core/GraphEngine');
const path = require('path');
const fs = require('fs');

console.log("==================================================");
console.log("🚀 AXIONYX GRAPH VERIFICATION: MOBILITY ECONOMY");
console.log("==================================================");

// 1. Publish Nodes
GraphEngine.publishNode('A', 'HUMAN_INTENT', '100 Chappies Conversations', 'mobility');
GraphEngine.publishNode('B', 'OPPORTUNITY_CRYSTAL', 'Vehicle Demand Crystal', 'mobility');
GraphEngine.publishNode('C', 'REQUIREMENT', 'Income Mobility Need', 'mobility');
GraphEngine.publishNode('D', 'CAPABILITY', 'Mad Cars Capability', 'commerce');
GraphEngine.publishNode('E', 'TRANSACTION', 'Vehicle Delivery', 'commerce');
GraphEngine.publishNode('F', 'OUTCOME', 'Regional Economic Activity', 'economics');
GraphEngine.publishNode('G', 'ECONOMIC_CRYSTAL', 'Mobility Economy Crystal', 'macro_economics');

// 2. Link Nodes with STRICT EVIDENCE
GraphEngine.linkNodes('A', 'B', 'RESULTS_IN', 'Aggregated conversational intent signals', 0.95);
GraphEngine.linkNodes('B', 'C', 'REVEALS', 'Intent clustering algorithm', 0.88);
GraphEngine.linkNodes('C', 'D', 'MET_BY', 'Partner Passport Validation', 0.92);
GraphEngine.linkNodes('D', 'E', 'EXECUTES', 'Observed outcome feedback loop', 0.99);
GraphEngine.linkNodes('E', 'F', 'GENERATES', 'Financial transaction telemetry', 0.85);
GraphEngine.linkNodes('F', 'G', 'SYNTHESIZES_TO', 'Macro-economic clustering logic', 0.90);

// 3. Extract JSON Artifact
const jsonArtifact = GraphEngine.discoverEcosystem();
const jsonPath = path.join(__dirname, 'evidence', 'MOBILITY_ECONOMY_NETWORK.json');
fs.writeFileSync(jsonPath, JSON.stringify(jsonArtifact, null, 2));
console.log(`\n[GRAPH] JSON Artifact dumped to ${jsonPath}`);

// 4. Extract Mermaid Markdown Artifact
const mdPath = path.join(__dirname, 'evidence', 'MOBILITY_ECONOMY_NETWORK.md');
GraphEngine.generateMermaid(mdPath);
