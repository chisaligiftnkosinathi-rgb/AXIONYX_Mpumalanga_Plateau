const crypto = require('crypto');

class ConversationState {
    constructor() {
        // In-memory mock for Pilot (Replaces PostgreSQL table conversation_sessions)
        this.sessions = {}; 
    }

    hashPhone(phoneNumber) {
        return crypto.createHash('sha256').update(phoneNumber).digest('hex');
    }

    getSession(phoneNumber) {
        const hash = this.hashPhone(phoneNumber);
        if (!this.sessions[hash]) {
            this.sessions[hash] = {
                phone_hash: hash,
                state: 'DISCOVERY',
                domain: null,
                intentData: {}
            };
        }
        return this.sessions[hash];
    }

    updateSession(phoneNumber, updates) {
        const hash = this.hashPhone(phoneNumber);
        if (this.sessions[hash]) {
            this.sessions[hash] = { ...this.sessions[hash], ...updates };
        }
    }

    clearSession(phoneNumber) {
        const hash = this.hashPhone(phoneNumber);
        delete this.sessions[hash];
    }
}
module.exports = new ConversationState();
