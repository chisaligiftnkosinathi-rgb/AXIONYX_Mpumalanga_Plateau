async function testMetaWebhook() {
    console.log("Starting Meta WhatsApp Webhook Simulation...");

    function generateMetaPayload(messageText) {
        return {
            "object": "whatsapp_business_account",
            "entry": [
                {
                    "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",
                    "changes": [
                        {
                            "value": {
                                "messaging_product": "whatsapp",
                                "metadata": {
                                    "display_phone_number": "16505551111",
                                    "phone_number_id": "1234567890"
                                },
                                "messages": [
                                    {
                                        "from": "27821234567",
                                        "id": "wamid.HBgL...",
                                        "timestamp": Date.now().toString(),
                                        "text": {
                                            "body": messageText
                                        },
                                        "type": "text"
                                    }
                                ]
                            },
                            "field": "messages"
                        }
                    ]
                }
            ]
        };
    }

    // Turn 1: Greeting
    await fetch('http://localhost:3000/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(generateMetaPayload("Hello"))
    });

    // Turn 2: User intent
    await fetch('http://localhost:3000/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(generateMetaPayload("I need quality aluminium"))
    });

    // Turn 3: User answers missing info
    await fetch('http://localhost:3000/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(generateMetaPayload("for battery research, 2 tonnes in Pretoria"))
    });
}

testMetaWebhook();
