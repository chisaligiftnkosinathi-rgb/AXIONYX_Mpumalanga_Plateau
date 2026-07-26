import { ReasoningCapability, ReflectionCapability, TeacherCapability, ResearcherCapability, SynthesizerCapability, ModelerCapability } from '../schemas/primitives.schema';

export interface OSPlugin {
  name: string;
  version: string;
  domain: string;
  initialize: () => void;
  registerTwinHandlers: () => void;
}

export class PluginManager {
  private plugins: Map<string, OSPlugin> = new Map();

  register(plugin: OSPlugin): void {
    if (this.plugins.has(plugin.name)) {
      throw new Error(`Plugin ${plugin.name} is already registered.`);
    }
    
    plugin.initialize();
    plugin.registerTwinHandlers();
    
    this.plugins.set(plugin.name, plugin);
    console.log(`[AXIONYX-OS] Registered Plugin: ${plugin.name} v${plugin.version} for domain: ${plugin.domain}`);
  }

  getPlugin(name: string): OSPlugin | undefined {
    return this.plugins.get(name);
  }

  listPlugins(): OSPlugin[] {
    return Array.from(this.plugins.values());
  }

  // Capability Management
  private reasoningCapabilities: ReasoningCapability[] = [];
  private reflectionCapabilities: ReflectionCapability[] = [];

  registerReasoningCapability(capability: ReasoningCapability): void {
    this.reasoningCapabilities.push(capability);
    console.log(`[PluginManager] Registered Reasoning Capability: ${capability.name}`);
  }

  resolveReasoningCapabilities(domain: string): ReasoningCapability[] {
    return this.reasoningCapabilities.filter(cap => cap.supports(domain));
  }

  registerReflectionCapability(capability: ReflectionCapability): void {
    this.reflectionCapabilities.push(capability);
    console.log(`[PluginManager] Registered Reflection Capability: ${capability.name}`);
  }

  resolveReflectionCapabilities(domain: string): ReflectionCapability[] {
    return this.reflectionCapabilities.filter(cap => cap.supports(domain));
  }

  private teacherCapabilities: TeacherCapability[] = [];

  registerTeacherCapability(capability: TeacherCapability): void {
    this.teacherCapabilities.push(capability);
    console.log(`[PluginManager] Registered Teacher Capability: ${capability.name}`);
  }

  resolveTeacherCapabilities(domain: string): TeacherCapability[] {
    return this.teacherCapabilities.filter(cap => cap.supports(domain));
  }

  private researcherCapabilities: ResearcherCapability[] = [];

  registerResearcherCapability(capability: ResearcherCapability): void {
    this.researcherCapabilities.push(capability);
    console.log(`[PluginManager] Registered Researcher Capability: ${capability.name}`);
  }

  resolveResearcherCapabilities(domain: string): ResearcherCapability[] {
    return this.researcherCapabilities.filter(cap => cap.supports(domain));
  }

  private synthesizerCapabilities: SynthesizerCapability[] = [];

  registerSynthesizerCapability(capability: SynthesizerCapability): void {
    this.synthesizerCapabilities.push(capability);
    console.log(`[PluginManager] Registered Synthesizer Capability: ${capability.name}`);
  }

  resolveSynthesizerCapabilities(domain: string): SynthesizerCapability[] {
    return this.synthesizerCapabilities.filter(cap => cap.supports(domain));
  }

  private modelerCapabilities: ModelerCapability[] = [];

  registerModelerCapability(capability: ModelerCapability): void {
    this.modelerCapabilities.push(capability);
    console.log(`[PluginManager] Registered Modeler Capability: ${capability.name}`);
  }

  resolveModelerCapabilities(domain: string): ModelerCapability[] {
    return this.modelerCapabilities.filter(cap => cap.supports(domain));
  }
}
