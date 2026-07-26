"use client";
import React, { useState } from 'react';

export default function MobilitySignalEngine() {
  const [reactionTriggered, setReactionTriggered] = useState(false);

  // Simulated live telemetry
  const mobilityPressure = 0.95; // 95% High demand
  const localCapability = 0.40; // 40% capability
  const capabilityGap = 1.0 - localCapability; // 0.60
  const ioi = (mobilityPressure * capabilityGap).toFixed(2);

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-amber-500">MOBILITY SIGNAL ENGINE</h1>
          <p className="text-gray-400">E-Hailing as an Industrial Capability Port</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">SENSORY LAYER</div>
          <div className="text-xl font-bold text-amber-500 font-mono">A66.5.5</div>
        </div>
      </header>

      {/* Global KPIs */}
      <section className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 border border-amber-900/50 p-4 rounded text-center">
          <div className="text-xs text-amber-500 mb-1 font-bold">MOBILITY PRESSURE (MPI)</div>
          <div className="text-3xl font-bold text-white">95%</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-4 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">CAPABILITY GAP</div>
          <div className="text-3xl font-bold text-red-400">55%</div>
        </div>
        <div className="bg-gray-900 border border-amber-900/50 p-4 rounded text-center">
          <div className="text-xs text-amber-500 mb-1 font-bold">OPPORTUNITY (IOI)</div>
          <div className="text-3xl font-bold text-amber-400">{ioi}</div>
        </div>
        <div className="bg-gray-900 border border-emerald-900/50 p-4 rounded text-center">
          <div className="text-xs text-emerald-500 mb-1 font-bold">TRANSLATION EFFICIENCY (RTE)</div>
          <div className="text-3xl font-bold text-emerald-400">0.05 <span className="text-xs text-gray-500">/ 1.0</span></div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Signal Processing */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-gray-200 border-b border-gray-800 pb-2">Industrial Equilibrium Test</h2>
          
          <div className="space-y-4 mb-8">
            <div className="p-4 bg-black border border-gray-800 rounded">
              <h3 className="text-xs text-gray-500 font-mono mb-2">SOURCE SIGNAL: TOYOTA QUANTUM NETWORK</h3>
              <ul className="text-sm font-mono text-gray-300 space-y-1">
                <li className="flex justify-between"><span>Trips / Day:</span> <span className="text-amber-400">HIGH (2.4M)</span></li>
                <li className="flex justify-between"><span>Brake Replacements:</span> <span className="text-red-400">SPIKE (+42%)</span></li>
                <li className="flex justify-between"><span>Local Parts Supply:</span> <span className="text-red-400">CRITICAL (12%)</span></li>
                <li className="flex justify-between"><span>Import Dependency:</span> <span className="text-amber-400">HIGH (88%)</span></li>
              </ul>
            </div>
            
            <div className="p-4 bg-red-900/10 border border-red-900/50 rounded">
              <h3 className="text-xs text-red-500 font-bold mb-2">CHEMICAL IMBALANCE DETECTED</h3>
              <p className="text-sm text-gray-300">
                Demand Signal (95%) is massively outpacing Capability Response (40%). 
                The system is accumulating pressure in the form of import dependency and capital flight.
              </p>
            </div>
          </div>

          {!reactionTriggered ? (
            <button 
              onClick={() => setReactionTriggered(true)}
              className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded shadow-lg shadow-amber-900/50 transition-all uppercase tracking-wider mt-auto"
            >
              Trigger Reaction: African Mobility Materials
            </button>
          ) : (
            <div className="w-full animation-fade-in p-4 bg-emerald-900/20 border border-emerald-500/50 rounded text-center mt-auto">
              <div className="text-emerald-400 font-bold mb-1">REACTION INITIATED</div>
              <div className="text-sm text-gray-300">
                Routing Signal IOI-{ioi} to Enterprise Assembly Engine.<br/>
                Requesting: Materials Labs + Manufacturing Clusters.
              </div>
            </div>
          )}
        </section>

        {/* Reaction Pathway */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <h2 className="text-xl font-bold mb-6 text-amber-400 border-b border-gray-800 pb-2">The Civilization Reaction Pathway</h2>
          
          <div className="relative pl-8 space-y-6 font-mono text-sm border-l-2 border-gray-800 ml-4">
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-amber-500 rounded-full"></div>
              <h3 className="text-amber-400 font-bold">1. Environmental Pressure</h3>
              <p className="text-gray-400 text-xs mt-1">High mobility demand, increasing friction.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-amber-500 rounded-full"></div>
              <h3 className="text-amber-400 font-bold">2. E-Hailing Sensor (Current)</h3>
              <p className="text-gray-400 text-xs mt-1">100,000 drivers transmit maintenance failures and supply shortages.</p>
            </div>

            <div className={`relative transition-all duration-1000 ${reactionTriggered ? 'opacity-100' : 'opacity-20'}`}>
              <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ${reactionTriggered ? 'bg-emerald-500' : 'bg-gray-700'}`}></div>
              <h3 className={reactionTriggered ? 'text-emerald-400 font-bold' : 'text-gray-500 font-bold'}>3. Engineering Specification</h3>
              <p className="text-gray-400 text-xs mt-1">Signal translates into technical requirements for durable parts.</p>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${reactionTriggered ? 'opacity-100' : 'opacity-20'}`}>
              <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ${reactionTriggered ? 'bg-emerald-500' : 'bg-gray-700'}`}></div>
              <h3 className={reactionTriggered ? 'text-emerald-400 font-bold' : 'text-gray-500 font-bold'}>4. Local Enterprise Assembly</h3>
              <p className="text-gray-400 text-xs mt-1">Capability nodes clustered to manufacture the solution.</p>
            </div>

            <div className={`relative transition-all duration-1000 delay-500 ${reactionTriggered ? 'opacity-100' : 'opacity-20'}`}>
              <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full ${reactionTriggered ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 'bg-gray-700'}`}></div>
              <h3 className={reactionTriggered ? 'text-blue-400 font-bold' : 'text-gray-500 font-bold'}>5. New Chemical Equilibrium</h3>
              <p className="text-gray-400 text-xs mt-1">Local Production Capability = Mobility Demand Pressure.</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
