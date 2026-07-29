"use client";
import React, { useState, useEffect } from 'react';

export default function LiveObservatoryPage() {
  const [signal, setSignal] = useState(-80);
  const [clients, setClients] = useState(3);
  const [isPolling, setIsPolling] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPolling) {
      interval = setInterval(() => {
        // Simulate the ZTE MF296C Adapter polling
        setSignal(-85 + Math.floor(Math.random() * 10));
        setClients(3 + Math.floor(Math.random() * 2));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPolling]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 flex flex-col">
      <header className="border-b border-slate-800 pb-4 mb-6">
         <div className="flex justify-between items-end">
           <div>
             <div className="text-sm font-bold text-fuchsia-500 tracking-[0.3em] uppercase mb-2">Operations</div>
             <h1 className="text-3xl font-black text-white">📡 Live Observatory</h1>
             <p className="text-slate-400 mt-2">Real-time physical asset telemetry ingestion</p>
           </div>
           <button 
             onClick={() => setIsPolling(!isPolling)}
             className={`px-6 py-2 rounded font-bold text-xs uppercase tracking-widest ${isPolling ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'}`}
           >
             {isPolling ? 'STOP POLLING' : 'START POLLING'}
           </button>
         </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-1">
         {/* ZTE MF296C Panel */}
         <div className="xl:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg relative overflow-hidden">
               {isPolling && <div className="absolute top-0 right-0 w-2 h-2 mt-4 mr-4 bg-emerald-500 rounded-full animate-ping"></div>}
               
               <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2 mb-4 flex items-center gap-2">
                 <span>ZTE MF296C Gateway</span>
               </h2>
               
               <div className="text-sm mb-4">
                 <div className="flex justify-between border-b border-slate-800/50 py-2">
                   <span className="text-slate-400">ICASA ID</span>
                   <span className="text-white font-mono">TA-2022/2918</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-800/50 py-2">
                   <span className="text-slate-400">SSID</span>
                   <span className="text-white font-mono">ZTE_C795CB</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-800/50 py-2">
                   <span className="text-slate-400">Input</span>
                   <span className="text-white font-mono">12.0V - 1.5A</span>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="bg-slate-950 p-4 rounded border border-slate-800 text-center">
                    <div className="text-3xl font-black text-sky-500">{signal}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Signal (dBm)</div>
                 </div>
                 <div className="bg-slate-950 p-4 rounded border border-slate-800 text-center">
                    <div className="text-3xl font-black text-fuchsia-500">{clients}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Clients</div>
                 </div>
               </div>
            </div>
         </div>

         {/* Canonical Pipeline Output */}
         <div className="xl:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg h-full">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Canonical Observation Stream</h2>
               
               {!isPolling ? (
                 <div className="h-[200px] flex items-center justify-center text-slate-600 italic">
                    Adapter idle. Start polling to ingest telemetry...
                 </div>
               ) : (
                 <div className="space-y-3 font-mono text-xs">
                   <div className="bg-slate-950 p-3 rounded border border-emerald-900/50 text-emerald-400">
                     [ {new Date().toISOString()} ] <strong>NETWORK_TELEMETRY</strong>: SignalStrength = {signal} dBm | Asset: Imbally_Network_Root
                   </div>
                   <div className="bg-slate-950 p-3 rounded border border-sky-900/50 text-sky-400">
                     [ {new Date().toISOString()} ] <strong>NETWORK_TELEMETRY</strong>: ConnectedClients = {clients} count | Asset: Imbally_Network_Root
                   </div>
                 </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
