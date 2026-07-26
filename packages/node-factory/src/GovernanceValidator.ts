import { NodeIdentity } from './NodeIdentity';

export class GovernanceValidator {
    public static validate(identity: NodeIdentity): boolean {
        if (!identity.id || !identity.name || !identity.purpose) {
            throw new Error(`Node validation failed: Missing fundamental identity for node ${identity.id}`);
        }
        
        if (identity.governance.requiresEvidence === undefined) {
            throw new Error(`Node validation failed: Governance must explicitly state evidence requirements for ${identity.id}`);
        }
        
        return true;
    }
}
