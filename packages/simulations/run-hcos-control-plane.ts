import { HCOSControlPlane } from '../hcos/src/hcos';
import { InstrumentCRD } from '../hcos/src/schemas/crds';
import { eventBus } from '../hcos/src/event-bus';

async function runHCOS() {
  const hcos = new HCOSControlPlane();

  // Define a declarative Instrument (this would normally be in a YAML file)
  const municipalityInstrument: InstrumentCRD = {
    apiVersion: 'axionyx.io/v1',
    kind: 'Instrument',
    metadata: {
      name: 'emalahleni-instrument',
      namespace: 'axionyx-municipal'
    },
    spec: {
      id: 'emalahleni-hplc',
      profile: 'municipality',
      packs: ['pack-south-africa', 'pack-emalahleni'],
      federation: {
        enabled: true,
        exports: ['local-measurements'],
        imports: ['provincial-roads']
      }
    }
  };

  console.log('\n[Simulating] `kubectl apply -f emalahleni-instrument.yaml`');
  hcos.instrumentController.apply(municipalityInstrument);

  // We wait to let the event bus process asynchronous state changes
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('\n[Simulating] Instrument fails during runtime (Degraded State)');
  // We manually emit a failure to see if the control plane catches it
  eventBus.publish({
    type: 'CalibrationFailed',
    source: 'ExternalMonitor',
    timestamp: new Date().toISOString(),
    payload: { instrumentName: 'emalahleni-instrument', reason: 'Unexpected schema drift.' }
  });

  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('\n===========================================================');
  console.log(' HCOS CONTROL PLANE SIMULATION COMPLETE');
  console.log('===========================================================');
}

runHCOS().catch(console.error);
