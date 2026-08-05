import { Observation, CanonicalEvent } from '@axionyx/kernel-sdk';
import { randomUUID } from 'crypto';

export interface ICPMSReading {
    instrument: string;
    sampleId: string;
    analyte: string;
    value: number;
    unit: string;
    operator: string;
    timestamp: string;
}

export class ObservationAdapter {
    public translate(observation: Observation<ICPMSReading>): CanonicalEvent<ICPMSReading> {
        return {
            eventId: randomUUID(),
            observationId: observation.id,
            domain: 'laboratory',
            capability: 'Measure Concentration',
            eventType: 'ObservationReceived',
            occurredAt: new Date().toISOString(),
            actor: observation.payload.operator,
            payload: observation.payload,
            metadata: {
                ...observation.metadata,
                instrument: observation.payload.instrument,
            },
        };
    }
}
