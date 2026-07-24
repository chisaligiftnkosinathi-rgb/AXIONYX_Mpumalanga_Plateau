// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/twin-package-standard/src/index.ts

export interface ATPS {
  name: string;
  version: string;
  domain: string;
  requires: string[];
  telemetry: string[];
  certification: {
    ATRL: number;
    lastVerified: Date;
  };
}

export class TwinPackageStandard {
  /**
   * Validates if a Digital Twin payload conforms to the ATPS specification
   * allowing it to be published to the AXIONYX Marketplace.
   */
  static validate(pkg: any): boolean {
    if (!pkg.name || !pkg.version || !pkg.requires) {
      console.log(`[ATPS] Validation failed: Missing required fields.`);
      return false;
    }
    console.log(`[ATPS] Package ${pkg.name}@${pkg.version} is valid.`);
    return true;
  }
}
