"use client";
import React, { useState } from 'react';

export default function IndustrialSimulator() {
  const [translation, setTranslation] = useState(0.30);
  
  // Scenario A base values (Current Africa)
  const baseCaps = {
    resources: 0.80,
    research: 0.60,
    manufacturing: 0.45,
    capital: 0.40,
    trust: 0.50
  };

  const calculateEffective = (base: number) => (base * translation).toFixed(2);
  
  // Calculate ignition probability
  const ignitionProb = (
    baseCaps.resources * 
    baseCaps.research * 
    baseCaps.manufacturing * 
    baseCaps.capital * 
    baseCaps.trust * 
    Math.pow(translation, 5) // Because translation multiplies each term
  );

  let state = 'FAILED';
  let color = 'text-red-500';
  if (ignitionProb > 0.05) { state = 'HIGH'; color = 'text-emerald-400'; }
  else if (ignitionProb > 0.01) { state = 'MEDIUM'; color = 'text-yellow-400'; }
  else if (ignitionProb > 0.001) { state = 'LOW'; color = 'text-orange-400'; }

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6">
        <h1 className="text-4xl font-extrabold text-blue-400">AFRICAN INDUSTRIAL REACTOR</h1>
        <p className="text-gray-400">Stress Simulator: Testing Translation Capability</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Reactor Architecture */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl flex flex-col items-center">
          <h2 className="text-xl font-bold mb-6 text-gray-300 w-full text-center border-b border-gray-800 pb-2">The Gift's Hub Engine</h2>
          
          <div className="w-full max-w-sm space-y-2 text-center text-sm font-mono font-bold">
            <div className="p-3 bg-purple-900/20 border border-purple-900 text-purple-400">GLOBAL MARKET</div>
            <div className="text-purple-500">▲</div>
            <div className="p-3 bg-blue-900/20 border border-blue-900 text-blue-400">FINISHED PRODUCTS</div>
            <div className="text-blue-500">▲</div>
            <div className="p-3 bg-emerald-900/20 border border-emerald-900 text-emerald-400">MANUFACTURING CAPABILITY</div>
            <div className="text-emerald-500">▲</div>
            
            <div className="my-6 p-4 border-2 border-yellow-500 bg-black relative shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 text-xs text-yellow-500">GIFT'S HUB TRANSLATION LAYER</div>
              <div className="text-gray-300 text-xs">Knowledge ↓ Evidence ↓ Trust ↓ Coordination</div>
            </div>

            <div className="text-orange-500">▲</div>
            <div className="p-3 bg-orange-900/20 border border-orange-900 text-orange-400">MATERIALS + RESEARCH</div>
            <div className="text-orange-500">▲</div>
            <div className="p-3 bg-red-900/20 border border-red-900 text-red-400">MINERAL FOUNDATION</div>
            <div className="text-red-500">▲</div>
            <div className="p-3 bg-gray-800 border border-gray-700 text-gray-400">AFRICAN ENVIRONMENT</div>
          </div>
        </section>

        {/* Reaction Control Panel */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Reaction Chamber: Mobility Materials</h2>
          
          <div className="mb-8 p-4 bg-black border border-gray-800 rounded">
            <label className="block text-sm font-bold text-gray-400 mb-2">Adjust Translation Capability Multiplier</label>
            <input 
              type="range" 
              min="0.1" 
              max="1.0" 
              step="0.05" 
              value={translation} 
              onChange={(e) => setTranslation(parseFloat(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="text-right mt-2 text-emerald-400 font-mono text-xl">{translation.toFixed(2)}</div>
          </div>

          <div className="space-y-3 font-mono text-sm mb-8">
            <div className="flex justify-between text-gray-500 text-xs border-b border-gray-800 pb-1">
              <span>Element</span><span>Base</span><span>Effective (Base × Translation)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Materials</span><span className="text-gray-500">0.80</span><span className="text-white">{calculateEffective(baseCaps.resources)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Research</span><span className="text-gray-500">0.60</span><span className="text-white">{calculateEffective(baseCaps.research)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Manufacturing</span><span className="text-gray-500">0.45</span><span className="text-white">{calculateEffective(baseCaps.manufacturing)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Capital</span><span className="text-gray-500">0.40</span><span className="text-white">{calculateEffective(baseCaps.capital)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Trust</span><span className="text-gray-500">0.50</span><span className="text-white">{calculateEffective(baseCaps.trust)}</span>
            </div>
          </div>

          <div className="p-6 bg-black border-2 border-gray-800 rounded-lg text-center shadow-inner">
            <div className="text-gray-500 text-xs mb-2">INDUSTRIAL IGNITION PROBABILITY</div>
            <div className={`text-4xl font-extrabold ${color}`}>
              {state}
            </div>
            <div className="mt-2 text-gray-600 font-mono text-xs">RAW INDEX: {ignitionProb.toFixed(6)}</div>
          </div>

        </section>
      </div>
    </div>
  );
}
