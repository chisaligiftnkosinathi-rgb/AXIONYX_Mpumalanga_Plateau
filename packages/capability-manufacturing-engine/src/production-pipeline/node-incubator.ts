export type IncubationStage = 'Seed' | 'Prototype' | 'Commercial' | 'Regional';

export interface CandidateNode {
  name: string;
  stage: IncubationStage;
  maturityScore: number; // 0-100
}

export class NodeIncubator {
  public advanceStage(node: CandidateNode): CandidateNode {
    if (node.stage === 'Seed' && node.maturityScore > 25) node.stage = 'Prototype';
    else if (node.stage === 'Prototype' && node.maturityScore > 50) node.stage = 'Commercial';
    else if (node.stage === 'Commercial' && node.maturityScore > 75) node.stage = 'Regional';
    return node;
  }
}
