export class KingdomBuildersSteward {
  public evaluatePurpose(moveDescription: string): number {
    // Kingdom Builders asks: "Who are we becoming? Does this protect the King (human dignity)?"
    const servesCommunity = moveDescription.includes('community') || moveDescription.includes('learning') || moveDescription.includes('development');
    return servesCommunity ? 100 : 70;
  }
}
