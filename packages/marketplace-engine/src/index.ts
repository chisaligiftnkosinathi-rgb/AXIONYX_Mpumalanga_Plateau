// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/marketplace-engine/src/index.ts

import { ATPS } from '../../twin-package-standard/src';

export class MarketplaceDependencyEngine {
  /**
   * Resolves modular dependencies before allowing a Twin to be deployed from the Marketplace.
   * e.g., "Crusher Twin requires MaterialFlowModel".
   */
  static resolveDependencies(pkg: ATPS, installedTwins: string[]): boolean {
    console.log(`[Marketplace] Checking dependencies for ${pkg.name}...`);
    
    for (const req of pkg.requires) {
      if (!installedTwins.includes(req)) {
        console.log(`[Marketplace] BLOCKED: Missing required dependency [${req}]`);
        return false;
      }
    }

    console.log(`[Marketplace] COMPATIBLE: All dependencies verified. Ready for deployment.`);
    return true;
  }
}
