import { IProjection } from './ProjectionEngine';
import { DomainEvent } from '@axionyx/event-bus';

export interface InstrumentState {
  instrumentId: string;
  health: number;
  drift: 'NORMAL' | 'WARNING' | 'CRITICAL';
  status: 'READY' | 'RUNNING' | 'PAUSED' | 'ERROR';
  confidence: number;
}

export class InstrumentProjection implements IProjection<InstrumentState> {
  private state: InstrumentState = {
    instrumentId: 'ICPMS-01',
    health: 100.0,
    drift: 'NORMAL',
    status: 'READY',
    confidence: 1.0
  };

  getState(): InstrumentState {
    return this.state;
  }

  applyEvent(event: DomainEvent): void {
    if (event.type === 'TelemetryReceived') {
      const payload = event.payload as any;
      if (payload.drift > 0.05) {
        this.state.drift = 'WARNING';
        this.state.health -= 5;
        this.state.confidence = 0.85;
      } else {
        this.state.drift = 'NORMAL';
        this.state.health = 100.0;
        this.state.confidence = 1.0;
      }
    } else if (event.type === 'InstrumentDriftDetected') {
      this.state.drift = 'CRITICAL';
      this.state.health -= 15;
      this.state.status = 'PAUSED';
      this.state.confidence = 0.50;
    } else if (event.type === 'CalibrationCompleted') {
      this.state.drift = 'NORMAL';
      this.state.health = 100.0;
      this.state.status = 'READY';
      this.state.confidence = 0.99;
    }
  }
}
