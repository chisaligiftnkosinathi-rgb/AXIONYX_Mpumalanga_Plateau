import { ReflectionCapability, StewardshipContext, Intervention, Outcome, Reflection } from '../schemas/primitives.schema';

export class VehicleReflectionCapability implements ReflectionCapability {
  id = 'cap_vehicle_reflection_01';
  name = 'Vehicle Stewardship & Outcome Reflection AI';

  supports(domain: string): boolean {
    return domain === 'vehicle';
  }

  reflect(intervention: Intervention, outcome: Outcome, context: StewardshipContext): Reflection[] {
    // In a real system, an LLM or rules engine would evaluate the relationship between the intervention and the semantic outcome.
    const reflections: Reflection[] = [];
    
    // Simulating reflection on a speed reduction intervention
    if (intervention.action === 'reduce_speed_limit') {
      const success = outcome.semanticResult.includes('normalized');
      
      reflections.push({
        id: `refl_${Date.now()}_${Math.floor(Math.random()*1000)}`,
        outcomeId: outcome.id,
        timestamp: new Date().toISOString(),
        evaluation: {
          intent: success ? 'Achieved. Speed reduction successfully lowered engine temperature.' : 'Failed. Engine temperature did not respond to speed reduction.',
          efficiency: 'High. Remote speed reduction incurred zero physical maintenance cost.',
          safety: 'High. Prevented potential thermal failure of engine while vehicle was in motion.',
          stewardship: 'Excellent. The decision balanced operational continuity with asset protection.'
        },
        recommendedPolicyUpdates: success ? [] : ['Consider lowering the auto-approval threshold for speed reduction if temp exceeds 80°C instead of 85°C.']
      });
    }

    return reflections;
  }
}
