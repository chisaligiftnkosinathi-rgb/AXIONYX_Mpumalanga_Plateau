"use client";
import React, { useState } from 'react';

export default function ImpandeBankDashboard() {
  const [activeNode, setActiveNode] = useState<number>(2);

  const nodes = [
    { id: 1, name: "Informal Mechanic Collective", potential: 0.9, execution: 0.9, evidence: 0.0, creditScore: 350, type: "INVISIBLE_GROWTH" },
    { id: 2, name: "eMalahleni Mobility Parts Hub", potential: 0.8, execution: 0.8, evidence: 0.85, creditScore: 400, type: "GERMINATED_NODE" },
    { id: 3, name: "Resource Extractor Inc", potential: 0.9, execution: 0.1, evidence: 0.1, creditScore: 800, type: "DORMANT_SEED" }
  ];

  const calculateImpande = (p: number, e: number, ev: number) => (p * e * ev).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-10 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-extrabold text-emerald-500 tracking-wider">THE IMPANDE STANDARD</h1>
          <p className="text-gray-400 mt-2 font-mono">WALALA WASALA CAPABILITY BANK | GROWTH = P × A × L</p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        
        {/* Node Selection */}
        <div className="col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-gray-400 mb-4 border-b border-gray-800 pb-2">Ecosystem Nodes</h2>
          {nodes.map(node => (
            <div 
              key={node.id} 
              onClick={() => setActiveNode(node.id)}
              className={`p-4 rounded border cursor-pointer transition-all ${activeNode === node.id ? 'bg-emerald-950/30 border-emerald-500' : 'bg-black border-gray-800 hover:border-gray-600'}`}
            >
              <div className="font-bold">{node.name}</div>
              <div className="text-xs text-gray-500 mt-1 font-mono">Status: {node.type}</div>
            </div>
          ))}
        </div>

        {/* Bank Analysis Mirror */}
        <div className="col-span-2 bg-gray-900 border border-gray-800 rounded p-8 shadow-2xl relative overflow-hidden">
          {/* Background Root Graphic */}
          <div className="absolute opacity-5 -bottom-20 -right-20">
            <svg width="400" height="400" viewBox="0 0 100 100">
              <path d="M50 0 Q55 20 50 40 T50 80 M50 30 Q30 50 20 80 M50 40 Q70 60 80 90 M50 50 Q40 70 30 100 M50 60 Q60 80 70 100" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {nodes.filter(n => n.id === activeNode).map(node => {
            const impandeScore = Number(calculateImpande(node.potential, node.execution, node.evidence));
            
            return (
              <div key={node.id} className="relative z-10 animation-fade-in">
                <h2 className="text-3xl font-extrabold text-white mb-2">{node.name}</h2>
                <p className="text-gray-400 font-mono mb-8 border-b border-gray-800 pb-4">GERMINATION CYCLE ANALYSIS</p>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="p-6 border border-gray-800 rounded bg-black">
                    <div className="text-gray-500 text-xs font-bold mb-2">TRADITIONAL CREDIT SCORE</div>
                    <div className={`text-4xl font-black ${node.creditScore < 500 ? 'text-red-500' : 'text-emerald-500'}`}>
                      {node.creditScore}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">Based on visible collateral & cashflow</div>
                  </div>
                  
                  <div className="p-6 border border-emerald-900/50 rounded bg-emerald-950/10">
                    <div className="text-emerald-400 text-xs font-bold mb-2">IMPANDE SCORE (CAPABILITY)</div>
                    <div className={`text-4xl font-black ${impandeScore > 0.5 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {impandeScore}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">P({node.potential}) × A({node.execution}) × E({node.evidence})</div>
                  </div>
                </div>

                {node.type === 'DORMANT_SEED' && (
                  <div className="p-4 bg-red-950/30 border border-red-900/50 rounded">
                    <div className="text-red-400 font-bold mb-1">BANK DECISION: REJECT CAPITAL</div>
                    <div className="text-gray-400 text-sm">High financial capital and potential, but zero execution or learning. Capital cannot force a seed to germinate. The system must act first.</div>
                  </div>
                )}

                {node.type === 'INVISIBLE_GROWTH' && (
                  <div className="p-4 bg-amber-950/30 border border-amber-900/50 rounded">
                    <div className="text-amber-400 font-bold mb-1">BANK DECISION: PROVIDE MEASUREMENT</div>
                    <div className="text-gray-400 text-sm">Action is occurring, but there is no traceability (Evidence = 0). Provide measurement infrastructure (sensors) before capital.</div>
                  </div>
                )}

                {node.type === 'GERMINATED_NODE' && (
                  <div className="p-4 bg-emerald-950/30 border border-emerald-900/50 rounded">
                    <div className="text-emerald-400 font-bold mb-1">BANK DECISION: DEPLOY CAPITAL (SUNLIGHT)</div>
                    <div className="text-gray-400 text-sm">Potential is verified through action and evidence. The root has pushed through the soil. Deploy capital to scale the photosynthetic growth reaction.</div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
