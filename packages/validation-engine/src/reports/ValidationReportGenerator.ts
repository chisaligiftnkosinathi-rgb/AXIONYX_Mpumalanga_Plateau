import * as crypto from 'crypto';

export interface ValidationContext {
  qualificationId: string;
  softwareVersion: string;
  gitCommit: string;
  dockerDigest: string;
  dbSchemaVersion: string;
  standardsVersion: string; // e.g. "ISO/IEC 17025:2017"
  policiesVersion: string;  // e.g. "iso17025@1.2.0"
  kernelVersion: string;    // e.g. "2.1.0"
}

export interface ValidationReport {
  context: ValidationContext;
  qualificationResult: 'PASS' | 'FAIL';
  executionLog: string[];
  timestamp: string;
  sha256Hash: string;
  digitalSignature: string;
}

export class ValidationReportGenerator {
  
  /**
   * Generates a cryptographically signed Operational Qualification report.
   * This provides the permanent, immutable artifact proving systemic compliance.
   */
  static generateReport(
    context: ValidationContext, 
    result: 'PASS' | 'FAIL', 
    log: string[], 
    privateKeyPem: string
  ): ValidationReport {
    
    const timestamp = new Date().toISOString();
    
    const payload = JSON.stringify({
      context,
      result,
      log,
      timestamp
    });

    // Generate SHA-256 Hash
    const hash = crypto.createHash('sha256').update(payload).digest('hex');

    // Generate Digital Signature
    const sign = crypto.createSign('SHA256');
    sign.update(payload);
    sign.end();
    const signature = sign.sign(privateKeyPem, 'base64');

    return {
      context,
      qualificationResult: result,
      executionLog: log,
      timestamp,
      sha256Hash: hash,
      digitalSignature: signature
    };
  }
}
