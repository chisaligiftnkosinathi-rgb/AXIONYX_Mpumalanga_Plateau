import { TheWordOrigin } from '../players/the-word-origin';
import { PjsEvidenceAnchor } from '../players/pjs-evidence-anchor';
import { KingdomBuildersSteward } from '../players/kingdom-builders-steward';
import { AxionyxPlayer } from '../players/axionyx-player';
import { StrategicMove } from '../core/move-generator';

export interface EvaluatedMove extends StrategicMove {
  wordAlignment: number;
  truthScore: number;
  purposeScore: number;
  intelligenceScore: number;
  totalStrategicValue: number;
}

export class StrategicEvaluator {
  private word = new TheWordOrigin();
  private pjs = new PjsEvidenceAnchor();
  private kingdomBuilders = new KingdomBuildersSteward();
  private axionyx = new AxionyxPlayer();

  public evaluateMove(move: StrategicMove): EvaluatedMove {
    const wordAlignment = this.word.evaluateAlignment(move.description);
    const truthScore = this.pjs.evaluateTruth(move.description);
    const purposeScore = this.kingdomBuilders.evaluatePurpose(move.description);
    const intelligenceScore = this.axionyx.evaluateIntelligence(move.description);

    const totalStrategicValue = (wordAlignment * 0.4) + (truthScore * 0.2) + (purposeScore * 0.2) + (intelligenceScore * 0.2);

    return {
      ...move,
      wordAlignment,
      truthScore,
      purposeScore,
      intelligenceScore,
      totalStrategicValue
    };
  }
}
