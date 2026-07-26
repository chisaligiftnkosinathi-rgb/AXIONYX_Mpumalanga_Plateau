import { NodeIdentity } from './NodeIdentity';

export class NodeRegistry {
    private nodes: Map<string, NodeIdentity> = new Map();

    public register(identity: NodeIdentity): void {
        if (this.nodes.has(identity.id)) {
            throw new Error(`Node ${identity.id} is already registered.`);
        }
        this.nodes.set(identity.id, identity);
    }

    public getRegisteredNodes(): NodeIdentity[] {
        return Array.from(this.nodes.values());
    }
}
