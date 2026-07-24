// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-core/src/schemas/publication.ts

export interface Publication {
  id: string;
  projectId: string;
  title: string;
  authors: string[];
  validatedPrinciples: string[];
  failedHypotheses: string[];
  worldModelVersion: string;
}
