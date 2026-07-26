import { PackManifest, KnowledgePack } from '../schemas/pack.schema';

export class PackRegistry {
  private installedPacks: Map<string, KnowledgePack> = new Map();

  install(pack: KnowledgePack): void {
    if (this.installedPacks.has(pack.manifest.id)) {
      throw new Error(`Pack ${pack.manifest.id} is already installed.`);
    }
    this.installedPacks.set(pack.manifest.id, pack);
  }

  getPack(id: string): KnowledgePack | undefined {
    return this.installedPacks.get(id);
  }

  getAllPacks(): KnowledgePack[] {
    return Array.from(this.installedPacks.values());
  }

  resolveDependencies(): void {
    for (const pack of this.installedPacks.values()) {
      for (const dep of pack.manifest.dependencies) {
        if (!this.installedPacks.has(dep.id)) {
          throw new Error(`Missing dependency: ${pack.manifest.id} requires ${dep.id}`);
        }
        // Basic version check (in reality, semver matching)
        const installedDep = this.installedPacks.get(dep.id)!;
        if (!installedDep.manifest.version.startsWith(dep.version.replace('^', ''))) {
          throw new Error(`Version mismatch: ${pack.manifest.id} requires ${dep.id}@${dep.version}, found ${installedDep.manifest.version}`);
        }
      }
    }
  }
}
