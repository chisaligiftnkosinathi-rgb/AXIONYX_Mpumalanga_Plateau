// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// apps/axionyx-studio/src/store/world-store.ts

// A mock store representing Zustand or Redux state
import { WorldView } from '../../../../packages/studio-contracts/src/world-view';

export class WorldStore {
  currentWorld: WorldView | null = null;
  
  updateWorld(newWorld: WorldView) {
    this.currentWorld = newWorld;
    // trigger React component re-renders
  }
}
