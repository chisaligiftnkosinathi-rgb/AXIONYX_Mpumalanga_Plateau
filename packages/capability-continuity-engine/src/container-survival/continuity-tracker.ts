export class ContinuityTracker {
  /**
   * Proves the Capability Continuity Law: "Organizations are containers. Capability migrates."
   * Even if a legal entity's survival metric hits 0, the capability continuity metric remains high 
   * if knowledge and relationships migrate to new nodes.
   */
  public calculateContinuity(
    legalEntityStatus: 'Active' | 'Dissolved',
    migratedKnowledgeCount: number,
    migratedRelationshipsCount: number,
    newNodesSpawned: number
  ) {
    const containerSurvival = legalEntityStatus === 'Active' ? 100 : 0;
    
    // Capability continuity is independent of container survival
    const knowledgeSurvivalScore = Math.min(migratedKnowledgeCount * 20, 100);
    const relationshipSurvivalScore = Math.min(migratedRelationshipsCount * 25, 100);
    const emergenceScore = Math.min(newNodesSpawned * 33.3, 100);

    const capabilityContinuity = (knowledgeSurvivalScore + relationshipSurvivalScore + emergenceScore) / 3;

    return {
      containerSurvival,
      capabilityContinuity: Math.round(capabilityContinuity)
    };
  }
}
