// Simulator logic for the Live Event Stream

const streamContainer = document.getElementById('stream-content');
let oppCount = 127;
let econFlow = 850000;
let waConvs = 93;

const mockEvents = [
    {
        title: '🍬 WhatsApp Intent Detected',
        details: { Domain: 'Vehicle', Purpose: 'Income Generation' },
        color: '#F4A261'
    },
    {
        title: '🧠 Matching Complete',
        details: { Vehicle: 'Suzuki Ertiga', Confidence: '91%' },
        color: '#00ffcc'
    },
    {
        title: '🤝 Partner Connected',
        details: { Partner: 'Mad Cars', Action: 'Lead Transmitted' },
        color: '#2E8B57'
    },
    {
        title: '🌐 Web Opportunity Created',
        details: { Source: 'axionyx.co.za', Domain: 'Materials - Aluminium' },
        color: '#4682B4'
    },
    {
        title: '🏭 Industrial Telemetry',
        details: { Sensor: 'Mpumalanga-01', Impact: '+0.02' },
        color: '#008B8B'
    }
];

function formatTime(date) {
    return date.toTimeString().split(' ')[0];
}

function addEventToStream() {
    // Pick random event
    const event = mockEvents[Math.floor(Math.random() * mockEvents.length)];
    
    const eventDiv = document.createElement('div');
    eventDiv.className = 'stream-event';
    eventDiv.style.borderLeftColor = event.color;

    let detailsHtml = '';
    for (const [key, value] of Object.entries(event.details)) {
        detailsHtml += `<div class="stream-detail"><span class="key">${key}:</span> ${value}</div>`;
    }

    eventDiv.innerHTML = `
        <div class="stream-time">${formatTime(new Date())}</div>
        <div class="stream-title" style="color: ${event.color}">${event.title}</div>
        ${detailsHtml}
    `;

    streamContainer.prepend(eventDiv);

    // Keep only last 20 events
    if (streamContainer.children.length > 20) {
        streamContainer.removeChild(streamContainer.lastChild);
    }

    // Occasionally bump top metrics
    if (Math.random() > 0.7) {
        oppCount++;
        econFlow += Math.floor(Math.random() * 500) + 100;
        document.getElementById('total-opps').innerText = oppCount;
        document.getElementById('econ-flow').innerText = 'R' + econFlow.toLocaleString();
    }
    
    if (event.title.includes('WhatsApp')) {
        waConvs++;
        document.getElementById('wa-convs').innerText = waConvs;
    }
}

// Fire an event every 2.5 to 5 seconds
setInterval(addEventToStream, 3500);

// Initialize with a few events
for(let i=0; i<4; i++) {
    addEventToStream();
}
