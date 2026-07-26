"use client";
import React, { useState } from 'react';

export default function AcriDashboard() {
  const [translationStep, setTranslationStep] = useState(0);

  const trustNodes = [
    { id: 'N1', name: 'Zenzele Materials Lab', trust: 9.8, consistency: 0.95, time: '12 YRS' },
    { id: 'N2', name: 'eMalahleni Precision Machining', trust: 8.4, consistency: 0.88, time: '5 YRS' },
    { id: 'N3', name: 'A66 Sensor Group', trust: 4.2, consistency: 0.60, time: '1 YR' },
  ];

  const handleTranslate = () => {
    if (translationStep < 3) {
      setTranslationStep(translationStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-4xl font-extrabold text-blue-500">ACRI</h1>
        <p className="text-gray-400 font-mono text-sm mt-1">AFRICAN COLLABORATION RESEARCH INSTITUTE | THE CIVILIZATIONAL MEMORY ORGAN</p>
      </header>

      <div className="grid grid-cols-2 gap-8 h-[70vh]">
        
        {/* Translation Engine */}
        <div className="border border-gray-800 rounded-lg p-6 bg-gray-900 flex flex-col">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">The Translation Engine</h2>
          
          <div className="flex-1 space-y-4 font-mono text-sm">
            
            {/* Step 0: Observation */}
            <div className="p-4 bg-black border border-gray-800 rounded">
              <div className="text-gray-500 text-xs mb-1">1. OBSERVE (Friction Signal)</div>
              <div className="text-red-400">"Our coal sensors fail underground because of extreme conditions."</div>
            </div>

            {/* Step 1: Translation */}
            {translationStep >= 1 && (
              <div className="animation-fade-in p-4 bg-blue-950/20 border border-blue-900/50 rounded">
                <div className="text-blue-500 text-xs mb-1">2. TRANSLATE (Scientific Question)</div>
                <div className="text-gray-300">"How do we design sensors resistant to dust, heat, vibration, and chemical exposure?"</div>
              </div>
            )}

            {/* Step 2: Connection */}
            {translationStep >= 2 && (
              <div className="animation-fade-in p-4 bg-emerald-950/20 border border-emerald-900/50 rounded">
                <div className="text-emerald-500 text-xs mb-1">3. CONNECT (Capability Network)</div>
                <div className="text-gray-300">Searching Mansa Musa Trust Graph for: Analytical Chemists, Electrical Engineers, Materials Scientists...</div>
              </div>
            )}

            {/* Step 3: Preservation */}
            {translationStep >= 3 && (
              <div className="animation-fade-in p-4 bg-purple-950/20 border border-purple-900/50 rounded">
                <div className="text-purple-500 text-xs mb-1">4. PRESERVE (Civilizational Memory)</div>
                <div className="text-gray-300">Experiment Failed (Heat Tolerance missed threshold). Revision 2 logged. Future generations inherit this baseline.</div>
              </div>
            )}

          </div>

          <button 
            onClick={handleTranslate}
            disabled={translationStep >= 3}
            className={`mt-4 w-full py-3 rounded border font-bold transition-colors ${
              translationStep >= 3 
                ? 'bg-gray-800 border-gray-700 text-gray-600 cursor-not-allowed'
                : 'bg-blue-900/50 hover:bg-blue-800 text-blue-300 border-blue-700'
            }`}
          >
            {translationStep === 0 ? "TRANSLATE SIGNAL" : translationStep === 1 ? "FORM NETWORK" : translationStep === 2 ? "LOG MEMORY" : "MEMORY PRESERVED"}
          </button>
        </div>

        {/* Mansa Musa Trust Graph */}
        <div className="border border-gray-800 rounded-lg p-6 bg-gray-900">
          <h2 className="text-xl font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Mansa Musa Trust Graph</h2>
          
          <div className="bg-black border border-gray-800 rounded-lg p-6 h-full font-mono">
            <div className="text-sm text-gray-500 mb-6">EQUATION: TRUST = CONSISTENCY × EVIDENCE × TIME</div>
            
            <div className="space-y-6">
              {trustNodes.map((node, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 font-bold">{node.name}</span>
                    <span className="text-blue-500 font-bold">TRUST: {node.trust.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Consistency: {(node.consistency * 100).toFixed(0)}%</span>
                    <span>Longevity: {node.time}</span>
                  </div>
                  
                  {/* Trust Bar (Visualizing the mycelium thickness) */}
                  <div className="w-full h-2 bg-gray-800 rounded overflow-hidden">
                    <div 
                      className="h-full bg-blue-500"
                      style={{ width: `${(node.trust / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-4 border border-blue-900/50 bg-blue-950/20 rounded text-sm text-gray-400">
              <span className="text-blue-500 font-bold">THE MYCELIUM LAYER:</span> The institute does not own everyone's capability. It reveals connections based on verified survival and consistency.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
