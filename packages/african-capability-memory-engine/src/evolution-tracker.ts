export class EvolutionTracker {
  public trackLineage(seed: string): string[] {
    // Example tracker returning the lineage of a capability
    if (seed === 'Siphanda Phansi') {
      return [
        'Siphanda Phansi',
        'Global IT',
        'AXIONYX',
        'African Intelligence Federation'
      ];
    }
    return [seed];
  }
}
