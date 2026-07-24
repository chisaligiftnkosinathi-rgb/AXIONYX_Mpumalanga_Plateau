// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-contracts/src/knowledge-view.ts

import { PrincipleView } from './principle-view';

/**
 * Visual primitive representing "What has AXIONYX learned?"
 * Renders the overall Knowledge Graph view.
 */
export interface KnowledgeView {
  domainId: string; // e.g. "Water Intelligence"
  principles: PrincipleView[];
  connections: { sourcePrincipleId: string; targetPrincipleId: string; label: string }[];
}
