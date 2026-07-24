import { createMachine, setup } from 'xstate';

export const laboratorySampleMachine = setup({
  types: {
    events: {} as
      | { type: 'ReceiveSample' }
      | { type: 'StartPreparation' }
      | { type: 'CaptureMeasurement' }
      | { type: 'ApproveMeasurement' }
      | { type: 'PublishCertificate' },
  },
  guards: {
    sampleExists: () => true, // Hooked up to actual DB later
    chainOfCustodyValid: () => true,
    instrumentCalibrated: () => true,
    qcPassed: () => true,
    reviewerAuthorized: () => true,
  }
}).createMachine({
  id: 'laboratorySample',
  initial: 'REGISTERED',
  states: {
    REGISTERED: {
      on: {
        ReceiveSample: {
          target: 'RECEIVED',
          guard: 'sampleExists'
        }
      }
    },
    RECEIVED: {
      on: {
        StartPreparation: {
          target: 'PREPARED',
          guard: 'chainOfCustodyValid'
        }
      }
    },
    PREPARED: {
      on: {
        CaptureMeasurement: {
          target: 'IN_ANALYSIS',
          guard: 'instrumentCalibrated'
        }
      }
    },
    IN_ANALYSIS: {
      on: {
        ApproveMeasurement: {
          target: 'REVIEWED',
          guard: 'qcPassed'
        }
      }
    },
    REVIEWED: {
      on: {
        PublishCertificate: {
          target: 'APPROVED',
          guard: 'reviewerAuthorized'
        }
      }
    },
    APPROVED: {
      type: 'final'
    }
  }
});
