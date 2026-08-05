export class LaboratoryProjection {
    state = {
        totalSamples: 0,
        lastProcessed: null
    };
    reset() {
        this.state = {
            totalSamples: 0,
            lastProcessed: null
        };
    }
    handle(evidence) {
        if (evidence.policyDecision.outcome === 'Accepted') {
            this.state.totalSamples += 1;
            this.state.lastProcessed = evidence.timestamp;
        }
    }
    getState() {
        return this.state;
    }
}
