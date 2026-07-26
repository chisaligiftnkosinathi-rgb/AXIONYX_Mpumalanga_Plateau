function loadOpportunities() {
    const listContainer = document.getElementById('opportunity-list');
    let leads = JSON.parse(localStorage.getItem('madcars_leads') || '[]');

    if (leads.length === 0) {
        listContainer.innerHTML = `<div class="empty-state">No new opportunities at the moment.</div>`;
        return;
    }

    listContainer.innerHTML = '';
    
    // Sort newest first
    leads.reverse().forEach((lead, index) => {
        const card = document.createElement('div');
        card.className = 'opportunity-card';
        card.innerHTML = `
            <div class="opp-header">
                <h3 class="opp-title">🚗 NEW OPPORTUNITY</h3>
                <div class="opp-lead-value">Lead Value: R${lead.leadValue}</div>
            </div>
            <div class="opp-details">
                <p><strong>Customer Goal:</strong> <span class="highlight-val">${lead.intent.toUpperCase()}</span></p>
                <p><strong>Specific Need:</strong> <span class="highlight-val">${lead.subIntent.replace('_', ' ').toUpperCase()}</span></p>
                <p><strong>Recommended:</strong> <span class="highlight-val">${lead.matchedVehicle}</span></p>
                <p><strong>Match Confidence:</strong> <span class="highlight-val" style="color: #00ffcc">${(lead.confidence * 100).toFixed(0)}%</span></p>
            </div>
            <div class="action-bar">
                <button class="btn btn-accept" onclick="respondLead(${index}, 'accept')">Accept Opportunity</button>
                <button class="btn btn-request" onclick="respondLead(${index}, 'request')">Request Info</button>
                <button class="btn btn-decline" onclick="respondLead(${index}, 'decline')">Decline</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

function respondLead(index, action) {
    let leads = JSON.parse(localStorage.getItem('madcars_leads') || '[]');
    // Real arrays would be reversed back to find correct index, but for demo we just clear it all or pop it.
    // For the UI demo, we will just remove the specific lead from the storage array.
    
    // Convert visually reversed index to real array index
    const realIndex = (leads.length - 1) - index;
    
    leads.splice(realIndex, 1);
    localStorage.setItem('madcars_leads', JSON.stringify(leads));

    if (action === 'accept') {
        alert("Opportunity Accepted! AXIONYX has securely bridged the connection. 1% Success fee triggered upon transaction.");
    } else if (action === 'request') {
        alert("Information Request sent back through the Chappies intent engine.");
    } else {
        alert("Opportunity Declined. AXIONYX will re-route to the next trusted partner in the graph.");
    }

    loadOpportunities();
}

// Load on start
loadOpportunities();

// Poll for updates every 2 seconds to simulate live websocket push
setInterval(loadOpportunities, 2000);
