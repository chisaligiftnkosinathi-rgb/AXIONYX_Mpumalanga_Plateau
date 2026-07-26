import React from 'react';

export default function IndustrialObservatory() {
  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6">
        <h1 className="text-4xl font-extrabold text-blue-400">AFRICAN MOBILITY CAPABILITY GRAPH</h1>
        <p className="text-gray-400">Industrial Ecosystem Intelligence & Supplier Vulnerability Mapping</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* Capability Network Map */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-emerald-400 border-b border-gray-800 pb-2">The Industrial Reality Chain</h2>
          
          <div className="flex flex-col space-y-2 font-mono text-xs text-gray-400">
            <div className="p-4 border border-blue-900 bg-blue-900/20 text-blue-400 text-center font-bold">
              ENVIRONMENT: Southern Africa
              <div className="text-xs text-gray-500 font-normal mt-1">High unemployment, vast geography, informal transport</div>
            </div>
            <div className="text-center text-blue-500">↓</div>
            <div className="p-4 border border-blue-900 bg-blue-900/20 text-blue-400 text-center font-bold">
              HUMAN NEED
              <div className="text-xs text-gray-500 font-normal mt-1">"I need an affordable, reliable vehicle to generate income"</div>
            </div>
            <div className="text-center text-emerald-500">↓</div>
            <div className="p-4 border border-emerald-900 bg-emerald-900/20 text-emerald-400 text-center font-bold">
              DEMAND SIGNAL (MOBILITY NODE)
              <div className="text-xs text-gray-500 font-normal mt-1">Toyota Quantum Passenger Carrier</div>
            </div>
            <div className="text-center text-yellow-500">↓</div>
            <div className="p-4 border border-yellow-900 bg-yellow-900/20 text-yellow-500 text-center font-bold">
              CAPABILITY GAP (MATERIALS & RESEARCH)
              <div className="text-xs text-gray-400 font-normal mt-1">Transformation of raw metals (PGMs, Mn, Cr) into advanced materials</div>
            </div>
            <div className="text-center text-purple-500">↓</div>
            <div className="p-4 border border-purple-900 bg-purple-900/20 text-purple-400 text-center font-bold">
              NEW CAPABILITY CREATION
              <div className="text-xs text-gray-400 font-normal mt-1">Consumer → Creator Transition</div>
            </div>
          </div>
        </section>

        {/* Supplier Disruption Risk Model */}
        <section className="bg-gray-900 p-6 rounded-lg border border-red-900 shadow-xl relative">
          <div className="absolute top-0 right-0 bg-red-600 text-xs px-2 py-1 font-bold rounded-bl text-white">VULNERABILITY INDEX</div>
          <h2 className="text-2xl font-bold mb-6 text-red-400 border-b border-gray-800 pb-2">Supplier Risk Model</h2>
          <p className="text-gray-400 mb-6 italic text-sm">"A supplier that only sells a commodity becomes vulnerable when local capability evolves."</p>

          <div className="space-y-6 font-mono text-sm">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Risk 1: Replacement Risk</span>
                <span className="text-red-400 font-bold">HIGH</span>
              </div>
              <div className="text-xs text-gray-500">Can the capability be recreated locally? (e.g. Advanced composites)</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Risk 2: Cost Risk</span>
                <span className="text-red-400 font-bold">HIGH</span>
              </div>
              <div className="text-xs text-gray-500">Can local production become cheaper? (e.g. Local battery ecosystem)</div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Risk 3: Innovation Risk</span>
                <span className="text-purple-400 font-bold">CRITICAL</span>
              </div>
              <div className="text-xs text-gray-500">Can new technology bypass the supplier? (e.g. ICE → Hydrogen)</div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Risk 4: Strategic Risk</span>
                <span className="text-red-400 font-bold">HIGH</span>
              </div>
              <div className="text-xs text-gray-500">Does the supplier align with national capability goals?</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-black border border-gray-800 rounded">
            <h3 className="text-blue-400 font-bold text-lg mb-2">Walala Wasala Calibration</h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>Intent: <span className="text-white">0.95</span></div>
              <div>Evidence: <span className="text-white">0.75</span></div>
              <div>Execution: <span className="text-white">0.45</span></div>
              <div>Learning: <span className="text-emerald-400">1.00</span></div>
            </div>
            <div className="mt-4 text-center text-sm font-bold text-blue-500 border-t border-gray-800 pt-2">
              STATE: FOUNDATIONAL OPPORTUNITY
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
