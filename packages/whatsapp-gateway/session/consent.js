const crypto = require('crypto');

class ConsentManager {
    constructor() {
        // Simulated Database for Pilot (Replaces PostgreSQL consent_events)
        this.consentRecords = {};
    }

    hashPhone(phoneNumber) {
        return crypto.createHash('sha256').update(phoneNumber).digest('hex');
    }

    hasConsent(phoneNumber) {
        const hash = this.hashPhone(phoneNumber);
        return this.consentRecords[hash] === 'GRANTED';
    }

    recordConsent(phoneNumber, status) {
        const hash = this.hashPhone(phoneNumber);
        this.consentRecords[hash] = status; // 'GRANTED' or 'DENIED'
        
        console.log(`[CONSENT LAYER] Event Recorded: ${status} for actor ${hash}`);
        return hash;
    }

    getInvitationMessage() {
        return "🍬 Hey Chappies! 👋\nDid you know you can find exactly what you need — cars, materials, services, and opportunities — through verified partners?\n\nI can help you discover options based on what you need.\n\nBefore we start, may I ask a few questions to understand your request?\n\nReply:\n✅ YES — help me find something\n❌ NO — maybe later";
    }
}

module.exports = new ConsentManager();
