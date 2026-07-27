export class CapabilityExchange {
  public executeTransfer(capability: string, fromRegion: string, toOpportunity: string, toRegion: string): string {
    return `EXCHANGE SUCCESS: ${capability} [${fromRegion}] fused with ${toOpportunity} [${toRegion}].`;
  }
}
