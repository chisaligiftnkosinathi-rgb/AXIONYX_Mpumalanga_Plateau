import { eventBus } from '../event-bus';
import { InstrumentController } from './instrument-controller';

export class CalibrationController {
  
  constructor(private instrumentController: InstrumentController) {
    console.log('[CalibrationController] Started. Watching Instrument events.');
    this.setupWatchers();
  }

  private setupWatchers() {
    eventBus.subscribe('InstrumentStateChanged', (e) => {
      if (e.payload.phase === 'CALIBRATING') {
        this.runCalibration(e.payload.instrumentName);
      }
    });
  }

  private runCalibration(instrumentName: string) {
    console.log(`[CalibrationController] Running calibration sequence for ${instrumentName}...`);
    
    // Simulate checking the graph and schemas
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% chance of success
      
      if (success) {
        console.log(`[CalibrationController] ✅ Calibration successful for ${instrumentName}`);
        
        // This is a bit of a shortcut. In K8s, it would update the CRD which triggers the InstrumentController again.
        // For simulation, we'll ask the InstrumentController directly.
        const instrument = (this.instrumentController as any).instruments.get(instrumentName);
        if (instrument) {
          instrument.status.healthScore = 1.0;
          instrument.status.lastCalibrated = new Date().toISOString();
          this.instrumentController.updateStatus(instrument, 'READY');
        }
      } else {
        console.error(`[CalibrationController] ❌ Calibration failed for ${instrumentName}`);
        eventBus.publish({
          type: 'CalibrationFailed',
          source: 'CalibrationController',
          timestamp: new Date().toISOString(),
          payload: { instrumentName, reason: 'Schema mismatch in EvidencePipeline.' }
        });
      }
    }, 1000);
  }
}
