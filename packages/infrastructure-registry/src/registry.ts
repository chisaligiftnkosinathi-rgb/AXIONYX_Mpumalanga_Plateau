// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/infrastructure-registry/src/registry.ts

import { 
  IRealityBus, 
  IRealityWarehouse, 
  ITranslationLayer, 
  IDeploymentPlatform, 
  IRepositoryProvider 
} from '../../infrastructure-adapters/src/core/interfaces';

export class InfrastructureRegistry {
  private providers: Map<string, any> = new Map();

  register(name: string, providerInstance: any) {
    this.providers.set(name, providerInstance);
    console.log(`[Infrastructure Registry] Registered capabilities for provider: @axionyx/${name}`);
  }

  getTranslationLayer(providerName: string): ITranslationLayer {
    const provider = this.providers.get(providerName);
    if (!provider || !provider.translateExplanation) {
      throw new Error(`Provider ${providerName} does not implement ITranslationLayer`);
    }
    return provider as ITranslationLayer;
  }

  getRealityBus(providerName: string): IRealityBus {
    const provider = this.providers.get(providerName);
    if (!provider || !provider.ingestTelemetry) {
      throw new Error(`Provider ${providerName} does not implement IRealityBus`);
    }
    return provider as IRealityBus;
  }
}

export const registry = new InfrastructureRegistry();
