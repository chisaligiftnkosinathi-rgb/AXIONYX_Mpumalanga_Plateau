import { Storyboard, Persona, StoryScene } from './Storyboard';
import { DomainEvent } from '@axionyx/event-bus';

export class NarrativeEngine {
  
  /**
   * Transforms a raw chronological sequence of Evidence into a Persona-tailored Storyboard.
   */
  generateNarrative(events: DomainEvent[], persona: Persona, title: string): Storyboard {
    console.log(`[NarrativeEngine] Extracting Knowledge for Persona: ${persona}`);
    
    const scenes: StoryScene[] = [];
    
    // Simplistic extraction logic for the Demonstrator
    for (const event of events) {
      const scene = this.buildSceneForEvent(event, persona);
      if (scene) scenes.push(scene);
    }
    
    return {
      story: {
        title,
        audience: persona,
        durationSeconds: scenes.length * 15 // Assuming 15s per scene
      },
      scenes
    };
  }

  private buildSceneForEvent(event: DomainEvent, persona: Persona): StoryScene | null {
    if (event.type === 'SampleRegistered') {
      return {
        id: `scene-${event.id}`,
        title: 'Sample Registration',
        narration: persona === 'Auditor' 
          ? `Sample ${event.aggregateId} registered in compliance with standard ingestion protocols.`
          : `A new sample arrives and the traceability timeline begins.`,
        visuals: ['Registration Form', 'Timeline Initiated'],
        evidenceRefs: [event.type]
      };
    }
    
    if (event.type === 'WorkflowPaused') {
      return {
        id: `scene-${event.id}`,
        title: 'Policy Enforcement',
        narration: persona === 'Executive'
          ? `Automated policy enforcement prevented an invalid result, mitigating risk.`
          : `The ISO 17025 Drift Policy triggered, pausing the workflow automatically.`,
        visuals: ['Warning Modal', 'Trust Score Drop'],
        evidenceRefs: [event.type]
      };
    }
    
    return null; // Skip events that don't need a dedicated scene
  }
}
