export interface StrategicMove {
  id: string;
  description: string;
  predictedOutcome: string;
}

export class MoveGenerator {
  public generateInterventions(): StrategicMove[] {
    return [
      {
        id: 'MOVE_01',
        description: 'Fund Ertiga Recovery + Connect to VUT Research',
        predictedOutcome: 'Restored Mobility Node + Intelligence Layer Added',
      },
      {
        id: 'MOVE_02',
        description: 'Expand Melokuhle Sampling into Community Training',
        predictedOutcome: 'Increased Capability Density + Human Formation',
      }
    ];
  }
}
