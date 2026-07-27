export type LogSeverity = 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | 'DEBUG';
export type LogStatus = 'SUCCESS' | 'FAILED' | 'PENDING';

export interface CanonicalLogEvent {
  timestamp: string;
  stage: string;
  eventId: string;
  correlationId: string;
  component: string;
  severity: LogSeverity;
  status: LogStatus;
  durationMs: number;
  message: string;
  metadata?: any;
}

export class Logger {
  public static log(event: Omit<CanonicalLogEvent, 'timestamp'>): CanonicalLogEvent {
    const logEntry: CanonicalLogEvent = {
      timestamp: new Date().toISOString(),
      ...event
    };
    
    // In production this would write to stdout/stderr in JSON format
    // For now we just stringify and output to console
    console.log(JSON.stringify(logEntry));
    return logEntry;
  }
}
