import { KnowledgeNode } from '../schemas/engine.schema';

export interface RawSignal {
  id: string;
  source: string;
  timestamp: string;
  payload: any;
  noiseLevel?: number; // 0.0 to 1.0
}

/**
 * The Signal Engine transforms raw, noisy telemetry (IoT, citizen reports, system metrics)
 * into structured, verified Observations, functioning much like FTIR noise reduction and feature extraction.
 */
export class SignalEngine {
  
  /**
   * Processes an incoming stream of signals.
   * Filters out high-noise signals and maps valid signals to Observations.
   */
  public process(signals: RawSignal[]): KnowledgeNode[] {
    const observations: KnowledgeNode[] = [];

    for (const signal of signals) {
      // 1. Noise Filtering
      const noise = signal.noiseLevel ?? Math.random() * 0.2; // Default low noise if unmeasured
      if (noise > 0.8) {
        console.warn(`[SignalEngine] Dropping signal ${signal.id} due to excessive noise (${noise.toFixed(2)}).`);
        continue;
      }

      // 2. Feature Extraction & Temporal Analysis (Simulated)
      // Extract intent, location, or metric from the raw payload
      const extractedFeature = this.extractFeature(signal.payload);

      // 3. Construct the Observation Node
      observations.push({
        id: `obs-${signal.id}`,
        type: 'Observation',
        name: `Observation from ${signal.source}`,
        description: `Extracted feature: ${extractedFeature}`,
        temporal: {
          valid_from: new Date(signal.timestamp),
          valid_until: null,
          effective_date: new Date(signal.timestamp),
          publication_date: new Date(signal.timestamp)
        },
        metadata: {
          signalId: signal.id,
          source: signal.source,
          confidence: 1.0 - noise
        }
      });
    }

    return observations;
  }

  private extractFeature(payload: any): string {
    if (typeof payload === 'string') return payload.substring(0, 50);
    if (payload.metric) return `${payload.metric}: ${payload.value}`;
    if (payload.event) return `Event: ${payload.event}`;
    return 'Unknown Feature';
  }
}
