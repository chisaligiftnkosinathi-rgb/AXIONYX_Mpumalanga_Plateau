import * as mqtt from 'mqtt';

const MQTT_URL = process.env.MQTT_URL || 'mqtt://localhost:1883';
const INSTRUMENT_ID = 'ICPMS-AGILENT-7900-01';

console.log(`[Simulator] Connecting to ${MQTT_URL}`);
const client = mqtt.connect(MQTT_URL);

client.on('connect', () => {
  console.log(`[Simulator] Connected to MQTT broker. Simulating Instrument: ${INSTRUMENT_ID}`);
  
  // Publish telemetry every 5 seconds
  setInterval(() => {
    const telemetry = {
      instrumentId: INSTRUMENT_ID,
      timestamp: new Date().toISOString(),
      healthScore: Math.floor(Math.random() * 5) + 95, // 95-99%
      argonFlow: 14.9 + (Math.random() * 0.2), // L/min
      rfPower: 1550 + (Math.random() * 10), // Watts
      vacuum: 1.5e-5 + (Math.random() * 0.1e-5), // Torr
      torchHours: 420.5,
      drift: (Math.random() * 0.05).toFixed(3) // %
    };

    client.publish(`axionyx/telemetry/instruments/${INSTRUMENT_ID}`, JSON.stringify(telemetry));
    console.log(`[Simulator] Published Telemetry:`, telemetry);
  }, 5000);
});
