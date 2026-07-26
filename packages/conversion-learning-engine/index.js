class ConversionLearningEngine {
    constructor() {
        this.confidenceWeights = {
            'income_vehicle_mpumalanga': 0.82
        };
    }

    observeOutcome(opportunityId, outcome) {
        console.log(`[LEARNING ENGINE] Observing outcome for ${opportunityId}: ${outcome}`);
        
        if (outcome === 'SUCCESSFUL_CONNECTION') {
            console.log(`[LEARNING ENGINE] Partner accepted lead. Reinforcing confidence.`);
            this.confidenceWeights['income_vehicle_mpumalanga'] += 0.03;
        } else if (outcome === 'REJECTED') {
            console.log(`[LEARNING ENGINE] Partner rejected lead. Adjusting capability assumptions.`);
            this.confidenceWeights['income_vehicle_mpumalanga'] -= 0.05;
        }
        
        console.log(`[LEARNING ENGINE] Updated Confidence Weight: ${this.confidenceWeights['income_vehicle_mpumalanga'].toFixed(2)}`);
    }
}
module.exports = new ConversionLearningEngine();
