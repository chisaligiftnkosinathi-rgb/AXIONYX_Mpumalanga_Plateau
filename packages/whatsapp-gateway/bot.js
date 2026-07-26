const IntentParser = require('../intent-engine/parser');
const MarketMatcher = require('../market-intelligence-engine/matcher');

class WhatsAppGateway {
    static simulateMultiTurnConversation() {
        console.log("=============================================================");
        console.log(" A63.2 - CHAPPIES CURIOSITY LEAD ENGINE (Multi-Turn Simulator) ");
        console.log("=============================================================\n");

        console.log("[BOT] 👋 Welcome to Chappies. I can help you find verified opportunities and materials.\n");

        let userMessage = "I need high quality aluminium.";
        console.log(`[USER] ${userMessage}\n`);

        // Turn 1: Initial Parse
        let intent = IntentParser.parseMessage(userMessage);
        console.log('');

        if (intent.missing_information && intent.missing_information.length > 0) {
            console.log(`\n[BOT] What will you use the material for? (e.g. Research, Manufacturing, Construction)\n`);
            
            userMessage = "I'm doing battery research.";
            console.log(`[USER] ${userMessage}\n`);
            
            // Turn 2: Contextual Parse
            intent = IntentParser.parseMessage(userMessage, intent);
        }

        console.log('');
        // Market Match
        const match = MarketMatcher.generateMatch(intent);
        
        if (match && match.type === 'Material_Opportunity') {
            console.log(`\n[BOT] I have connected your material need to verified network nodes:`);
            match.graph_matches.forEach(m => console.log(` ✓ ${m}`));
            
            console.log(`\n[BOT] We are notifying verified suppliers. They will contact you shortly.\n`);

            // Lead/Crystal Generation
            const crystal = MarketMatcher.qualifyLead(intent, match);
            console.log(`[SYSTEM] 🎯 DEMAND SIGNAL CRYSTAL GENERATED:`);
            console.log(JSON.stringify(crystal, null, 2));
            console.log(`\n[SYSTEM] Crystal distributed to Supplier Network. Monetization: Supplier Intelligence Subscription (Verified Buyer Access).`);
        }
    }
}

WhatsAppGateway.simulateMultiTurnConversation();
