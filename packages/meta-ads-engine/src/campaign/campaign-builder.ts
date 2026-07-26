export class CampaignBuilder {
  /**
   * Constructs an Advantage+ campaign optimized for Capability Discovery rather than raw clicks.
   */
  public buildPlantYourCapabilityCampaign(region: string) {
    return {
      campaignName: `AXIONYX_Capability_Discovery_${region}`,
      objective: "MESSAGES", // Directing to Communication Soil
      optimizationGoal: "HIGH_QUALITY_SIGNALS", // Custom AXIONYX target
      creatives: [
        {
          headline: "Every community has hidden capability.",
          body: "What problem are you solving? Plant your seed today.",
          callToAction: "Send WhatsApp Message"
        }
      ],
      budget: {
        dailyBudget: 100, // Small test budget
        currency: "GBP"
      }
    };
  }
}
