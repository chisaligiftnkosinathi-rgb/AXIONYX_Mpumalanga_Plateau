export class MarketReplayEngine {
  public generateTimeline(signal: any, match: any): any[] {
    const baseTime = new Date();
    return [
      { time: baseTime.toISOString(), event: `Visitor from ${signal.origin} enters Chappies` },
      { time: new Date(baseTime.getTime() + 2000).toISOString(), event: `Intent classified` },
      { time: new Date(baseTime.getTime() + 4000).toISOString(), event: `Vehicle matched: ${match.vehicle}` },
      { time: new Date(baseTime.getTime() + 6000).toISOString(), event: `Omars MotorDen receives opportunity` },
      { time: new Date(baseTime.getTime() + 9000).toISOString(), event: `Global buyer journey created` }
    ];
  }
}
