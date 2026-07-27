export interface EndoResponse {
  capabilitiesAvailable: string[];
  adaptationCapacity: number; // 0-100
}

export class CapabilityResponder {
  public mobilize(response: EndoResponse) {
    // Models the internal organism response
    return `Mobilizing ${response.capabilitiesAvailable.length} capabilities with an adaptation capacity of ${response.adaptationCapacity}.`;
  }
}
