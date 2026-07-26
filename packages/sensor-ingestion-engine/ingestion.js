const crypto = require('crypto');

class SensorIngestionEngine {
    static ingestTelemetry(sensorData) {
        console.log(`[SENSOR_INGESTION] Receiving Telemetry Event from ${sensorData.source}...`);
        
        // 1. Raw Data
        console.log(` -> Parameter: ${sensorData.parameter} | Value: ${sensorData.value}`);
        
        // 2. Calibration Check (Mock)
        let calibrationValid = true; 
        console.log(` -> Calibration Check: ${calibrationValid ? 'PASSED' : 'FAILED'}`);

        // 3. Provenance Hashing
        const hash = crypto.createHash('sha256').update(JSON.stringify(sensorData)).digest('hex');
        console.log(` -> Provenance Hash: ${hash}`);

        // 4. Validation to Evidence
        if (calibrationValid) {
            console.log(`[EVIDENCE_LEDGER] Telemetry validated. Appending to Evidence Record.\n`);
            return {
                status: 'VALIDATED_EVIDENCE',
                hash: hash,
                measurement: sensorData
            };
        } else {
            console.log(`[SENSOR_INGESTION] Validation failed. Kept as RAW telemetry.\n`);
            return { status: 'RAW', hash: hash };
        }
    }
}
module.exports = SensorIngestionEngine;
