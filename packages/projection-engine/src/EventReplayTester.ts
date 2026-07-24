import { ProjectionEngine } from './ProjectionEngine';

export class EventReplayTester {
  constructor(private engine: ProjectionEngine) {}

  /**
   * Evaluates the integrity of the Projection Engine by capturing the current state,
   * completely destroying the read models, replaying the event store, and 
   * asserting that the newly rebuilt state matches the original byte-for-byte.
   */
  async assertByteForByteReplayIntegrity(projectionName: string): Promise<boolean> {
    console.log(`[EventReplayTester] Initiating integrity check for '${projectionName}'...`);
    
    // 1. Capture current state
    const originalState = JSON.stringify(this.engine.getProjection(projectionName));
    
    // 2. Destroy read models and replay
    await this.engine.rebuildAllFromHistory();
    
    // 3. Capture rebuilt state
    const rebuiltState = JSON.stringify(this.engine.getProjection(projectionName));
    
    // 4. Validate Byte-for-Byte equivalence
    const isValid = originalState === rebuiltState;
    
    if (isValid) {
      console.log(`[EventReplayTester] PASSED: Rebuilt state is byte-for-byte identical.`);
    } else {
      console.error(`[EventReplayTester] FAILED: Divergence detected during replay.`);
      console.error(`Original: ${originalState}`);
      console.error(`Rebuilt:  ${rebuiltState}`);
    }
    
    return isValid;
  }
}
