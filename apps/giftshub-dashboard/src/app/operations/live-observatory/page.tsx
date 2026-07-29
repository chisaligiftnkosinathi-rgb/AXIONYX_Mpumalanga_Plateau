"use client";
import React, { useState, useEffect } from 'react';

export default function LiveObservatoryPage() {
  const [signal, setSignal] = useState(-80);
  const [clients, setClients] = useState(3);
  const [isPolling, setIsPolling] = useState(false);
  const [cameraEvents, setCameraEvents] = useState<any[]>([]);
  const [activeInference, setActiveInference] = useState<any>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPolling) {
      interval = setInterval(() => {
        // Simulate the ZTE MF296C Adapter polling
        setSignal(-85 + Math.floor(Math.random() * 10));
        setClients(3 + Math.floor(Math.random() * 2));

        // Simulate Bakkie ADAS Camera polling
        const types = [
          { type: 'OBJECT_DETECTION', label: 'Pedestrian', color: 'border-fuchsia-500' },
          { type: 'OBJECT_DETECTION', label: 'Vehicle', color: 'border-sky-500' },
          { type: 'LANE_DEPARTURE', label: 'Left Drift', color: 'border-rose-500' },
          { type: 'SPEED_LIMIT_SIGN', label: '60 km/h', color: 'border-emerald-500' }
        ];
        
        // Only trigger camera events 60% of the time to feel natural
        if (Math.random() > 0.4) {
           const inference = types[Math.floor(Math.random() * types.length)];
           const newEvent = {
             time: new Date().toISOString(),
             ...inference,
             confidence: Math.floor(80 + Math.random() * 19),
             distance: inference.type === 'OBJECT_DETECTION' ? Math.floor(10 + Math.random() * 30) : null
           };
           
           setActiveInference(newEvent);
           setCameraEvents(prev => [newEvent, ...prev].slice(0, 5)); // keep last 5
           
           // clear active inference quickly for visual flash
           setTimeout(() => setActiveInference(null), 1500);
        }

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
         {/* Hardware Panel Column */}
         <div className="xl:col-span-1 space-y-6">
            {/* ZTE MF296C Panel */}
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

         {/* ADAS / Dashcam Visualizer Column */}
         <div className="xl:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg h-full flex flex-col">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2 flex items-center justify-between">
                 <span>Bakkie_01 ADAS Feed</span>
                 <span className="text-[10px] uppercase tracking-widest text-slate-500 bg-slate-950 px-2 py-1 rounded">SIMULATOR</span>
               </h2>
               
               {/* Mock Road Visualizer */}
               <div className="relative bg-slate-950 h-48 rounded border border-slate-800 overflow-hidden mb-4 flex items-center justify-center perspective-[1000px]">
                 {!isPolling ? (
                    <div className="text-slate-600 italic text-sm">Camera Offline</div>
                 ) : (
                    <>
                      {/* Fake road lines */}
                      <div className="absolute inset-0 bg-slate-900"></div>
                      <div className="absolute bottom-0 w-24 h-48 border-x-4 border-dashed border-slate-700 opacity-50 transform rotate-x-60 scale-y-150 origin-bottom"></div>
                      
                      {/* Inference Overlay Box */}
                      {activeInference && (
                        <div className={`absolute border-2 ${activeInference.color} bg-black/50 p-2 rounded backdrop-blur-sm animate-pulse`}>
                           <div className="text-[10px] font-bold text-white">{activeInference.label}</div>
                           <div className="text-[10px] text-emerald-400">{activeInference.confidence}% Conf</div>
                           {activeInference.distance && <div className="text-[10px] text-sky-400">{activeInference.distance}m</div>}
                        </div>
                      )}
                    </>
                 )}
               </div>

               {/* Stream Text Log */}
               <div className="space-y-2 flex-1 overflow-y-auto">
                 {cameraEvents.map((ev, i) => (
                   <div key={i} className="text-[10px] font-mono p-2 bg-slate-950 rounded border border-slate-800/50 flex justify-between">
                     <span className="text-slate-500">[{ev.time.split('T')[1].split('.')[0]}]</span>
                     <span className="text-white">{ev.type}</span>
                     <span className="text-fuchsia-400">{ev.label}</span>
                   </div>
                 ))}
               </div>
            </div>
         </div>

         {/* Canonical Pipeline Output */}
         <div className="xl:col-span-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg h-full">
               <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Canonical Observation Stream</h2>
               
               {!isPolling ? (
                 <div className="h-[200px] flex items-center justify-center text-slate-600 italic text-sm text-center">
                    Pipeline idle.<br/>Start polling to ingest edge telemetry...
                 </div>
               ) : (
                 <div className="space-y-3 font-mono text-xs">
                   {cameraEvents[0] && (
                     <div className="bg-slate-950 p-3 rounded border border-fuchsia-900/50 text-fuchsia-400">
                       [ {cameraEvents[0].time} ] <br/><strong>EDGE_CV_INFERENCE</strong>:<br/> {cameraEvents[0].type} = {cameraEvents[0].label} ({cameraEvents[0].confidence}%)<br/>Asset: Bakkie_01
                     </div>
                   )}
                   <div className="bg-slate-950 p-3 rounded border border-emerald-900/50 text-emerald-400">
                     [ {new Date().toISOString()} ] <br/><strong>NETWORK_TELEMETRY</strong>:<br/> SignalStrength = {signal} dBm<br/>Asset: Imbally_Network_Root
                   </div>
                   <div className="bg-slate-950 p-3 rounded border border-sky-900/50 text-sky-400">
                     [ {new Date().toISOString()} ] <br/><strong>NETWORK_TELEMETRY</strong>:<br/> ConnectedClients = {clients} count<br/>Asset: Imbally_Network_Root
                   </div>
                 </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
