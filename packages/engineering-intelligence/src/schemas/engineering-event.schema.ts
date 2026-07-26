export interface Requirement {
  id: string;
  description: string;
  status: 'pending' | 'implemented' | 'blocked';
}

export interface EngineeringRisk {
  id: string;
  description: string;
  status: 'open' | 'mitigated' | 'realized';
  evidence: string[];
}

export interface EngineeringEvent {
  id: string;
  type: 'architecture_decision' | 'implementation_completed' | 'learning_event' | 'risk_discovered';
  decision?: string;
  observation?: string;
  impact?: string;
  evidence: string[];
}

export interface EngineeringReality {
  reality_id: string;
  project: {
    name: string;
    type: string;
    status: string;
  };
  intent: {
    goal: string;
  };
  requirements: Requirement[];
  events: EngineeringEvent[];
  risks: EngineeringRisk[];
}
