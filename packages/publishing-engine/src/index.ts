// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/publishing-engine/src/index.ts

import { Connector, PublishContext } from '../../connectors/src/common';

export class PublishingEngine {
  private connectors: Map<string, Connector> = new Map();

  /**
   * Registers a new connector to the engine.
   */
  public registerConnector(connector: Connector) {
    this.connectors.set(connector.id, connector);
    console.log(`[PublishingEngine] Registered connector: ${connector.name} (${connector.type})`);
  }

  /**
   * Routes the compiled context to the appropriate destination.
   */
  public async publishTo(connectorId: string, context: PublishContext): Promise<string> {
    const connector = this.connectors.get(connectorId);
    
    if (!connector) {
      throw new Error(`Connector with ID ${connectorId} not found.`);
    }

    console.log(`[PublishingEngine] Authenticating with ${connector.name}...`);
    const authenticated = await connector.authenticate();
    
    if (!authenticated) {
      throw new Error(`Authentication failed for ${connector.name}.`);
    }

    console.log(`[PublishingEngine] Publishing ${context.format} to ${connector.name}...`);
    const resultUrl = await connector.publish(context);
    
    console.log(`[PublishingEngine] Successfully published to ${resultUrl}`);
    return resultUrl;
  }
}
