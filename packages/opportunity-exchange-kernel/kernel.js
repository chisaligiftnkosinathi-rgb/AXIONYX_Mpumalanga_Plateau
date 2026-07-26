class OpportunityExchangeKernel {
    static transitionState(crystal, newState, actor, notes = "") {
        const validStates = ['DISCOVERED', 'QUALIFIED', 'VERIFIED', 'MATCHED', 'CONNECTED', 'FULFILLED', 'LEARNED'];
        
        if (!validStates.includes(newState)) {
            throw new Error(`Invalid opportunity state: ${newState}`);
        }

        console.log(`[OPPORTUNITY KERNEL] Crystal ${crystal.id} transitioned to: ${newState}`);
        if (notes) console.log(` -> Note: ${notes}`);

        crystal.status = newState;
        return crystal;
    }
}
module.exports = OpportunityExchangeKernel;
