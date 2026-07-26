async function runSimulation() {
    console.log("Starting Live Pilot HTTP Simulation...");

    // Turn 1
    let response = await fetch('http://localhost:3000/api/opportunity/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fromNumber: '+27821234567',
            messageBody: 'I need quality aluminium'
        })
    });
    console.log("\n[TURN 1 RESPONSE]", await response.json());

    // Turn 2
    response = await fetch('http://localhost:3000/api/opportunity/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fromNumber: '+27821234567',
            messageBody: 'for battery research'
        })
    });
    console.log("\n[TURN 2 RESPONSE]", await response.json());

    // Turn 3
    response = await fetch('http://localhost:3000/api/opportunity/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fromNumber: '+27821234567',
            messageBody: '2 tonnes in Pretoria'
        })
    });
    console.log("\n[TURN 3 RESPONSE]", await response.json());
}

runSimulation();
