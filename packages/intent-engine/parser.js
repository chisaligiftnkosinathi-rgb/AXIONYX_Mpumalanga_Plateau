class IntentParser {
    static parseMessage(rawText, currentContext = {}) {
        console.log(`[INTENT ENGINE] Analyzing: "${rawText}"`);
        
        const lowerText = rawText.toLowerCase();
        let intent = { ...currentContext };
        
        // --- Domain Routing ---
        if (!intent.domain) {
            if (lowerText.includes('deliveries') || lowerText.includes('car') || lowerText.includes('vehicle')) {
                intent.domain = 'Vehicles';
            } else if (lowerText.includes('material') || lowerText.includes('aluminium') || lowerText.includes('steel')) {
                intent.domain = 'Materials';
                intent.request_type = 'material_purchase';
                intent.materials = [];
                
                if (lowerText.includes('material a')) intent.materials.push({ name: 'Material A', quality_required: 'high' });
                if (lowerText.includes('material b')) intent.materials.push({ name: 'Material B', quality_required: 'high' });
                if (lowerText.includes('aluminium')) intent.materials.push({ name: 'Aluminium', quality_required: 'high' });
            }
        }

        // --- Domain: Vehicles ---
        if (intent.domain === 'Vehicles') {
            if (lowerText.includes('bolt') || lowerText.includes('deliveries')) intent.purpose = 'income_vehicle';
            if (lowerText.includes('r1000/day') || lowerText.includes('r5000')) intent.budget_estimate = 'R5000 monthly';
            intent.missing_information = [];
        }

        // --- Domain: Materials ---
        if (intent.domain === 'Materials') {
            intent.missing_information = intent.missing_information || ["application", "quantity", "certification", "delivery_location"];
            
            // Context updating based on answers
            if (lowerText.includes('research') || lowerText.includes('battery') || lowerText.includes('manufacturing')) {
                intent.application = lowerText.includes('manufacturing') ? 'Manufacturing' : 'Battery Research';
                if(intent.materials.length > 0) intent.materials[0].grade = lowerText.includes('manufacturing') ? 'Industrial Grade' : 'Research Grade';
                intent.missing_information = intent.missing_information.filter(item => item !== 'application' && item !== 'certification');
            }
            if (lowerText.includes('kg') || lowerText.includes('ton')) {
                intent.quantity = rawText; 
                intent.missing_information = intent.missing_information.filter(item => item !== 'quantity');
            }
            if (lowerText.includes('pretoria') || lowerText.includes('mpumalanga')) {
                intent.delivery_location = rawText;
                intent.missing_information = intent.missing_information.filter(item => item !== 'delivery_location');
            }
        }

        console.log(`[INTENT ENGINE] State Update:`);
        console.log(JSON.stringify(intent, null, 2));

        return intent;
    }
}
module.exports = IntentParser;
