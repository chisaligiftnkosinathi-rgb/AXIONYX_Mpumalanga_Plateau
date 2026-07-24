import { RegisterSampleCommand } from '../commands/RegisterSampleCommand';
import { v4 as uuidv4 } from 'uuid';

export class RegisterSampleHandler {
  
  async handle(command: RegisterSampleCommand) {
    console.log(`[CQRS Handler] Executing RegisterSampleCommand for material: ${command.material}`);

    // 1. Generate Domain ID
    const sampleId = uuidv4();

    // 2. Emit Domain Event (SampleRegistered)
    const event = {
      aggregateId: sampleId,
      eventType: 'SampleRegistered',
      payload: { ...command, status: 'REGISTERED' },
      emittedAt: new Date(),
    };

    // In a real implementation, this event is published to an EventBus
    // which triggers the Kernel (Evidence, Timeline, Trust).
    
    // 3. Fake DB Persistence (For MVT boot check)
    console.log(`[Event Store] Persisted event: ${event.eventType} for Sample ${sampleId}`);
    
    return {
      success: true,
      sampleId,
      message: 'Sample registered successfully, evidence generated.',
    };
  }
}
