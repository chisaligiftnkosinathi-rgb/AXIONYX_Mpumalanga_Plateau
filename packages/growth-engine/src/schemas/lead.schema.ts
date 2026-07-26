export interface LeadInteraction {
  eventId: string;
  timestamp: string;
  interactionType: 'VIEWED_CONTENT' | 'UNDERSTOOD_CAPABILITY' | 'REQUESTED_INFO';
  context: Record<string, string>;
}

export interface QualifiedOpportunity {
  opportunityId: string;
  customerId: string;
  organizationId: string;
  interactions: LeadInteraction[];
  scoring: ExplainableLeadScore;
}

export interface ExplainableLeadScore {
  score: number;
  reason: string;
  factors: {
    description: string;
    matched: boolean;
    weight: number;
  }[];
}
