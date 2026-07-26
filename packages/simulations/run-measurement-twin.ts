import { KnowledgeRuntime } from '../knowledge-graph-engine/src/runtime/index';
import { saPack } from '../pack-south-africa/src/index';
import { geographyPack } from '../pack-reference-geography/src/index';
import { statssaPack } from '../pack-statssa/src/index';
import { mpumalangaPack } from '../pack-mpumalanga/src/index';
import { emalahleniPack } from '../pack-emalahleni/src/index';

async function runMeasurementSimulation() {
  console.log('===========================================================');
  console.log(' AXIONYX SCIE-ENGINE: NATIONAL REFERENCE INFRASTRUCTURE');
  console.log(' Demonstrating Canonical Geography and Statistical Linkage');
  console.log('===========================================================');
  
  const runtime = new KnowledgeRuntime();
  
  console.log(`\n[1] Installing Knowledge Packs...`);
  runtime.loadPack(saPack);
  runtime.loadPack(geographyPack);
  runtime.loadPack(statssaPack);
  runtime.loadPack(mpumalangaPack);
  runtime.loadPack(emalahleniPack);
  
  console.log(`[2] Compiling and Resolving Dependencies...`);
  runtime.compile();
  
  const graph = (runtime as any).graph;

  console.log('\n[3] Executing Spatial Query: "Where is the eMalahleni N4 Road Segment located?"');
  const assetId = 'ema-asset-n4-segment';
  const assetNode = graph.getNode(assetId);
  
  let currentGeo = assetId;
  const geoTraversal = [];
  while (true) {
    const edgesFrom = graph.getEdgesFrom(currentGeo).filter((e: any) => e.type === 'located_in');
    if (edgesFrom.length === 0) break;
    const targetGeo = edgesFrom[0].targetId;
    geoTraversal.push(targetGeo);
    currentGeo = targetGeo;
  }
  
  console.log(`Asset: [${assetNode.type}] ${assetNode.name}`);
  geoTraversal.forEach((geoId, index) => {
    const geoNode = graph.getNode(geoId);
    console.log(`  ${' '.repeat(index * 2)}↳ located_in: [${geoNode.type}] ${geoNode.name}`);
  });

  console.log('\n[4] Executing Statistical Query: "Who officially measures the Population for this location?"');
  // We trace from the Geography -> StatisticalObservation -> Series -> Dataset -> Authority
  const mainPlaceId = geoTraversal[0];
  const statObsEdges = graph.getEdgesTo(mainPlaceId).filter((e: any) => e.type === 'located_in');
  
  statObsEdges.forEach((e: any) => {
    const statObs = graph.getNode(e.sourceId);
    if (statObs && statObs.type === 'StatisticalObservation') {
      console.log(`Found Statistical Observation: ${statObs.name} (Value: ${statObs.metadata?.value}, Period: ${statObs.metadata?.period})`);
      
      const seriesEdge = graph.getEdgesTo(statObs.id).find((e: any) => e.type === 'contains');
      if (seriesEdge) {
        const series = graph.getNode(seriesEdge.sourceId);
        
        const unitEdge = graph.getEdgesFrom(series.id).find((e: any) => e.type === 'measured_in');
        const unit = unitEdge ? graph.getNode(unitEdge.targetId) : { name: 'Unknown' };
        
        console.log(`  ↳ Series: ${series.name} (Unit: ${unit.name})`);
        
        const datasetEdge = graph.getEdgesTo(series.id).find((e: any) => e.type === 'contains');
        if (datasetEdge) {
          const dataset = graph.getNode(datasetEdge.sourceId);
          console.log(`    ↳ Dataset: ${dataset.name}`);
          
          const authEdge = graph.getEdgesTo(dataset.id).find((e: any) => e.type === 'publishes');
          if (authEdge) {
            const auth = graph.getNode(authEdge.sourceId);
            console.log(`      ↳ Published by Authority: ${auth.name}`);
          }
        }
      }
    }
  });

  console.log('\n===========================================================');
  console.log(' SIMULATION COMPLETE');
  console.log('===========================================================');
}

runMeasurementSimulation().catch(console.error);
