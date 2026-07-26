import { InstrumentCRD } from '../schemas/crds';
import { eventBus } from '../event-bus';

export class InstrumentController {
  private instruments: Map<string, InstrumentCRD> = new Map();

  constructor() {
    console.log('[InstrumentController] Started. Watching Instrument CRDs.');
    this.setupWatchers();
  }

  private setupWatchers() {
    eventBus.subscribe('CalibrationFailed', (e) => {
      const instrumentName = e.payload.instrumentName;
      const instrument = this.instruments.get(instrumentName);
      if (instrument) {
        this.updateStatus(instrument, 'DEGRADED');
      }
    });
  }

  /**
   * Simulates `kubectl apply -f instrument.yaml`
   */
  public apply(manifest: InstrumentCRD): void {
    console.log(`[InstrumentController] Reconciling Instrument: ${manifest.metadata.name}`);
    
    // Default status if new
    if (!manifest.status) {
      manifest.status = { phase: 'CREATED', healthScore: 0, lastCalibrated: 'never' };
    }
    
    this.instruments.set(manifest.metadata.name, manifest);
    this.reconcile(manifest);
  }

  private reconcile(instrument: InstrumentCRD) {
    if (instrument.status?.phase === 'CREATED') {
      this.updateStatus(instrument, 'INSTALLING');
      
      // Simulate pack loading
      setTimeout(() => {
        eventBus.publish({
          type: 'PackLoaded',
          source: 'InstrumentController',
          timestamp: new Date().toISOString(),
          payload: { instrumentName: instrument.metadata.name, packs: instrument.spec.packs }
        });
        this.updateStatus(instrument, 'CALIBRATING');
      }, 500);

    } else if (instrument.status?.phase === 'CALIBRATING') {
      // In a real system, the CalibrationController takes over and emits an event when done.
      // We'll let the CalibrationController handle the transition to READY.
    }
  }

  public updateStatus(instrument: InstrumentCRD, phase: InstrumentCRD['status']['phase']) {
    instrument.status!.phase = phase;
    console.log(`[InstrumentController] 🔄 Instrument ${instrument.metadata.name} phase changed to ${phase}`);
    
    eventBus.publish({
      type: 'InstrumentStateChanged',
      source: 'InstrumentController',
      timestamp: new Date().toISOString(),
      payload: { instrumentName: instrument.metadata.name, phase }
    });
  }
}
