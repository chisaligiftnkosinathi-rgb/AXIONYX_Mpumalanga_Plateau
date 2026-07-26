class RetentionEngine {
    constructor(conversationState) {
        this.state = conversationState;
        this.ACTIVE_RETENTION_DAYS = 30;
    }

    runPurgeCycle() {
        console.log("[RETENTION ENGINE] Running Progressive Memory Purge Cycle...");
        const now = Date.now();
        const thirtyDaysMs = this.ACTIVE_RETENTION_DAYS * 24 * 60 * 60 * 1000;
        
        let purgedCount = 0;

        for (const [hash, session] of Object.entries(this.state.sessions)) {
            // Note: session.lastInteraction logic added here for the purge
            if (session.lastInteraction && (now - session.lastInteraction > thirtyDaysMs)) {
                console.log(`[RETENTION ENGINE] Purging stale session: ${hash}`);
                delete this.state.sessions[hash];
                purgedCount++;
            }
        }
        
        console.log(`[RETENTION ENGINE] Cycle Complete. Purged ${purgedCount} sessions (Layer 1 enforcement). Layer 2 & 3 anonymised metrics preserved.`);
    }
}
module.exports = RetentionEngine;
