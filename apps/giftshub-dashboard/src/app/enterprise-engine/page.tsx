"use client";
import React, { useState } from 'react';

export default function EnterpriseAssemblyEngine() {
  const [assembled, setAssembled] = useState(false);

  // Mock nodes waiting for assembly
  const nodes = [
    { id: 'NODE-CHEM-01', domain: 'Materials Chemist', c: 0.90, v: 0.85, d: 0.90, t: 0.80, s: 0.70 },
    { id: 'NODE-ENG-44', domain: 'Mechanical Engineer', c: 0.88, v: 0.90, d: 0.85, t: 0.85, s: 0.75 },
    { id: 'NODE-MFG-12', domain: 'Precision Fabricator', c: 0.95, v: 0.95, d: 0.90, t: 0.90, s: 0.80 },
    { id: 'NODE-QA-99', domain: 'Quality Specialist', c: 0.85, v: 0.80, d: 0.90, t: 0.95, s: 0.85 },
  ];

  // Calculate E = C * V * D * T * S for each node
  const calculateE = (n: any) => n.c * n.v * n.d * n.t * n.s;

  const clusterE = nodes.reduce((sum, n) => sum + calculateE(n), 0) / nodes.length;

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-400">ENTERPRISE ASSEMBLY ENGINE</h1>
          <p className="text-gray-400">Mathematical Genesis of Industrial Capability</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">GENESIS LAYER</div>
          <div className="text-xl font-bold text-indigo-500 font-mono">A66.5.3</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* The Equation */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <h2 className="text-xl font-bold mb-4 text-gray-200 border-b border-gray-800 pb-2">The Capability Equation</h2>
          
          <div className="bg-black border border-indigo-900/50 p-6 rounded text-center mb-6">
            <div className="text-3xl font-mono text-indigo-400 mb-2 font-bold tracking-widest">
              E = C × V × D × T × S
            </div>
            <div className="text-xs text-gray-500 flex justify-center gap-4">
              <span>C: Capability</span>
              <span>V: Verification</span>
              <span>D: Demand</span>
              <span>T: Trust</span>
              <span>S: Scalability</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mb-6">
            Enterprise emergence is multiplicative. A single weak factor collapses the industrial potential of a human node. 
            The system tracks the 8 life events that upgrade these variables, eventually triggering clustering.
          </p>

          <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Isolated Nodes (Capability Pool)</h3>
          <div className="space-y-3">
            {nodes.map(node => {
              const e = calculateE(node);
              return (
                <div key={node.id} className="p-3 bg-gray-800 rounded border border-gray-700 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500 font-mono">{node.id}</div>
                    <div className="text-sm font-bold text-gray-300">{node.domain}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">E-SCORE</div>
                    <div className={`font-mono font-bold ${e > 0.3 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {e.toFixed(3)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* The Assembly Reaction */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl flex flex-col">
          <h2 className="text-xl font-bold mb-6 text-emerald-400 border-b border-gray-800 pb-2">Capability Reaction</h2>
          
          <div className="flex-1 flex flex-col justify-center items-center">
            
            {!assembled ? (
              <div className="text-center w-full">
                <div className="text-gray-500 mb-8 max-w-sm mx-auto text-sm">
                  The network has detected high-density capabilities compatible with a mobility materials opportunity.
                </div>
                <button 
                  onClick={() => setAssembled(true)}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded shadow-lg shadow-indigo-900/50 transition-all uppercase tracking-wider"
                >
                  Trigger Assembly Event
                </button>
              </div>
            ) : (
              <div className="w-full animation-fade-in">
                <div className="mb-6">
                  <div className="text-xs text-emerald-500 font-bold tracking-widest mb-1 text-center">EVENT: CAPABILITY MATCHING & FORMATION</div>
                  <h3 className="text-2xl font-bold text-white text-center">African Mobility Materials Ltd.</h3>
                </div>

                <div className="p-6 bg-black border border-emerald-900/50 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900/20 rounded-bl-full blur-xl"></div>
                  
                  <div className="flex justify-between items-end border-b border-gray-800 pb-4 mb-4 relative z-10">
                    <div>
                      <div className="text-xs text-gray-500 font-mono mb-1">CLUSTER ID: ENT-ASSEMBLY-001</div>
                      <div className="text-sm font-bold text-emerald-400">TRUST MATURITY: EMERGING (L1)</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">COLLECTIVE E-SCORE</div>
                      <div className="text-3xl font-mono font-bold text-emerald-500">{clusterE.toFixed(3)}</div>
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Inherited DNA</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 font-mono">
                      <div className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Chemistry Ops</div>
                      <div className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Engineering Logic</div>
                      <div className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Precision Mfg</div>
                      <div className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Quality Sys</div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-emerald-900/20 border border-emerald-800/50 rounded">
                      <div className="text-xs text-emerald-400 font-bold">REACTION COMPLETE</div>
                      <div className="text-sm text-gray-300 mt-1">4 isolated human nodes have been mathematically clustered into a Tier 1 supplier candidate.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </section>

      </div>
    </div>
  );
}
