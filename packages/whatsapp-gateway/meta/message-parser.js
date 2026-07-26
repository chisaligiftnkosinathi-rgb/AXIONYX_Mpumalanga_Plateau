const IntentParser = require('../../intent-engine/parser'); // Reuse the existing Intent Engine

class MetaMessageParser {
    static parseIncoming(payload) {
        try {
            // Meta WhatsApp Cloud API webhook structure
            const entry = payload.entry[0];
            const changes = entry.changes[0];
            const value = changes.value;
            const message = value.messages[0];

            return {
                from: message.from, // e.g., "27821234567"
                text: message.text.body,
                timestamp: message.timestamp
            };
        } catch (e) {
            console.error("[META PARSER] Error parsing webhook payload", e.message);
            return null;
        }
    }

    static extractIntent(text, currentContext) {
        // Use the core AXIONYX Intent Engine
        return IntentParser.parseMessage(text, currentContext);
    }
}
module.exports = MetaMessageParser;
