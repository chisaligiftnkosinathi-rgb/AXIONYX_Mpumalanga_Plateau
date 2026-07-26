import { HPLCRuntime } from '../knowledge-graph-engine/src/runtime/index';
import { RawSignal } from '../knowledge-graph-engine/src/runtime/signal';

import { saPack } from '../pack-south-africa/src/index';
import { geographyPack } from '../pack-reference-geography/src/index';
import { statssaPack } from '../pack-statssa/src/index';
import { mpumalangaPack } from '../pack-mpumalanga/src/index';
import { emalahleniPack } from '../pack-emalahleni/src/index';

async function runHPLCSimulation() {
  console.log('===========================================================');
  console.log(' AXIONYX SCIE-ENGINE: HPLC COMPUTATIONAL PIPELINE (v1.5)');
  console.log(' Emulating an Analytical Chemistry Execution Pipeline');
  console.log('===========================================================');
  
  const runtime = new HPLCRuntime();
  
  console.log('\n[1] INITIALIZING INSTRUMENT (Loading Packs)...');
  runtime.loadPack(saPack);
  runtime.loadPack(geographyPack);
  runtime.loadPack(statssaPack);
  runtime.loadPack(mpumalangaPack);
  runtime.loadPack(emalahleniPack);
  runtime.compile();

  console.log('\n[2] CALIBRATING INSTRUMENT (InstrumentEngine)...');
  const health = runtime.instrumentEngine.diagnose();
  health.diagnostics.forEach(d => console.log(`  ${d}`));
  console.log(`\n  Instrument Overall Health: ${(health.health * 100).toFixed(1)}%`);
  
  if (!health.readyForExecution) {
    console.log('  ABORTING PIPELINE: Instrument is out of calibration.');
    return;
  }
  
  console.log('\n[3] INJECTING SIGNALS (SignalEngine)...');
  const rawSignals: RawSignal[] = [
    { id: 'sig-01', source: 'iot-sensor-pothole', timestamp: new Date().toISOString(), payload: { event: 'pothole detected', severity: 'high' }, noiseLevel: 0.1 },
    { id: 'sig-02', source: 'citizen-app', timestamp: new Date().toISOString(), payload: 'The road is flooded', noiseLevel: 0.3 },
    { id: 'sig-03', source: 'bot-spam', timestamp: new Date().toISOString(), payload: 'Buy crypto', noiseLevel: 0.95 }, // Should be dropped
  ];
  console.log(`  Injected ${rawSignals.length} raw telemetry signals.`);

  console.log('\n[4] EXECUTING PIPELINE (The HPLC Column)...');
  console.log('  - Filtering Noise (Signal ➔ Observation)');
  console.log('  - Traversing Knowledge Graph');
  console.log('  - Applying Spectral Gap Analysis (DiscoveryEngine)');
  
  const spectrum = runtime.executePipeline(rawSignals, 'emalahleni-municipality');

  console.log('\n[5] DETECTING CHROMATOGRAM (Evidence Spectrum)...');
  console.log(`  Timestamp: ${spectrum.timestamp}`);
  console.log(`  Pipeline Decisions:`);
  spectrum.decisions.forEach(d => console.log(`    - ${d}`));
  
  console.log(`\n  Output Spectrum (Dimensions):`);
  for (const [dim, val] of Object.entries(spectrum.dimensions)) {
    console.log(`    ${dim.padEnd(25)}: ${(val * 100).toFixed(1)}%`);
  }

  console.log(`\n  Output Spectrum (Maturity Constraints):`);
  console.log(`    Foundation Constraints   : ${(spectrum.maturity.layers.foundation * 100).toFixed(1)}%`);
  console.log(`    Evidence Constraints     : ${(spectrum.maturity.layers.evidence * 100).toFixed(1)}%`);
  console.log(`    Overall Trust Baseline   : ${(spectrum.maturity.overall * 100).toFixed(1)}%`);

  console.log('\n===========================================================');
  console.log(' HPLC PIPELINE COMPLETE');
  console.log('===========================================================');
}

runHPLCSimulation().catch(console.error);
