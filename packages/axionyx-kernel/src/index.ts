// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/axionyx-kernel/src/index.ts

export class RuntimeContext {
  public id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export class EngineRegistry {
  private engines: Map<string, any> = new Map();
  register(name: string, engine: any) {
    this.engines.set(name, engine);
  }
  get(name: string) {
    return this.engines.get(name);
  }
}

export class MemoryRegistry {
  private adapters: Map<string, any> = new Map();
  register(storeType: string, adapter: any) {
    this.adapters.set(storeType, adapter);
  }
  get(storeType: string) {
    return this.adapters.get(storeType);
  }
}

export class EventBus {
  publish(topic: string, event: any) {
    console.log(`[EventBus] ${topic}:`, event);
  }
}

export class Configuration {
  static load() {
    return { environment: process.env.NODE_ENV || 'development' };
  }
}

export class PluginLoader {
  static loadPlugins() {
    console.log('[PluginLoader] Loading external plugins...');
  }
}

export const Kernel = {
  Context: new RuntimeContext('kernel-v1'),
  Engines: new EngineRegistry(),
  Memory: new MemoryRegistry(),
  Events: new EventBus(),
  Config: Configuration.load()
};
