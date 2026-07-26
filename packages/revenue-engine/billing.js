class RevenueEngine {
    static generateTransaction(opportunity, partner) {
        console.log(`[REVENUE ENGINE] Calculating iPhande Monetization...`);
        let fee = 0;
        let type = '';

        if (opportunity.domain === 'Materials' && opportunity.estimated_economic_value > 100000) {
            // Large industrial deals: 1% facilitation fee
            fee = opportunity.estimated_economic_value * 0.01;
            type = 'SUCCESS_FEE';
            console.log(` -> Transaction Type: ${type} (1% of R${opportunity.estimated_economic_value.toLocaleString()})`);
        } else {
            // Standard qualified lead fee
            fee = 500; 
            type = 'LEAD_FEE';
            console.log(` -> Transaction Type: ${type} (Flat Rate)`);
        }

        console.log(` -> 🧾 Revenue Generated: R${fee.toLocaleString()} (Billed to ${partner.name})`);
        
        return {
            opportunity_id: opportunity.id,
            partner_id: partner.id,
            transaction_type: type,
            amount: fee
        };
    }
}
module.exports = RevenueEngine;
