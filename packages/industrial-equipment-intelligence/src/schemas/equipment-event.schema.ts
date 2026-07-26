export interface DesignEvent {
  id: string;
  event: 'requirement_translated' | 'prototype_designed' | 'verification_completed' | 'design_decision_recorded';
  decision?: string;
  reason?: string;
  impact?: string;
  evidence: string[];
}

export interface EquipmentReality {
  reality_id: string;
  equipment: {
    name: string;
    type: string;
    application: string;
  };
  standard_requirements: { standard: string; requirement: string }[];
  design_events: DesignEvent[];
}
