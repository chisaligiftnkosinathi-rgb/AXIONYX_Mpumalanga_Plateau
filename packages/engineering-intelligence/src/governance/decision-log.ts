import { EngineeringEvent } from '../schemas/engineering-event.schema';

export class DecisionLog {
  static extractLearnings(events: EngineeringEvent[]) {
    return events.filter(e => e.type === 'learning_event');
  }
}
