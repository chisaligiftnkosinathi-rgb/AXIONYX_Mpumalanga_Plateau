class OpportunityValueEngine {
    static calculateValue(opportunity, intentProfile) {
        console.log(`[VALUE ENGINE] Estimating Economic Value for ${opportunity.id}...`);

        let quantity = 1;
        let marketEstimate = 0;
        let urgency = intentProfile.urgency === 'high' ? 1.2 : 1.0;
        let verificationLevel = 0;

        if (opportunity.domain === 'Materials') {
            // Very basic mock logic to extract a numeric multiplier from strings like "2 tonnes", "500kg"
            if (intentProfile.quantity && intentProfile.quantity.includes('tonnes')) quantity = 2000;
            if (intentProfile.quantity && intentProfile.quantity.includes('kg')) quantity = parseInt(intentProfile.quantity) || 500;
            marketEstimate = 125; // Base price per kg mock
            verificationLevel = opportunity.actors_matched > 0 ? 1.0 : 0.5;
        }

        if (opportunity.domain === 'Vehicles') {
            marketEstimate = 250000; // Base vehicle price mock
            verificationLevel = 1.0;
        }

        const estimatedValue = quantity * marketEstimate * urgency * verificationLevel;
        opportunity.estimated_economic_value = estimatedValue;

        console.log(` -> Base Market Est: R${marketEstimate} | Qty: ${quantity} | Urgency Mult: ${urgency} | Verif Mult: ${verificationLevel}`);
        console.log(` -> 💰 Potential Economic Value: R${estimatedValue.toLocaleString()}`);

        return estimatedValue;
    }
}
module.exports = OpportunityValueEngine;
