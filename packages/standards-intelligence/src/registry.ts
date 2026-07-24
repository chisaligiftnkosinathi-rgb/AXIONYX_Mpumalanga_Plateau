// AXIONYX STANDARDS INTELLIGENCE
// packages/standards-intelligence/src/registry.ts

export interface StandardManifest {
  id: string;
  title: string;
  publisher: string;
  domain: string[];
  objects: string[];
}

export class StandardsRegistry {
  private standards: Map<string, StandardManifest> = new Map();

  register(manifest: StandardManifest) {
    if (this.standards.has(manifest.id)) {
      throw new Error(`[Standards] Collision: Standard ${manifest.id} is already registered.`);
    }
    this.standards.set(manifest.id, manifest);
    console.log(`[Standards Registry] Registered Standard: ${manifest.id} (${manifest.publisher})`);
  }

  resolve(id: string): StandardManifest | undefined {
    return this.standards.get(id);
  }

  /**
   * Automatically determine which standards apply to a given object type.
   */
  getStandardsForObject(objectType: string): StandardManifest[] {
    const applicable: StandardManifest[] = [];
    for (const [_, manifest] of this.standards) {
      if (manifest.objects.includes(objectType)) {
        applicable.push(manifest);
      }
    }
    return applicable;
  }
}

export const axionyxStandardsRegistry = new StandardsRegistry();
