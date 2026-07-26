export interface NodeHealthMetrics {
    node: string;
    heartbeat: string;
    signals_processed: number;
    opportunities_created: number;
    evidence_quality: number;
}

export class NodeHealth {
    public static emit(metrics: NodeHealthMetrics): void {
        console.log(`[NodeHealth] Emitting health for ${metrics.node}:`, JSON.stringify(metrics));
    }
}
