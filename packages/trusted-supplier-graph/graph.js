class TrustedSupplierGraph {
    static getVerifiedSuppliers(opportunity) {
        console.log(`[SUPPLIER GRAPH] Searching verified graph for opportunity: ${opportunity.domain}`);
        
        // Mock returning verified suppliers based on capability, not human ranking
        if (opportunity.domain === 'Materials' && (opportunity.material === 'Aluminium' || opportunity.material === 'Material A')) {
            return [
                { id: "SUP_101", name: "Advanced Metals Ltd", verification_level: 0.95, certifications: ["ISO 9001", "SANAS"] },
                { id: "SUP_102", name: "Mpumalanga Smelters", verification_level: 0.88, certifications: ["ISO 9001"] }
            ];
        }

        if (opportunity.domain === 'Vehicles' && opportunity.vehicle_need === 'Suzuki Ertiga') {
             return [
                { id: "DLR_501", name: "Pretoria Auto Commercial", verification_level: 0.92, certifications: ["Verified Dealer"] }
            ];
        }

        return [];
    }
}
module.exports = TrustedSupplierGraph;
