const http = require('http');
const MetaMessageParser = require('./message-parser');
const MetaSender = require('./sender');
const ConversationState = require('../session/conversation-state');
const CuriosityMessages = require('../templates/curiosity-messages');
const ConsentManager = require('../session/consent');

const Kernel = require('../../opportunity-exchange-kernel/kernel');
const V2MarketMatcher = require('../../market-intelligence-engine/v2_matcher');
const ValueEngine = require('../../opportunity-value-engine/calculator');

const server = http.createServer(async (req, res) => {
    // Meta Webhook Verification (GET)
    if (req.method === 'GET' && req.url.startsWith('/webhook')) {
        const urlParams = new URLSearchParams(req.url.split('?')[1]);
        const mode = urlParams.get('hub.mode');
        const token = urlParams.get('hub.verify_token');
        const challenge = urlParams.get('hub.challenge');

        if (mode === 'subscribe' && token === 'AXIONYX_VERIFY_TOKEN') {
            console.log('[META GATEWAY] Webhook verified.');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end(challenge);
        } else {
            res.writeHead(403);
            return res.end();
        }
    }

    // Meta Webhook Event Processing (POST)
    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        
        req.on('end', async () => {
            try {
                const payload = JSON.parse(body);
                
                // Parse Meta Payload
                const parsedMsg = MetaMessageParser.parseIncoming(payload);
                if (!parsedMsg) {
                    res.writeHead(200);
                    return res.end(); // Always return 200 to Meta even if parsing fails to avoid retries
                }

                const { from, text } = parsedMsg;
                console.log(`\n=============================================================`);
                console.log(` 💬 [WHATSAPP CLOUD API] Message Received `);
                console.log(`=============================================================`);
                console.log(`From (Hashed ID): ${ConversationState.hashPhone(from)}`);
                console.log(`Content: "${text}"`);

                // 1. Consent Layer Check
                if (!ConsentManager.hasConsent(from)) {
                    if (text.toLowerCase() === 'yes') {
                        ConsentManager.recordConsent(from, 'GRANTED');
                        await MetaSender.sendMessage(from, CuriosityMessages.getGreeting());
                        res.writeHead(200);
                        return res.end();
                    } else if (text.toLowerCase() === 'no') {
                        ConsentManager.recordConsent(from, 'DENIED');
                        await MetaSender.sendMessage(from, "No problem! When you are ready to discover opportunities, just send 'Hello'.");
                        res.writeHead(200);
                        return res.end();
                    } else {
                        // First interaction - send Transparent Invitation
                        await MetaSender.sendMessage(from, ConsentManager.getInvitationMessage());
                        res.writeHead(200);
                        return res.end();
                    }
                }

                // Retrieve State and update interaction time for Retention Layer
                let session = ConversationState.getSession(from);
                session.lastInteraction = Date.now();

                if (session.state === 'DISCOVERY' && !text.toLowerCase().includes('need')) {
                    // Start of conversation greeting (if they say hi again instead of providing intent)
                    await MetaSender.sendMessage(from, CuriosityMessages.getGreeting());
                    res.writeHead(200);
                    return res.end();
                }

                // Intent Extraction
                let intent = MetaMessageParser.extractIntent(text, session.intentData);
                ConversationState.updateSession(from, { intentData: intent, state: 'QUALIFYING' });

                // Respond if information is missing
                if (intent.missing_information && intent.missing_information.length > 0) {
                    const nextQuestion = CuriosityMessages.getQualificationQuestion(intent.missing_information[0]);
                    await MetaSender.sendMessage(from, nextQuestion);
                    res.writeHead(200);
                    return res.end();
                }

                // If fully qualified, execute Opportunity generation
                console.log(`[GATEWAY] Intent Fully Qualified. Proceeding to Kernel...`);
                
                let crystal = { id: `CRYSTAL_${Date.now()}`, status: 'DISCOVERED' };
                crystal = Kernel.transitionState(crystal, 'QUALIFIED', 'SYSTEM');
                
                const matchInfo = V2MarketMatcher.generateMatch(intent);
                crystal.domain = intent.domain;
                crystal.material = matchInfo.target_material;
                
                crystal = Kernel.transitionState(crystal, 'VERIFIED', 'SYSTEM');
                ValueEngine.calculateValue(crystal, intent);

                if (matchInfo.graph_matches && matchInfo.graph_matches.length > 0) {
                    const partner = matchInfo.graph_matches[0];
                    crystal = Kernel.transitionState(crystal, 'MATCHED', 'SYSTEM');
                    
                    await MetaSender.sendMessage(from, CuriosityMessages.getMatchFoundMessage(partner.name));
                    
                    // Reset Session
                    ConversationState.clearSession(from);
                } else {
                    await MetaSender.sendMessage(from, "We couldn't find a verified partner matching this specific intent right now.");
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ status: "success" }));

            } catch (e) {
                console.error("[META GATEWAY ERROR]", e);
                res.writeHead(500);
                return res.end();
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`[AXIONYX CURIOSITY NODE] Meta WhatsApp Webhook listening on port ${PORT}`);
});
