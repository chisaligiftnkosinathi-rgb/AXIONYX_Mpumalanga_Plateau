// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/enterprise-adapters/src/scada/opcua-adapter.ts

import { EnterpriseAgentGateway } from '../../../enterprise-agent-gateway/src';

export class OPCUAAdapter {
  /**
   * Adapts SCADA OPC-UA telemetry into standardized JSON.
   */
  static handleOPCUAMessage(nodeId: string, value: any) {
    console.log(`[OPC-UA Adapter] Translating SCADA telemetry for Node [${nodeId}]...`);
    const normalized = {
      sensorId: nodeId,
      reading: value
    };
    EnterpriseAgentGateway.ingestNormalizedTelemetry('SCADA_OPCUA', normalized);
  }
}
