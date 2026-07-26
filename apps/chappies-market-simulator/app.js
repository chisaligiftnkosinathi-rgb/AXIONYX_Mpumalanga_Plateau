let vehiclesDb = [];
let currentSession = {
    primaryIntent: null,
    subIntent: null,
    matchedVehicle: null
};

// Sub-intent mappings
const subIntentQuestions = {
    'income': {
        text: 'The best car depends on how you plan to earn. How will you use it?',
        options: [
            { id: 'bolt_uber', label: '🚕 Bolt/Uber' },
            { id: 'deliveries', label: '📦 Deliveries' },
            { id: 'passenger_transport', label: '👥 Passenger Transport' },
            { id: 'small_business', label: '🏪 Small Business' }
        ]
    },
    'family': {
        text: 'Family comes first. What is your priority?',
        options: [
            { id: 'safety_space', label: '🛡️ Safety & Space' },
            { id: 'school_runs', label: '🎒 School Runs' }
        ]
    },
    'business': {
        text: 'Efficiency drives business. What are you moving?',
        options: [
            { id: 'heavy_goods', label: '🏗️ Heavy Goods' },
            { id: 'light_deliveries', label: '📦 Light Parcels' }
        ]
    },
    'transport_people': {
        text: 'How many people do you need to move?',
        options: [
            { id: 'minibus', label: '🚌 10+ People' },
            { id: 'shuttle', label: '🚐 4-7 People' }
        ]
    }
};

// Load DB
fetch('./data/vehicles.json')
    .then(res => res.json())
    .then(data => vehiclesDb = data)
    .catch(err => console.error("Could not load vehicles data", err));

function showStep(stepId) {
    document.querySelectorAll('.step-card').forEach(el => el.classList.add('hidden'));
    document.getElementById(stepId).classList.remove('hidden');
}

function selectPrimaryIntent(intentId) {
    currentSession.primaryIntent = intentId;
    
    // Configure Step 2
    const config = subIntentQuestions[intentId] || subIntentQuestions['income'];
    document.getElementById('dynamic-question').innerText = config.text;
    
    const btnContainer = document.getElementById('sub-intent-buttons');
    btnContainer.innerHTML = '';
    
    config.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.label;
        btn.onclick = () => selectSubIntent(opt.id);
        btnContainer.appendChild(btn);
    });

    showStep('step-2');
}

function selectSubIntent(subId) {
    currentSession.subIntent = subId;
    runIntelligenceMatch();
}

function runIntelligenceMatch() {
    // Basic array filter based on JSON rules
    let possibleMatches = vehiclesDb.filter(v => v.purpose.includes(currentSession.primaryIntent));
    if (possibleMatches.length === 0) possibleMatches = vehiclesDb; // fallback
    
    // Sort by sub-purpose match if possible
    possibleMatches.sort((a, b) => {
        let aScore = a.sub_purpose && a.sub_purpose.includes(currentSession.subIntent) ? 1 : 0;
        let bScore = b.sub_purpose && b.sub_purpose.includes(currentSession.subIntent) ? 1 : 0;
        return bScore - aScore;
    });

    const match = possibleMatches[0];
    currentSession.matchedVehicle = match;

    // Render Step 3
    document.getElementById('result-vehicle-name').innerText = `🚗 ${match.name}`;
    document.getElementById('result-confidence').innerText = `${(match.base_confidence * 100).toFixed(0)}%`;
    document.getElementById('result-partner').innerText = match.partner;
    
    const ul = document.getElementById('result-features');
    ul.innerHTML = '';
    match.features.forEach(f => {
        const li = document.createElement('li');
        li.innerText = `✓ ${f}`;
        ul.appendChild(li);
    });

    showStep('step-3');
}

function sendToPartner() {
    // Simulate sending lead to Mad Cars dashboard via localStorage (since it's a static demo)
    const leadData = {
        id: `OPP_${Date.now()}`,
        intent: currentSession.primaryIntent,
        subIntent: currentSession.subIntent,
        matchedVehicle: currentSession.matchedVehicle.name,
        confidence: currentSession.matchedVehicle.base_confidence,
        partner: currentSession.matchedVehicle.partner,
        leadValue: 500,
        timestamp: new Date().toISOString()
    };

    let leads = JSON.parse(localStorage.getItem('madcars_leads') || '[]');
    leads.push(leadData);
    localStorage.setItem('madcars_leads', JSON.stringify(leads));

    alert("Opportunity securely transmitted to Mad Cars! They will contact you shortly.");
    window.location.reload();
}
