import { ObservationEvent } from '../observation';
import { v4 as uuidv4 } from 'uuid';

export interface CameraInference {
  type: 'OBJECT_DETECTION' | 'LANE_DEPARTURE' | 'SPEED_LIMIT_SIGN';
  label: string;
  confidence: number;
  distanceMeters?: number;
  boundingBox?: { x: number, y: number, w: number, h: number };
}

/**
 * Adapter for a simulated Vehicle ADAS Camera (Bakkie)
 * Simulates computer vision inference on the edge.
 */
export class BakkieCameraAdapter {
  private readonly assetId = 'Bakkie_01';
  
  /**
   * Generates a random realistic ADAS inference
   */
  public generateInference(): CameraInference {
    const events: CameraInference[] = [
      {
        type: 'OBJECT_DETECTION',
        label: 'Pedestrian',
        confidence: 0.85 + (Math.random() * 0.1),
        distanceMeters: 12 + Math.floor(Math.random() * 15),
        boundingBox: { x: 45, y: 30, w: 10, h: 40 }
      },
      {
        type: 'OBJECT_DETECTION',
        label: 'Vehicle',
        confidence: 0.92 + (Math.random() * 0.05),
        distanceMeters: 25 + Math.floor(Math.random() * 30),
        boundingBox: { x: 35, y: 40, w: 30, h: 20 }
      },
      {
        type: 'LANE_DEPARTURE',
        label: 'Left Drift',
        confidence: 0.75 + (Math.random() * 0.2)
      },
      {
        type: 'SPEED_LIMIT_SIGN',
        label: '60 km/h',
        confidence: 0.98
      }
    ];
    
    // Pick a random event
    return events[Math.floor(Math.random() * events.length)];
  }

  /**
   * Converts the raw visual inference into a Canonical AXIONYX Observation
   */
  public produceObservations(): ObservationEvent[] {
    const inference = this.generateInference();
    const timestamp = new Date().toISOString();
    const batchId = uuidv4();
    
    return [
      {
        metadata: {
          eventType: 'EDGE_CV_INFERENCE',
          adapterId: 'Bakkie-ADAS-Simulator',
          version: '1.0'
        },
        payload: {
          id: `obs_${batchId}_vision`,
          occurredAt: timestamp,
          receivedAt: timestamp,
          source: 'Edge_Dashcam_V1',
          asset: this.assetId,
          measurement: inference.type,
          value: inference.label,
          unit: 'category',
          confidence: Math.round(inference.confidence * 100),
          provenance: 'Simulated Bakkie Camera Inference',
          checksum: 'TBD'
        },
        provenance: {
          origin: 'SIMULATOR',
          chainHashes: [batchId, 'vision']
        },
        evidenceStatus: 'PENDING_OVL'
      }
    ];
  }
}
