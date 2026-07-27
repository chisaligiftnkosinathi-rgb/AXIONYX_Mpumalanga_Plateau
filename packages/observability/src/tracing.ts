import { v4 as uuidv4 } from 'uuid';

export class Tracing {
  public static generateCorrelationId(): string {
    return uuidv4();
  }
}
