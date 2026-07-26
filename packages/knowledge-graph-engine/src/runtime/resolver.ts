import { PackRegistry } from './registry';
import { KnowledgePack } from '../schemas/pack.schema';

export class KnowledgeResolver {
  constructor(private registry: PackRegistry) {}

  loadPack(pack: KnowledgePack): void {
    this.registry.install(pack);
  }

  resolveDependencies(): void {
    this.registry.resolveDependencies();
  }
}
