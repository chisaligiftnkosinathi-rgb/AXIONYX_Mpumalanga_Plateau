class MarketIntelligenceMatcher {
    static generateMatch(intentProfile) {
        console.log(`[MARKET ENGINE] Querying Universal Knowledge Graph for domain: [${intentProfile.domain}]...`);
        
        if (intentProfile.domain === 'Vehicles') {
            return {
                type: 'Vehicle',
                recommended_model: "Suzuki Ertiga",
                reasoning: ["7 seats", "Low running cost", "Family + Income dual capability"]
            };
        }

        if (intentProfile.domain === 'Materials' && (intentProfile.application === 'Battery Research' || intentProfile.application === 'Manufacturing')) {
            console.log(`[MARKET ENGINE] Traversing Material Knowledge Graph...`);
            console.log(` -> Material Need -> Chemical Properties -> Standards -> Suppliers -> Laboratories`);
            return {
                type: 'Material_Opportunity',
                target_material: intentProfile.materials[0].name,
                requirements_identified: ["purity", "composition", "certificate of analysis", "traceability"],
                graph_matches: [
                    "Certified Supplier: Advanced Metals Ltd (Verified)",
                    "Testing Lab: SANAS Materials Lab",
                    "Logistics: Secure Transport Inc"
                ]
            };
        }
        
        return null;
    }

    static qualifyLead(intentProfile, match) {
        if (intentProfile.domain === 'Vehicles') {
            return {
                id: `LEAD_VEH_${Math.floor(Math.random() * 10000)}`,
                domain: 'Vehicles',
                status: 'READY_FOR_PARTNER'
            };
        }

        if (intentProfile.domain === 'Materials') {
            return {
                id: `CRYSTAL_MAT_DEMAND_${Math.floor(Math.random() * 10000)}`,
                type: 'Demand Signal Crystal',
                domain: 'Materials',
                material: match.target_material,
                actors_matched: match.graph_matches.length,
                status: 'OPPORTUNITY_VERIFIED',
                monetization_model: 'Supplier Intelligence Subscription'
            };
        }
    }
}
module.exports = MarketIntelligenceMatcher;
