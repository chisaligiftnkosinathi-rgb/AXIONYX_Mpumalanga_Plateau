"use client";
import React, { useState } from 'react';

export default function GrowthRingDashboard() {
  const [selectedRing, setSelectedRing] = useState<number | null>(null);

  const rings = [
    { id: 1, type: 'EXPANSION_RING', year: 'Year 1', description: 'Abundant resources. Rapid expansion. Capability untested.', color: 'border-amber-900', size: 'w-64 h-64', text: 'text-amber-500' },
    { id: 2, type: 'HARDENED_ADAPTATION_RING', year: 'Year 2', description: 'Drought. 50% Capital Reduction. Survived by localizing supply chain. High Resilience.', color: 'border-orange-950/80', size: 'w-48 h-48 border-4', text: 'text-orange-500' },
    { id: 3, type: 'EXPANSION_RING', year: 'Year 3', description: 'Market recovery. Standard growth using new localized supply chain.', color: 'border-amber-800', size: 'w-32 h-32', text: 'text-amber-400' },
    { id: 4, type: 'SACRIFICE_RING', year: 'Year 4 (Core)', description: 'Original prototype failed catastrophically. Root cause encoded into Quality Management standard ISO-001. Tragic, but evolutionary.', color: 'border-red-950', size: 'w-16 h-16 border-[6px]', text: 'text-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-2 gap-12 items-center">
        
        {/* Tree Cross Section */}
        <div className="relative flex items-center justify-center w-80 h-80 bg-black rounded-full shadow-[0_0_50px_rgba(0,0,0,0.8)] border-8 border-gray-900 mx-auto">
          {rings.map((ring) => (
            <div 
              key={ring.id}
              onClick={() => setSelectedRing(ring.id)}
              className={`absolute rounded-full border border-solid transition-all cursor-pointer hover:border-blue-500 ${ring.color} ${ring.size} ${selectedRing === ring.id ? 'border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10' : ''}`}
            ></div>
          ))}
        </div>

        {/* Ring Analysis Panel */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-2xl h-full">
          <h2 className="text-3xl font-extrabold text-amber-600 mb-2">CIVILIZATION DENDROCHRONOLOGY</h2>
          <p className="text-gray-500 font-mono text-sm mb-8 pb-4 border-b border-gray-800">THE GROWTH RING MODEL | A66.18</p>
          
          {selectedRing ? (
            <div className="animation-fade-in">
              <div className={`font-bold font-mono text-sm mb-2 ${rings.find(r => r.id === selectedRing)?.text}`}>
                {rings.find(r => r.id === selectedRing)?.type} ({rings.find(r => r.id === selectedRing)?.year})
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {rings.find(r => r.id === selectedRing)?.description}
              </p>
              {rings.find(r => r.id === selectedRing)?.type === 'HARDENED_ADAPTATION_RING' && (
                <div className="mt-6 p-4 bg-orange-950/30 border border-orange-900/50 rounded">
                  <div className="text-orange-400 font-mono text-xs mb-1">CIVILIZATION DROUGHT INDEX</div>
                  <div className="text-xl font-bold text-orange-500">Resilience: 0.92 (High)</div>
                  <div className="text-gray-400 text-sm mt-1">Maintained 80% capability despite 50% resource reduction.</div>
                </div>
              )}
              {rings.find(r => r.id === selectedRing)?.type === 'SACRIFICE_RING' && (
                <div className="mt-6 p-4 bg-red-950/30 border border-red-900/50 rounded">
                  <div className="text-red-400 font-mono text-xs mb-1">STATE TRANSITION (NIGHT)</div>
                  <div className="text-xl font-bold text-red-500">Wisdom Encoded</div>
                  <div className="text-gray-400 text-sm mt-1">The physical state ended, but its intelligence was preserved as a standard for future generations.</div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-gray-500 text-center mt-12 font-mono">
              Click a Growth Ring on the tree trunk to analyze its encoded reality.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
