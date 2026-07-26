import { KnowledgeRuntime } from '../knowledge-graph-engine/src/runtime/index';
import { saPack } from '../pack-south-africa/src/index';
import { mpumalangaPack } from '../pack-mpumalanga/src/index';
import { emalahleniPack } from '../pack-emalahleni/src/index';

async function runTwinSimulation() {
  console.log('===========================================================');
  console.log(' AXIONYX SCIE-ENGINE: NATIONAL DIGITAL TWIN SIMULATION');
  console.log(' eMalahleni Case Study -> NDP 2030');
  console.log('===========================================================');
  
  const runtime = new KnowledgeRuntime();
  
  console.log(`\n[1] Installing Knowledge Packs...`);
  runtime.loadPack(saPack);
  runtime.loadPack(mpumalangaPack);
  runtime.loadPack(emalahleniPack);
  
  console.log(`[2] Compiling and Resolving Dependencies...`);
  runtime.compile();
  
  console.log('\n[3] Executing eMalahleni Traversal (Observation -> Vision)...');
  
  const traversalSequence = [
    'ema-obs-asphalt-test',
    'ema-verif-sanas',
    'ema-evidence-qa-pass',
    'ema-asset-n4-segment',
    'ema-project-road-upgrade',
    'ema-prog-public-works',
    'mpu-target-roads-good',
    'mpu-indicator-road-quality',
    'mpu-outcome-transport',
    'sa-goal-infrastructure',
    'sa-vision-ndp2030'
  ];

  // We will manually trace through the engine's graph to show the linkage
  // and prove that the nodes are connected correctly in the compiled runtime.
  
  const graph = (runtime as any).graph; // Access the compiled graph
  
  let validTraversal = true;
  for (let i = 0; i < traversalSequence.length - 1; i++) {
    const sourceNodeId = traversalSequence[i];
    const targetNodeId = traversalSequence[i + 1];
    
    const sourceNode = graph.getNode(sourceNodeId);
    const targetNode = graph.getNode(targetNodeId);
    
    if (!sourceNode || !targetNode) {
      console.log(`❌ Node missing: ${!sourceNode ? sourceNodeId : targetNodeId}`);
      validTraversal = false;
      break;
    }

    // Find if there is an edge between them (either direction)
    const edgesFrom = graph.getEdgesFrom(sourceNodeId).filter((e: any) => e.targetId === targetNodeId);
    const edgesTo = graph.getEdgesTo(sourceNodeId).filter((e: any) => e.sourceId === targetNodeId);
    
    const edges = [...edgesFrom, ...edgesTo];
    
    if (edges.length === 0) {
      console.log(`❌ No edge found between [${sourceNode.type}] ${sourceNode.name} and [${targetNode.type}] ${targetNode.name}`);
      validTraversal = false;
      break;
    }

    const edge = edges[0];
    const dir = edge.sourceId === sourceNodeId ? '➔' : '🠔';
    console.log(`Step ${i + 1}: [${sourceNode.type}] ${sourceNode.name} ${dir} (${edge.type}) ${dir} [${targetNode.type}] ${targetNode.name}`);
  }

  if (validTraversal) {
    console.log(`\n✅ VERIFIED: eMalahleni Ground Observation successfully traces to National Vision.`);
    
    const evidenceNode = graph.getNode('ema-evidence-qa-pass');
    console.log(`\nEvidence Confidence: ${evidenceNode.metadata.confidence}`);
  } else {
    console.log(`\n❌ FAILED: The Digital Twin graph is broken.`);
  }

  console.log('\n===========================================================');
  console.log(' SIMULATION COMPLETE');
  console.log('===========================================================');
}

runTwinSimulation().catch(console.error);
