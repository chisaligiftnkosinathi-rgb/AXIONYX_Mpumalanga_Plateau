export interface TimelineEvent {
  year: number;
  event: string;
  status: 'fragmented' | 'coordinated' | 'constraint';
}

export const generateRealityTimeline = (): TimelineEvent[] => {
  return [
    { year: 1, event: 'Individual expertise grows isolated (Vaalbult/Exxaro)', status: 'fragmented' },
    { year: 3, event: 'New businesses appear but remain localized', status: 'fragmented' },
    { year: 5, event: 'Knowledge fragmentation increases (People leave, knowledge lost)', status: 'constraint' },
    { year: 7, event: 'Operational bottlenecks force reactive problem solving (Mobility Pressure)', status: 'constraint' },
    { year: 8, event: 'Node struggles with complexity and memory overload', status: 'constraint' },
    { year: 10, event: 'Ecosystem finally begins discovering itself out of sheer pressure', status: 'coordinated' }
  ];
};
