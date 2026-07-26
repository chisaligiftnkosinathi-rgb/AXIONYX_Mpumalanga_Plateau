import * as fs from 'fs';
import * as path from 'path';
import { BalancedSensor } from '../sensor-engineering/balanced-sensor';

async function run() {
  console.log("Starting AXIONYX Environmental Intelligence v0.1");
  
  const basePath = path.resolve(__dirname, '../../../../packages/experience/src/demo-data');
  const waterData = JSON.parse(fs.readFileSync(path.join(basePath, 'water-cycle-001.json'), 'utf8'));
  const sensorData = JSON.parse(fs.readFileSync(path.join(basePath, 'iot-sensor-design-001.json'), 'utf8'));
  const calibData = JSON.parse(fs.readFileSync(path.join(basePath, 'calibration-record-001.json'), 'utf8'));

  console.log(\`\\n[WATER CYCLE]\\nState: \${waterData.states[1].state}\\nLocation: \${waterData.environment.location}\`);

  // Observe
  const rawMeasurement = sensorData.measurements[0];
  console.log(\`\\n[SENSOR REALITY]\\nSensor \${sensorData.sensor} observes \${rawMeasurement.parameter} = \${rawMeasurement.value} (Confidence: UNKNOWN)\`);

  // Apply Calibration Engine (Balanced Truth Sensor)
  const trustedObservation = BalancedSensor.generateObservation(rawMeasurement, calibData);
  
  console.log(\`\\n[CALIBRATION INTELLIGENCE]\\nReference: \${calibData.reference_standard}\\nOffset Applied: \${calibData.offset}\`);
  console.log(\`\\n[BALANCED TRUTH SENSOR OUTPUT]\\nParameter: \${trustedObservation.parameter}\\nValue: \${trustedObservation.corrected_value}\\nConfidence: \${trustedObservation.confidence}\\nEvidence: \${trustedObservation.evidence.join(', ')}\`);

  // Output Artifact
  const outDir = path.resolve(__dirname, '../../../../dist/environmental-demo');
  fs.mkdirSync(outDir, { recursive: true });
  
  const outputText = \`AXIONYX TRUSTED SENSOR REPORT\\n\\nState: \${waterData.states[1].state}\\n\\nMeasurement: \${trustedObservation.parameter} = \${trustedObservation.corrected_value}\\nConfidence: \${trustedObservation.confidence}\\nEvidence: \${trustedObservation.evidence.join(', ')}\`;
  fs.writeFileSync(path.join(outDir, 'trusted-sensor-report.txt'), outputText, 'utf8');

  console.log(\`\\nExecution Complete. Artifact written to dist/environmental-demo/trusted-sensor-report.txt\`);
}

run().catch(console.error);
