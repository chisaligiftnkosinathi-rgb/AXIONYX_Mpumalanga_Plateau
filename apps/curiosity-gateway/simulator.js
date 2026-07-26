const IntentParser = require('../../packages/intent-engine/parser');
const MarketMatcher = require('../../packages/market-intelligence-engine/matcher');
const Kernel = require('../../packages/opportunity-exchange-kernel/kernel');
const SupplierGraph = require('../../packages/trusted-supplier-graph/graph');
const ValueEngine = require('../../packages/opportunity-value-engine/calculator');
const RevenueEngine = require('../../packages/revenue-engine/billing');

class FullPipelineSimulator {
    static run() {
        console.log("=============================================================");
        console.log(" A63.3 - OPPORTUNITY EXCHANGE LAYER (Full Pipeline Simulator)");
        console.log("=============================================================\n");

        console.log("[BOT] 👋 Welcome to Chappies. What do you need today?\n");

        let userMessage = "I need quality material A and B.";
        console.log(`[USER] ${userMessage}\n`);

        // 1. DISCOVERED & 2. QUALIFIED
        let intent = IntentParser.parseMessage(userMessage);
        let crystal = { id: `CRYSTAL_MAT_${Math.floor(Math.random() * 1000)}`, status: 'DISCOVERED' };
        crystal = Kernel.transitionState(crystal, 'QUALIFIED', 'SYSTEM', 'Intent parsed successfully');
        console.log('');

        // Multi-turn Qualification
        console.log(`[BOT] What will you use the material for?\n`);
        userMessage = "Manufacturing";
        console.log(`[USER] ${userMessage}\n`);
        intent = IntentParser.parseMessage(userMessage, intent);
        console.log('');

        console.log(`[BOT] What quantity do you need?\n`);
        userMessage = "2 tonnes monthly";
        console.log(`[USER] ${userMessage}\n`);
        intent = IntentParser.parseMessage(userMessage, intent);
        intent.urgency = 'high'; // Assuming urgent for manufacturing mock
        console.log('');

        // 3. VERIFIED
        const matchInfo = MarketMatcher.generateMatch(intent);
        crystal.domain = intent.domain;
        crystal.material = matchInfo.target_material;
        crystal.actors_matched = matchInfo.graph_matches.length;
        crystal = Kernel.transitionState(crystal, 'VERIFIED', 'SYSTEM', 'Material specifications verified against Knowledge Graph');
        console.log('');

        // 4. VALUE ESTIMATION
        ValueEngine.calculateValue(crystal, intent);
        console.log('');

        // 5. MATCHED (Trusted Supplier Graph)
        const suppliers = SupplierGraph.getVerifiedSuppliers(crystal);
        if (suppliers.length > 0) {
            crystal = Kernel.transitionState(crystal, 'MATCHED', 'SYSTEM', `Matched with ${suppliers.length} verified suppliers`);
            console.log(`\n[BOT] I found ${suppliers.length} verified suppliers and 1 testing laboratory. Would you like introductions?\n`);
            console.log(`[USER] Yes.\n`);

            // 6. CONNECTED & FULFILLED (Revenue Trigger)
            crystal = Kernel.transitionState(crystal, 'CONNECTED', 'SYSTEM', `Introductions sent to Supplier ${suppliers[0].id}`);
            console.log('');
            RevenueEngine.generateTransaction(crystal, suppliers[0]);
            
            console.log('');
            crystal = Kernel.transitionState(crystal, 'FULFILLED', 'SYSTEM', 'Transaction completed successfully');
            crystal = Kernel.transitionState(crystal, 'LEARNED', 'SYSTEM', 'Opportunity archived to Economic Memory');
        }
    }
}

FullPipelineSimulator.run();
