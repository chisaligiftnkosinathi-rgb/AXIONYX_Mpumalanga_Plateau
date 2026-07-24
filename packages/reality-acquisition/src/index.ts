import { Observation } from '../../reasoning-engine/src';

export enum RealitySourceType {
  CAMERA_IMAGE = 'CAMERA_IMAGE',
  USER_INPUT = 'USER_INPUT',
  OBD2_SCAN = 'OBD2_SCAN',
  SERVICE_HISTORY = 'SERVICE_HISTORY',
  BOLT_AI_INSPECTION = 'BOLT_AI_INSPECTION'
}

export interface RealityInput {
  sourceId: string;
  sourceType: RealitySourceType;
  rawPayload: any;
}

export class RealityAcquisitionLayer {
  /**
   * Processes a structured Bolt AI inspection report.
   */
  public processBoltInspectionReport(input: RealityInput): Observation[] {
    if (input.sourceType !== RealitySourceType.BOLT_AI_INSPECTION) {
      throw new Error('Expected a BOLT_AI_INSPECTION source.');
    }

    const observations: Observation[] = [];
    const report = input.rawPayload;

    // Map Bolt damages to Domain Graph entities
    if (report.damages.includes('Front Passenger Bumper - Small scratch')) {
      observations.push({
        entityId: 'comp-bumper-cover',
        condition: 'Small scratch on front passenger side',
        confidence: 0.90
      });
    }
    
    // Add other damages based on the Bolt report payload
    // "Rear Passenger Bumper Small dent Small scratch"
    // "Passenger Front Seat Small tear"
    // "Rear Door Very small scratch"
    // "Passenger Fender Very small dent"
    // "Passenger Rocker Panel Very small dent"
    // "Passenger Front Door Very small scratch"
    // "Rear Seat Small tear"

    return observations;
  }
}
