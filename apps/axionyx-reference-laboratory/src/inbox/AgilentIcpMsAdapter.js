import * as fs from 'fs';
import * as crypto from 'crypto';
export class AgilentIcpMsAdapter {
    eventBus;
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    /**
     * Translates physical instrument CSV exports into AXIONYX Observations.
     */
    processCsvExport(filePath) {
        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            const lines = content.split('\n').filter(line => line.trim() !== '');
            // Skip header
            for (let i = 1; i < lines.length; i++) {
                const [sampleId, analyte, concentration, unit, timestamp] = lines[i].split(',');
                const observation = {
                    instrumentId: 'ICP-MS-01',
                    sampleId,
                    analyte,
                    concentration: parseFloat(concentration),
                    unit,
                    timestamp
                };
                // Forward valid observations to the Reality Inbox
                this.eventBus.publish({
                    eventId: crypto.randomUUID(),
                    eventType: 'PhysicalObservationAcquired',
                    aggregateId: sampleId,
                    payload: observation,
                    emittedAt: new Date()
                });
            }
        }
        catch (e) {
            console.error(`[Adapter] Failed to parse CSV: ${filePath}`);
        }
    }
}
