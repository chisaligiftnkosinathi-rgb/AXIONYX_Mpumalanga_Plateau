export interface ServiceCapability {
  name: string;
  version: string;
  supportedCommands: string[];
  publishedEvents: string[];
  requiredPolicies: string[];
  healthStatus: 'HEALTHY' | 'DEGRADED' | 'DOWN';
  manifestUrl?: string;
}

export class CapabilityRegistry {
  private services: Map<string, ServiceCapability> = new Map();

  registerService(service: ServiceCapability) {
    this.services.set(service.name, service);
    console.log(`[CapabilityRegistry] Registered Service: ${service.name} (v${service.version})`);
  }

  getService(name: string): ServiceCapability | undefined {
    return this.services.get(name);
  }

  getAllCapabilities(): ServiceCapability[] {
    return Array.from(this.services.values());
  }

  /**
   * Discovers and validates that all required policies are loaded in the PolicyEngine 
   * for the given service capability to function securely.
   */
  validateDependencies(serviceName: string, activePolicies: string[]): boolean {
    const service = this.services.get(serviceName);
    if (!service) throw new Error('Service not registered');
    
    for (const req of service.requiredPolicies) {
      if (!activePolicies.includes(req)) {
        console.warn(`[CapabilityRegistry] Missing Required Policy: ${req} for ${serviceName}`);
        return false;
      }
    }
    return true;
  }
}
