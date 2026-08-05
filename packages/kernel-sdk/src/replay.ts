export interface ReplayResult {
    eventsProcessed: number;
    duration: number;
    projectionHash: string;
    policyVersions: string[];
    success: boolean;
}
