export class GlobalDemandSimulator {
  public simulateSignals(): any[] {
    return [
      { 
        id: "SIM_001",
        origin: "USA", 
        type: "collector",
        text: "I am looking for a unique South African vehicle for my collection." 
      },
      { 
        id: "SIM_002",
        origin: "South Africa, Mpumalanga", 
        type: "economic_mobility",
        text: "I need a reliable car to generate income." 
      }
    ];
  }
}
