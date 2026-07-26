import React, { useState } from 'react';
import demoData from '../../../../packages/experience/src/demo-data/coal-sample-001.json';

type Event = typeof demoData.events[0];

export default function Observatory() {
  const [timelineIndex, setTimelineIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleReplay = () => {
    setIsPlaying(true);
    setTimelineIndex(-1);
    let step = -1;
    const interval = setInterval(() => {
      step++;
      if (step >= demoData.events.length) {
        clearInterval(interval);
        setIsPlaying(false);
      } else {
        setTimelineIndex(step);
      }
    }, 1500); // Step through history every 1.5 seconds
  };

  const currentEvent = timelineIndex >= 0 ? demoData.events[timelineIndex] : null;
  const isComplete = timelineIndex === demoData.events.length - 1;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8 font-mono">
      <div className="max-w-6xl mx-auto">
        <header className="border-b border-slate-800 pb-6 mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">AXIONYX OBSERVATORY</h1>
            <p className="text-slate-400 text-lg">
              {demoData.reality_id} — {demoData.identity.origin} ({demoData.identity.purpose})
            </p>
          </div>
          <button
            onClick={handleReplay}
            disabled={isPlaying}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold rounded shadow-lg transition-colors"
          >
            {isPlaying ? 'REPLAYING REALITY...' : '[ REPLAY REALITY ]'}
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* REALITY - TIMELINE */}
          <div className="lg:col-span-1 border border-slate-800 rounded bg-slate-900 p-6">
            <h2 className="text-emerald-400 font-bold mb-6 tracking-widest text-sm">REALITY (TIMELINE)</h2>
            <div className="space-y-6">
              {demoData.events.map((event, index) => (
                <div 
                  key={event.id}
                  className={`pl-4 border-l-2 transition-all duration-500 ${
                    index <= timelineIndex 
                      ? 'border-emerald-500 opacity-100' 
                      : 'border-slate-800 opacity-20'
                  }`}
                >
                  <p className="text-sm text-slate-400 mb-1">
                    {new Date(event.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                  <p className="text-white font-semibold">{event.type.replace('_', ' ').toUpperCase()}</p>
                  <p className="text-xs text-slate-500 mt-1">STATE: {event.state_transition.to}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DYNAMIC PANELS */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* EVIDENCE */}
            <div className={`border border-slate-800 rounded bg-slate-900 p-6 transition-opacity duration-1000 ${timelineIndex >= 2 ? 'opacity-100' : 'opacity-10'}`}>
              <h2 className="text-emerald-400 font-bold mb-6 tracking-widest text-sm">EVIDENCE</h2>
              <div className="space-y-4">
                {demoData.observations.map(obs => (
                  <div key={obs.measurement} className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="capitalize">{obs.measurement.replace('_', ' ')}</span>
                    <span className="text-white font-bold">{obs.value}{obs.unit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* KNOWLEDGE GRAPH */}
            <div className={`border border-slate-800 rounded bg-slate-900 p-6 transition-opacity duration-1000 ${timelineIndex >= 0 ? 'opacity-100' : 'opacity-10'}`}>
              <h2 className="text-emerald-400 font-bold mb-6 tracking-widest text-sm">KNOWLEDGE GRAPH</h2>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="text-white font-bold">{demoData.reality_id}</div>
                {demoData.knowledge_graph.relationships.map((rel, i) => {
                  const targetNode = demoData.knowledge_graph.nodes.find(n => n.id === rel.target);
                  return (
                    <div key={i} className="pl-4 border-l border-slate-700">
                      └── {rel.type} → <span className="text-emerald-400">{targetNode?.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* INTERPRETATION */}
            <div className={`border border-slate-800 rounded bg-slate-900 p-6 transition-opacity duration-1000 ${timelineIndex >= 3 ? 'opacity-100' : 'opacity-10'}`}>
              <h2 className="text-emerald-400 font-bold mb-4 tracking-widest text-sm">INTERPRETATION</h2>
              <p className="text-lg text-white">
                {demoData.decision.reason}
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Evaluated Rule: <code className="bg-slate-950 px-2 py-1 rounded">{demoData.decision.rule}</code>
              </p>
            </div>

            {/* DECISION */}
            <div className={`border border-slate-800 rounded bg-slate-900 p-6 transition-opacity duration-1000 ${isComplete ? 'opacity-100' : 'opacity-10'}`}>
              <h2 className="text-emerald-400 font-bold mb-4 tracking-widest text-sm">DECISION</h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-widest">{demoData.decision.outcome}</h3>
                  <p className="text-sm text-emerald-500">Confidence: {demoData.decision.confidence}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
