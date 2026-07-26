import { KnowledgeGraph, KnowledgeNode } from '../schemas/engine.schema';

export interface AuthenticationResult {
  isAuthenticated: boolean;
  actorId: string;
  identityId?: string;
  credentialIds: string[];
}

export class TrustEngine {
  constructor(private graph: KnowledgeGraph) {}

  authenticate(actorId: string, credentialType: string): AuthenticationResult {
    const actor = this.graph.getNode(actorId);
    if (!actor) throw new Error(`Actor not found: ${actorId}`);

    const authEdges = this.graph.getEdgesFrom(actorId).filter(e => e.type === 'authenticated_as');
    if (authEdges.length === 0) {
      return { isAuthenticated: false, actorId, credentialIds: [] };
    }

    const identityId = authEdges[0].targetId;
    // For demo purposes, we will assume if the actor has an identity, they are authenticated via some credential
    const credentialEdges = this.graph.getEdgesFrom(identityId).filter(e => e.type === 'verified_by');
    
    return {
      isAuthenticated: true,
      actorId,
      identityId,
      credentialIds: credentialEdges.map(e => e.targetId)
    };
  }

  verifySubmission(submissionNode: KnowledgeNode): boolean {
    // In a real system, verify the cryptographic signature in the metadata 
    // against the actor's credential public key.
    // For AXIONYX Governance v1.0, we just check if it has a linked verified_by edge
    const edges = this.graph.getEdgesFrom(submissionNode.id).filter(e => e.type === 'verified_by');
    return edges.length > 0;
  }
}
