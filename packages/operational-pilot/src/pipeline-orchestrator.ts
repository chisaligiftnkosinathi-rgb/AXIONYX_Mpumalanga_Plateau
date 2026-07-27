import { Logger, Tracing } from '@axionyx/observability';

export interface PipelineState {
  stage: number;
  status: 'IDLE' | 'RUNNING' | 'PAUSED' | 'COMPLETED' | 'FAILED';
  logs: { timestamp: string; message: string }[];
  metrics: {
    latency: number;
    traceability: number;
    provenance: number;
    explainability: number;
    replayability: number;
    confidence: number;
  };
  correlationId?: string;
}

export class PipelineOrchestrator {
  private state: PipelineState = this.getInitialState();
  private scenarioData: any = null;
  private scenarioLogic: any = null;

  private getInitialState(): PipelineState {
    return {
      stage: 0,
      status: 'IDLE',
      logs: [],
      metrics: { latency: 0, traceability: 100, provenance: 100, explainability: 100, replayability: 100, confidence: 0 }
    };
  }

  public loadScenario(domain: 'COAL' | 'ERTIGA', failureMode?: string) {
    this.state = this.getInitialState();
    this.state.correlationId = Tracing.generateCorrelationId();
    // In a real system, these would import from the specific domain adapters
    this.scenarioData = { domain, failureMode, timestamp: new Date().toISOString() };
    this.log(`Loaded scenario: ${domain}${failureMode ? ' (Injection: ' + failureMode + ')' : ''}`);
  }

  public async stepNext(): Promise<void> {
    if (this.state.stage >= 10 || this.state.status === 'FAILED') return;
    
    const startTime = performance.now();
    this.state.status = 'RUNNING';
    this.state.stage++;
    
    // Simulate processing time
    await new Promise(r => setTimeout(r, 100 + Math.random() * 50));
    
    // Stage logic router
    this.executeStageLogic(this.state.stage);

    const endTime = performance.now();
    this.state.metrics.latency = (endTime - startTime) / 1000;
  }

  private executeStageLogic(stage: number) {
    const stages = [
      'Observation Received', 'Evidence (OVL) Validated', 'Knowledge Graph Updated',
      'Mission Loaded', 'Constraints Evaluated', 'Decision Produced',
      'Explainability Generated', 'Approval Requested', 'Execution Recorded', 'Learning Updated'
    ];
    
    let message = stages[stage - 1];

    // Simulate failure injections
    if (this.scenarioData.failureMode === 'SAFETY_VIOLATION' && stage === 5) {
      message = 'REJECTED: Safety Constraint Violated';
      this.state.status = 'FAILED';
    } else if (this.scenarioData.failureMode === 'LOW_EVIDENCE' && stage === 2) {
      message = 'WARNING: Low Evidence Level (E1). Confidence downgraded.';
      this.state.metrics.confidence = 40;
    } else if (stage === 6 && this.state.status !== 'FAILED') {
      this.state.metrics.confidence = this.state.metrics.confidence || 91;
    }

    this.log(message);
    if (stage === 10 && this.state.status !== 'FAILED') this.state.status = 'COMPLETED';
  }

  private log(message: string) {
    const ts = new Date();
    this.state.logs.push({ 
      timestamp: `${ts.getHours().toString().padStart(2, '0')}:${ts.getMinutes().toString().padStart(2, '0')}:${ts.getSeconds().toString().padStart(2, '0')}.${ts.getMilliseconds().toString().padStart(3, '0')}`, 
      message 
    });
    
    Logger.log({
      stage: `STAGE_${this.state.stage}`,
      eventId: 'evt_' + Math.random().toString(36).substr(2, 9),
      correlationId: this.state.correlationId || 'N/A',
      component: 'pipeline-orchestrator',
      severity: message.includes('REJECTED') || message.includes('FAILED') ? 'ERROR' : message.includes('WARNING') ? 'WARN' : 'INFO',
      status: this.state.status,
      durationMs: 0,
      message
    });
  }

  public getState(): PipelineState {
    return this.state;
  }
}
