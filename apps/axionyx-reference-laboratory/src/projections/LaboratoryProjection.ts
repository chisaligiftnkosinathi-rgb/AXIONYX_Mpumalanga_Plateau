import { Evidence } from '@axionyx/kernel-sdk';

export interface LabStats {
    totalSamples: number;
    lastProcessed: string | null;
}

export class LaboratoryProjection {
    private state: LabStats = {
        totalSamples: 0,
        lastProcessed: null
    };

    public reset() {
        this.state = {
            totalSamples: 0,
            lastProcessed: null
        };
    }

    public handle(evidence: Evidence<any>) {
        if (evidence.policyDecision.outcome === 'Accepted') {
            this.state.totalSamples += 1;
            this.state.lastProcessed = evidence.timestamp;
        }
    }

    public getState(): LabStats {
        return this.state;
    }
}
