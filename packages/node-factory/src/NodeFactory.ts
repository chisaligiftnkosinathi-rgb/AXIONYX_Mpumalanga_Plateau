import { NodeIdentity } from './NodeIdentity';
import { GovernanceValidator } from './GovernanceValidator';
import { NodeRegistry } from './NodeRegistry';
import { NodeTelemetry } from './NodeTelemetry';

export class NodeFactory {
    private registry: NodeRegistry;

    constructor() {
        this.registry = new NodeRegistry();
    }

    public instantiate(identity: NodeIdentity): void {
        GovernanceValidator.validate(identity);
        this.registry.register(identity);
        NodeTelemetry.log(identity.id, 'NODE_BOOTED', { timestamp: new Date().toISOString() });
    }

    public getActiveNodes(): NodeIdentity[] {
        return this.registry.getRegisteredNodes();
    }
}

export { NodeIdentity, NodeRegistry, GovernanceValidator, NodeTelemetry };
