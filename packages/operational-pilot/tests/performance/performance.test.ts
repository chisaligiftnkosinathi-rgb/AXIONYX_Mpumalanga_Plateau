import { describe, it, expect } from 'vitest';
import { PipelineOrchestrator } from '../../src/pipeline-orchestrator';
import { Metrics } from '@axionyx/observability';

describe('Performance Benchmarking', () => {
  it('Should record deterministic baseline latencies for the pipeline', async () => {
    const orchestrator = new PipelineOrchestrator();
    orchestrator.loadScenario('COAL');
    
    const start = performance.now();
    for(let i=0; i<10; i++) {
      const stepStart = performance.now();
      await orchestrator.stepNext();
      Metrics.recordLatency(`STAGE_${i+1}`, performance.now() - stepStart);
    }
    const totalTime = performance.now() - start;
    
    const report = Metrics.getBaselineReport();
    expect(report['STAGE_1']).toBeDefined();
    
    // We do not fail on latency yet, just record baselines
    console.log('Baseline Performance Report:', report);
    console.log(`Total Pipeline Duration: ${totalTime.toFixed(2)}ms`);
  });
});
