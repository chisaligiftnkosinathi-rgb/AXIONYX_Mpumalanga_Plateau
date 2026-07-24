// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/enterprise-adapters/src/sap/sap-events.ts

import { EnterpriseAgentGateway } from '../../../enterprise-agent-gateway/src';

export class SAPAdapter {
  /**
   * Adapts SAP NetWeaver / ERP events into standardized JSON for the Enterprise Gateway.
   * Note: This class translates, it does not hold intelligence.
   */
  static handleSAPMessage(sapPayload: any) {
    console.log(`[SAP Adapter] Translating SAP IDoc/OData payload...`);
    const normalized = {
      equipmentId: sapPayload.EQUNR || 'UNKNOWN',
      maintenanceStatus: sapPayload.STAT || 'UNKNOWN'
    };
    EnterpriseAgentGateway.ingestNormalizedTelemetry('SAP_ERP', normalized);
  }
}
