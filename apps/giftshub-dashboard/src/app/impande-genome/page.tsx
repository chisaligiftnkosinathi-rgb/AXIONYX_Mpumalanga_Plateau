"use client";
import React, { useState } from 'react';

export default function GenomeMapDashboard() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, name: "Mechanical Graduate (Unemployed)", stage: 0, desc: "Invisible Potential. High theory, zero verified action.", x: 10, y: 80, color: 'bg-gray-800' },
    { id: 2, name: "Informal Diagnostics Technician", stage: 2, desc: "Action taken. Seed has germinated. Repairing vehicles locally.", x: 30, y: 60, color: 'bg-emerald-800' },
    { id: 3, name: "Precision Machining Shop", stage: 3, desc: "Stem formation. Proven capability with 100+ verified repairs.", x: 50, y: 40, color: 'bg-emerald-600' },
    { id: 4, name: "Parts Supplier", stage: 3, desc: "Stem formation. Verified localized inventory.", x: 70, y: 40, color: 'bg-emerald-600' },
    { id: 5, name: "eMalahleni Mobility Enterprise", stage: 4, desc: "Branch formation. Machining Shop + Supplier merged.", x: 60, y: 20, color: 'bg-emerald-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-8">
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-4xl font-extrabold text-emerald-500">IMPANDE GENOME MAP</h1>
        <p className="text-gray-400 font-mono text-sm mt-1">THE AFRICAN CAPABILITY FOREST | STAGE 0 TO 6</p>
      </header>

      <div className="grid grid-cols-3 gap-8 h-[70vh]">
        {/* Forest Visualization (Network) */}
        <div className="col-span-2 bg-black border border-gray-800 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Ground level line */}
          <div className="absolute top-[70%] left-0 right-0 h-px bg-emerald-900/50"></div>
          <div className="absolute top-[71%] left-4 text-xs font-mono text-emerald-900">SOIL LINE (GERMINATION THRESHOLD)</div>

          {nodes.map(node => (
            <div 
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all hover:scale-150 ${node.color} ${activeNode === node.id ? 'ring-4 ring-emerald-500 scale-150 shadow-[0_0_15px_rgba(16,185,129,0.8)]' : ''}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-mono whitespace-nowrap text-gray-500">{node.name}</span>
            </div>
          ))}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
             <line x1="50%" y1="40%" x2="60%" y2="20%" stroke="#059669" strokeWidth="2" strokeDasharray="4" />
             <line x1="70%" y1="40%" x2="60%" y2="20%" stroke="#059669" strokeWidth="2" strokeDasharray="4" />
          </svg>
        </div>

        {/* Node Analysis Panel */}
        <div className="col-span-1 bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-300 border-b border-gray-800 pb-2 mb-4">Genome Sequencer</h2>
          
          {activeNode ? (
            <div className="animation-fade-in">
              {nodes.filter(n => n.id === activeNode).map(n => (
                <div key={n.id}>
                  <div className="text-emerald-500 font-mono font-bold mb-2">STAGE {n.stage}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{n.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{n.desc}</p>

                  {n.stage < 2 ? (
                    <div className="p-4 bg-red-950/30 border border-red-900/50 rounded-lg">
                      <div className="text-red-500 font-bold text-sm mb-1">IMPANDE RULE: CAPITAL LOCKED</div>
                      <div className="text-gray-400 text-xs">Node has not germinated. Capital cannot replace roots.</div>
                    </div>
                  ) : (
                    <div className="p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-lg">
                      <div className="text-emerald-500 font-bold text-sm mb-1">IMPANDE RULE: CAPITAL UNLOCKED</div>
                      <div className="text-gray-400 text-xs">Node has produced evidence of life. Capital can accelerate growth.</div>
                    </div>
                  )}

                  {n.stage === 3 && (
                    <div className="mt-4 p-4 bg-blue-950/30 border border-blue-900/50 rounded-lg">
                      <div className="text-blue-400 font-bold text-sm mb-1">STAGE 4 BRANCH OPPORTUNITY</div>
                      <div className="text-gray-400 text-xs">System detects complementary Stage 3 nodes nearby. Recommend merging capabilities to form a Branch Enterprise.</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 text-sm font-mono mt-20">
              Select a node from the forest to sequence its capability DNA.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
