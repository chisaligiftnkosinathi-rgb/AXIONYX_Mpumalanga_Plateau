import { InstrumentController } from './controllers/instrument-controller';
import { CalibrationController } from './controllers/calibration-controller';

/**
 * HCOS Control Plane Entrypoint
 * Simulates the Kubernetes control plane running all operators and event buses.
 */
export class HCOSControlPlane {
  public instrumentController: InstrumentController;
  public calibrationController: CalibrationController;

  constructor() {
    console.log('===========================================================');
    console.log(' BOOTING HCOS CONTROL PLANE');
    console.log('===========================================================');
    
    // Initialize Controllers
    this.instrumentController = new InstrumentController();
    this.calibrationController = new CalibrationController(this.instrumentController);
    
    console.log('[HCOS] Control plane ready.\n');
  }
}
