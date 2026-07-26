import { KnowledgeRuntime } from '../knowledge-graph-engine/src/runtime/index';
import { DiscoveryEngine } from '../knowledge-graph-engine/src/runtime/discovery';
import { KnowledgeNode, KnowledgeEdge, NodeType, EdgeType } from '../knowledge-graph-engine/src/schemas/engine.schema';

import { saPack } from '../pack-south-africa/src/index';
import { geographyPack } from '../pack-reference-geography/src/index';
import { statssaPack } from '../pack-statssa/src/index';
import { mpumalangaPack } from '../pack-mpumalanga/src/index';
import { emalahleniPack } from '../pack-emalahleni/src/index';

async function runDiscoverySimulation() {
  console.log('===========================================================');
  console.log(' AXIONYX SCIE-ENGINE: DISCOVERY & GAP ANALYSIS ENGINE (v1.0)');
  console.log(' Evaluating Layered Maturity and Graph Self-Awareness');
  console.log('===========================================================');
  
  const runtime = new KnowledgeRuntime();
  runtime.loadPack(saPack);
  runtime.loadPack(geographyPack);
  runtime.loadPack(statssaPack);
  runtime.loadPack(mpumalangaPack);
  runtime.loadPack(emalahleniPack);
  runtime.compile();
  
  const baseGraph = (runtime as any).graph;
  
  // Inject some intentional gaps for the engine to find
  baseGraph.addNode({
    id: 'asset-orphan-road-1',
    type: 'Asset',
    name: 'Orphaned Provincial Road',
    description: 'A road missing geographic location',
    temporal: { valid_from: new Date(), valid_until: null, effective_date: null, publication_date: null }
  });

  baseGraph.addNode({
    id: 'consultation-unresolved-1',
    type: 'Consultation',
    name: 'Open Budget Review',
    description: 'A consultation that was never closed with a resolution',
    temporal: { valid_from: new Date(), valid_until: null, effective_date: null, publication_date: null }
  });
  
  baseGraph.addNode({
    id: 'indicator-unmeasured-1',
    type: 'Indicator',
    name: 'Community Happiness Index',
    description: 'A strategic indicator with no StatsSA or telemetry datasets',
    temporal: { valid_from: new Date(), valid_until: null, effective_date: null, publication_date: null }
  });

  const discoveryEngine = new DiscoveryEngine(baseGraph);

  console.log('\n[1] Running Full Graph Discovery...');
  const gaps = discoveryEngine.runFullDiscovery();
  
  console.log(`\n  -> Found ${gaps.length} Knowledge Gaps:\n`);
  
  // Group by category
  const grouped = gaps.reduce((acc, gap) => {
    acc[gap.category] = acc[gap.category] || [];
    acc[gap.category].push(gap);
    return acc;
  }, {} as Record<string, typeof gaps>);

  for (const [category, categoryGaps] of Object.entries(grouped)) {
    console.log(`  [${category}] - ${categoryGaps.length} issue(s)`);
    for (const gap of categoryGaps) {
      console.log(`    ⚠ [${gap.severity}] ${gap.explanation}`);
      console.log(`      ↳ Recommendation: ${gap.recommendation}`);
    }
  }

  console.log('\n[2] Computing Digital Twin Maturity Assessment...');
  // We compute maturity for the entire loaded graph (representing the municipality in this simulation)
  const assessment = discoveryEngine.computeMaturityAssessment('emalahleni-municipality');
  
  console.log(`\n--- MATURITY ASSESSMENT RESULTS ---`);
  console.log(`\n[ Layer Constraints (Dependency Model) ]`);
  console.log(`  Foundation:    ${(assessment.layers.foundation * 100).toFixed(1)}%`);
  console.log(`  Evidence:      ${(assessment.layers.evidence * 100).toFixed(1)}%`);
  console.log(`  Intelligence:  ${(assessment.layers.intelligence * 100).toFixed(1)}%`);
  console.log(`  Governance:    ${(assessment.layers.governance * 100).toFixed(1)}%`);
  
  console.log(`\n[ Overall Maturity ]`);
  console.log(`  Score:         ${(assessment.overall * 100).toFixed(1)}%`);
  console.log(`  Status:        ${assessment.overall > 0.8 ? 'Ready for Federation' : 'Requires Stewardship before Federation'}`);

  console.log(`\n[ High-Priority Recommendations ]`);
  assessment.recommendations.forEach(r => console.log(`  - ${r}`));

  console.log('\n===========================================================');
  console.log(' DISCOVERY SIMULATION COMPLETE');
  console.log('===========================================================');
}

runDiscoverySimulation().catch(console.error);
