class CuriosityMessages {
    static getGreeting() {
        return "👋 Chappies! Did you know you can find exactly what you need? What are you looking to achieve today?";
    }

    static getDomainQuestion(domain) {
        if (domain === 'Vehicles') {
            return "🚗 Did you know the best car depends on what you want to achieve? Are you looking for a car for income, family, business, or travel?";
        }
        return `💡 Did you know every great discovery starts with a question? What is your main goal for needing ${domain.toLowerCase()}?`;
    }

    static getQualificationQuestion(missingField) {
        const microAxioms = {
            budget: "💡 Did you know? A clear budget helps align you with verified capability. What is your monthly or total budget?",
            location: "💡 Did you know? Physical proximity reduces logistical friction. Where are you located?",
            purpose: "💡 Did you know? Purpose defines performance. How will you be using this?",
            quantity: "💡 Did you know? Volume changes economics. How much do you need?"
        };

        return microAxioms[missingField] || `Could you provide more details about your ${missingField}?`;
    }

    static getMatchFoundMessage(partnerName) {
        return `🎉 Match found! Did you know capability is proven by evidence? We have connected your request to a verified partner: ${partnerName}. They will be in touch shortly!`;
    }
}
module.exports = CuriosityMessages;
