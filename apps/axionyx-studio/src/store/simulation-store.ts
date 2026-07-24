// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// apps/axionyx-studio/src/store/simulation-store.ts

export class SimulationStore {
  isPlaying: boolean = false;
  currentTick: number = 0;

  togglePlayback() {
    this.isPlaying = !this.isPlaying;
  }

  setTick(tick: number) {
    this.currentTick = tick;
    // Signal the ReplayEngine to fetch the WorldView at this tick
  }
}
