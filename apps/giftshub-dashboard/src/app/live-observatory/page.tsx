"use client";
import React, { useState, useEffect } from 'react';

export default function LiveObservatoryDashboard() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    // Simulate incoming events
    const interval = setInterval(() => {
      const now = new Date().toISOString();
      const mockEvent = {
        id: `obs-lims-${Date.now()}`,
        source: 'LIMS-Carolina-Lab',
        measurement: 'Ash Content',
        value: (14 + Math.random() * 2).toFixed(2),
        unit: '%',
        occurredAt: now,
        status: 'PENDING_OVL'
      };
      setEvents(prev => [mockEvent, ...prev].slice(0, 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8 flex flex-col">
      <header className="border-b border-slate-800 pb-6 mb-8 text-center">
         <div className="text-sm font-bold text-sky-500 tracking-[0.3em] uppercase mb-2">Scientific Event Pipeline</div>
         <h1 className="text-4xl font-black text-white">📡 AXIONYX Live Observatory</h1>
         <p className="text-slate-400 mt-2">The physical world translated into immutable evidence.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
         {/* Left: Event Stream */}
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg lg:col-span-1">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2 flex items-center justify-between">
               <span>Live Telemetry Stream</span>
               <span className="flex h-3 w-3 relative">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
               </span>
            </h2>
            <div className="space-y-4">
               {events.map((ev, i) => (
                  <div key={ev.id} className="bg-slate-950 border border-slate-800 p-4 rounded text-sm relative overflow-hidden animate-pulse">
                     <div className="absolute left-0 top-0 w-1 h-full bg-sky-500"></div>
                     <div className="flex justify-between text-xs text-slate-500 font-bold mb-2">
                        <span>{ev.source}</span>
                        <span>{new Date(ev.occurredAt).toLocaleTimeString()}</span>
                     </div>
                     <div className="font-bold text-white">{ev.measurement}: <span className="text-sky-400">{ev.value}{ev.unit}</span></div>
                     <div className="text-xs text-amber-500 mt-2 font-bold tracking-widest">{ev.status}</div>
                  </div>
               ))}
               {events.length === 0 && (
                  <div className="text-center text-slate-500 text-sm py-8">Awaiting telemetry...</div>
               )}
            </div>
         </div>

         {/* Right: Architecture Visualizer */}
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg lg:col-span-2 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-white mb-6 w-full border-b border-slate-800 pb-2">Scientific Event Pipeline Visualizer</h2>
            
            <div className="w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-xl p-8 flex flex-col space-y-6">
               <div className="flex items-center gap-4">
                  <div className="bg-sky-950 border border-sky-500 text-sky-400 px-4 py-3 rounded font-bold w-48 text-center text-sm shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                     Physical World<br/>(LIMS, OPC UA, SCADA)
                  </div>
                  <div className="text-sky-500 animate-pulse">➔</div>
                  <div className="flex-1 bg-slate-900 border border-slate-700 p-3 rounded text-xs text-slate-400">
                     ObservationAdapter converts proprietary data into Canonical Envelope.
                  </div>
               </div>
               
               <div className="flex items-center gap-4">
                  <div className="bg-emerald-950 border border-emerald-500 text-emerald-400 px-4 py-3 rounded font-bold w-48 text-center text-sm">
                     Observation Layer<br/>(Event Bus)
                  </div>
                  <div className="text-emerald-500 animate-pulse">➔</div>
                  <div className="flex-1 bg-slate-900 border border-slate-700 p-3 rounded text-xs text-slate-400">
                     Immutable Observation Record generated (occurredAt, receivedAt).
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <div className="bg-fuchsia-950 border border-fuchsia-500 text-fuchsia-400 px-4 py-3 rounded font-bold w-48 text-center text-sm">
                     Evidence Layer (OVL)
                  </div>
                  <div className="text-fuchsia-500 animate-pulse">➔</div>
                  <div className="flex-1 bg-slate-900 border border-slate-700 p-3 rounded text-xs text-slate-400">
                     Observation upgraded to Evidence (E0-E5). Confidence assigned.
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <div className="bg-amber-950 border border-amber-500 text-amber-400 px-4 py-3 rounded font-bold w-48 text-center text-sm">
                     Decision Engine
                  </div>
                  <div className="text-amber-500 animate-pulse">➔</div>
                  <div className="flex-1 bg-slate-900 border border-slate-700 p-3 rounded text-xs text-slate-400">
                     Action selected based on validated evidence. Physical execution triggered.
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
