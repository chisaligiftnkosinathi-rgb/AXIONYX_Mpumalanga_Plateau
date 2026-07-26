import { Demonstration } from './demonstration.schema';

export class DemonstrationReplay {
  static generateWaterDemo(waterRealityId: string, sensorId: string, calibrationId: string): Demonstration {
    return {
      id: "WATER-DEMO-001",
      title: "From Rainfall to Trusted Decision",
      realityReference: waterRealityId,
      replayEnabled: true,
      scenes: [
        { title: "Water enters ecosystem", evidence: [waterRealityId], explanation: "Physical state transition observed." },
        { title: "Sensor measures quality", evidence: [sensorId], explanation: "Raw data collected, but trust is UNKNOWN." },
        { title: "Calibration proves measurement trust", evidence: [calibrationId], explanation: "Cryptographic link to reference standard established." }
      ]
    };
  }
}
