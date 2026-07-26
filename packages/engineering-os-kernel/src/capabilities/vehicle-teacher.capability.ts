import { TeacherCapability, StewardshipContext, Reflection, Pattern, Lesson } from '../schemas/primitives.schema';

export class VehicleTeacherCapability implements TeacherCapability {
  id = 'cap_vehicle_teacher_01';
  name = 'Vehicle Scientific Teacher AI';

  supports(domain: string): boolean {
    return domain === 'vehicle';
  }

  synthesize(reflections: Reflection[], context: StewardshipContext): { patterns: Pattern[], lessons: Lesson[] } {
    // In a real system, an advanced LLM acts as the scientist here, scanning the body of reflections
    // to detect statistically significant patterns and formulate falsifiable hypotheses.
    
    const patterns: Pattern[] = [];
    const lessons: Lesson[] = [];

    // Analyze the provided reflections
    // Here we simulate detecting a pattern regarding engine temp and speed reduction.
    
    // We assume the reflections passed in show a history of interventions.
    const speedTempReflections = reflections.filter(r => 
      r.evaluation.intent.includes('speed reduction') || 
      r.evaluation.intent.includes('temperature')
    );

    if (speedTempReflections.length > 0) {
      const patternId = `pat_${Date.now()}`;
      
      patterns.push({
        id: patternId,
        description: 'Reducing vehicle speed when engine temperature exceeds 85°C successfully prevents thermal failure, but fails to immediately normalize temperature without additional load shedding.',
        occurrences: speedTempReflections.length,
        confidence: 0.88,
        evidenceIds: speedTempReflections.map(r => r.id),
        domains: ['vehicle']
      });

      lessons.push({
        id: `les_${Date.now()}`,
        principle: 'Thermal Runaway Prevention via Speed Reduction',
        hypothesis: 'If engine temperature exceeds 85°C, reducing speed to 50 km/h will prevent catastrophic thermal failure, but will not return temperature to baseline (82°C) unless payload load is also reduced.',
        confidence: 0.88,
        evidenceIds: speedTempReflections.map(r => r.id), // In reality, includes raw evidence too
        reflectionIds: speedTempReflections.map(r => r.id),
        applicableDomains: ['vehicle', 'fleet', 'heavy_machinery'],
        assumptions: [
          'Ambient temperature is below 40°C.',
          'Cooling system is otherwise functional.'
        ],
        limitations: [
          'Does not apply to vehicles ascending steep gradients (where low speed still requires high engine load).'
        ],
        version: 1
      });
    }

    return { patterns, lessons };
  }
}
