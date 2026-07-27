export interface ExoPressure {
  source: string;
  intensity: number; // 0-100
  type: 'Economic' | 'Demand' | 'Regulatory' | 'Technological';
}

export class PressureSensor {
  public detect(pressure: ExoPressure) {
    // Models external forces entering the system
    return `Detected ${pressure.type} pressure from ${pressure.source} at intensity ${pressure.intensity}.`;
  }
}
