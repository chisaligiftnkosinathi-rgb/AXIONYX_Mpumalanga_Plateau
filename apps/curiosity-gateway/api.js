const http = require('http');
const IntentParser = require('../../packages/intent-engine/parser');
const V2MarketMatcher = require('../../packages/market-intelligence-engine/v2_matcher');
const ValueEngine = require('../../packages/opportunity-value-engine/calculator');
const Kernel = require('../../packages/opportunity-exchange-kernel/kernel');

// A63.5.1 Sandbox Identity Setup (In memory mock for the session)
const userSessions = {};

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/opportunity/webhook') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        
        req.on('end', () => {
            try {
                console.log("\n=============================================================");
                console.log(" A63.5 - WHATSAPP API GATEWAY (Incoming Webhook Payload)");
                console.log("=============================================================");

                const { fromNumber, messageBody } = JSON.parse(body);
                console.log(`[GATEWAY] Received message from Sandbox User ${fromNumber}: "${messageBody}"\n`);

                // Retrieve or create session context
                let currentContext = userSessions[fromNumber] || {};
                
                // 1. Intent Parsing
                let intent = IntentParser.parseMessage(messageBody, currentContext);
                userSessions[fromNumber] = intent; 

                // If intent has missing info, bot would normally reply via WhatsApp API here
                if (intent.missing_information && intent.missing_information.length > 0) {
                    console.log(`[GATEWAY] Intent incomplete. Missing: ${intent.missing_information.join(', ')}`);
                    console.log(`[GATEWAY] Response to WhatsApp: "Could you provide more details?"`);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ status: "awaiting_info", missing: intent.missing_information }));
                }

                console.log(`\n[GATEWAY] Intent fully qualified. Transitioning to Opportunity Exchange Kernel.`);

                // 2. Kernel Lifecycle
                let crystal = { id: `CRYSTAL_${Date.now()}`, status: 'DISCOVERED' };
                crystal = Kernel.transitionState(crystal, 'QUALIFIED', 'API_SYSTEM');
                
                // 3. V2 Market Matching
                const matchInfo = V2MarketMatcher.generateMatch(intent);
                crystal.domain = intent.domain;
                crystal.material = matchInfo.target_material;
                
                crystal = Kernel.transitionState(crystal, 'VERIFIED', 'API_SYSTEM');

                // 4. Value Engine
                ValueEngine.calculateValue(crystal, intent);

                // 5. Inbox Routing
                if (matchInfo.graph_matches && matchInfo.graph_matches.length > 0) {
                    const partner = matchInfo.graph_matches[0];
                    crystal = Kernel.transitionState(crystal, 'MATCHED', 'API_SYSTEM', `Matched to ${partner.name} at ${(partner.confidence * 100).toFixed(2)}% confidence`);
                    
                    console.log(`\n[PARTNER INBOX] Delivered Opportunity ${crystal.id} to ${partner.name}`);
                    
                    delete userSessions[fromNumber]; // Clean session
                    
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ status: "opportunity_created", crystal: crystal, partner_match: partner.name }));
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ status: "no_match_found" }));
                }

            } catch (e) {
                console.error(e);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: e.message }));
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`[AXIONYX CURIOSITY NODE] Sandbox API Gateway active on port ${PORT}`);
});
