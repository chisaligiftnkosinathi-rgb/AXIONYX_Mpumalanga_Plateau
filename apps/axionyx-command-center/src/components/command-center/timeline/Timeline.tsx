import React from 'react';
import { TimelineEvent, TimelineEventProps } from './TimelineEvent';

interface TimelineProps {
  events: TimelineEventProps[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="p-4 bg-slate-900 rounded border border-slate-800">
      <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-slate-400">Evidence Timeline</h3>
      <div className="flex flex-col">
        {events.length === 0 ? (
          <div className="text-sm text-slate-500 italic py-4">Waiting for observations...</div>
        ) : (
          events.map(event => (
            <TimelineEvent key={event.id} {...event} />
          ))
        )}
      </div>
    </div>
  );
}
