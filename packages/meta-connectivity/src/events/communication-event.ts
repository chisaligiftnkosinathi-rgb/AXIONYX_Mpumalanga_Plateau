export interface RealitySignal {
  id: string;
  source: 'whatsapp' | 'facebook' | 'instagram';
  sender_id: string;
  raw_message: string;
  timestamp: string;
}

export function parseCommunicationEvent(payload: any): RealitySignal {
  // Common normalization logic for all Meta payloads
  return {
    id: `evt_${Date.now()}`,
    source: payload.source,
    sender_id: payload.sender,
    raw_message: payload.message,
    timestamp: payload.timestamp
  };
}
