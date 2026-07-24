// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// apps/axionyx-studio/src/store/knowledge-store.ts

import { KnowledgeView } from '../../../../packages/studio-contracts/src/knowledge-view';

export class KnowledgeStore {
  currentKnowledge: KnowledgeView | null = null;
  
  updateKnowledge(newKnowledge: KnowledgeView) {
    this.currentKnowledge = newKnowledge;
    // trigger React component re-renders for the Knowledge Observatory
  }
}
