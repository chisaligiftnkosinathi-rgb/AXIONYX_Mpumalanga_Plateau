export class NodeTelemetry {
    public static log(nodeId: string, event: string, payload: any): void {
        // Simple console telemetry for A65.1
        console.log(`[TELEMETRY][${nodeId}] ${event}:`, JSON.stringify(payload));
    }
}
