"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node } from 'reactflow';
import 'reactflow/dist/style.css';

export default function CapabilityNetworkDashboard() {
  const [zoomLevel, setZoomLevel] = useState<'ECOSYSTEM' | 'HUMAN' | 'GOVERNANCE'>('ECOSYSTEM');

  // ECOSYSTEM LEVEL (Macro view)
  const ecosystemNodes: Node[] = [
    { id: 'sa_chem', position: { x: 100, y: 150 }, data: { label: '🧪 SA Chemistry Steward' }, style: { background: '#1e1b4b', color: '#a5b4fc', border: '2px solid #6366f1' } },
    { id: 'drc_min', position: { x: 300, y: 50 }, data: { label: '⛏️ DRC Mineral Steward' }, style: { background: '#450a0a', color: '#fca5a5', border: '2px solid #ef4444' } },
    { id: 'ng_dig', position: { x: 500, y: 150 }, data: { label: '🌐 NG Digital Steward' }, style: { background: '#064e3b', color: '#6ee7b7', border: '2px solid #10b981' } },
    { id: 'ke_mob', position: { x: 700, y: 150 }, data: { label: '📱 KE Mobility Steward' }, style: { background: '#4a044e', color: '#f0abfc', border: '2px solid #d946ef' } },
    { id: 'eg_mfg', position: { x: 400, y: 300 }, data: { label: '🏭 EG Mfg Steward' }, style: { background: '#422006', color: '#fdba74', border: '2px solid #f97316' } },
    { id: 'bat_corridor', position: { x: 400, y: 150 }, data: { label: 'African Battery Intelligence Corridor' }, style: { background: '#020617', color: '#38bdf8', border: '2px dashed #38bdf8', width: 200, height: 100, zIndex: -1 } },
  ];

  const ecosystemEdges: Edge[] = [
    { id: 'ee1', source: 'drc_min', target: 'sa_chem', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'ee2', source: 'sa_chem', target: 'ng_dig', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'ee3', source: 'ng_dig', target: 'ke_mob', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'ee4', source: 'sa_chem', target: 'eg_mfg', animated: true, style: { stroke: '#fbbf24' } },
    { id: 'ee5', source: 'ng_dig', target: 'eg_mfg', animated: true, style: { stroke: '#fbbf24' } },
  ];

  // HUMAN CONTRIBUTION LEVEL (Micro view)
  const humanNodes: Node[] = [
    { id: 'h_lab', position: { x: 300, y: 100 }, data: { label: '🧪 Materials Lab Alpha' }, style: { background: '#312e81', color: '#c7d2fe', border: '1px solid #c7d2fe' } },
    { id: 'h_prof', position: { x: 300, y: 200 }, data: { label: 'Senior Chemist (Dr. Ndlovu)' }, style: { background: '#1e1b4b', color: '#a5b4fc', border: '1px dashed #a5b4fc' } },
    { id: 'h_fellow', position: { x: 200, y: 300 }, data: { label: 'Research Fellow' }, style: { background: '#1e1b4b', color: '#a5b4fc', border: '1px dotted #a5b4fc' } },
    { id: 'h_student', position: { x: 400, y: 300 }, data: { label: 'Student Network' }, style: { background: '#1e1b4b', color: '#a5b4fc', border: '1px dotted #a5b4fc' } },
    { id: 'h_ng_eng', position: { x: 600, y: 150 }, data: { label: 'Software Engineer (Lagos)' }, style: { background: '#064e3b', color: '#6ee7b7', border: '1px solid #6ee7b7' } },
    { id: 'h_ke_ent', position: { x: 600, y: 250 }, data: { label: 'Mobility Entrepreneur (Nairobi)' }, style: { background: '#4a044e', color: '#f0abfc', border: '1px solid #f0abfc' } },
  ];

  const humanEdges: Edge[] = [
    { id: 'he1', source: 'h_prof', target: 'h_lab', style: { stroke: '#6366f1' } },
    { id: 'he2', source: 'h_prof', target: 'h_fellow', animated: true, label: 'Succession', style: { stroke: '#fbbf24' } },
    { id: 'he3', source: 'h_prof', target: 'h_student', animated: true, label: 'Mentorship', style: { stroke: '#fbbf24' } },
    { id: 'he4', source: 'h_lab', target: 'h_ng_eng', animated: true, label: 'Capability Relationship', style: { stroke: '#10b981' } },
    { id: 'he5', source: 'h_ng_eng', target: 'h_ke_ent', animated: true, label: 'Market Integration', style: { stroke: '#d946ef' } },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            African Capability Operating Network (ACON)
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "The road is not the capability. The capability is the living network using the road."
          </p>
        </header>

        {/* Zoom Controls */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button onClick={() => setZoomLevel('ECOSYSTEM')} className={`px-6 py-2 rounded-full font-bold transition-all ${zoomLevel === 'ECOSYSTEM' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            🌍 Ecosystem View
          </button>
          <button onClick={() => setZoomLevel('HUMAN')} className={`px-6 py-2 rounded-full font-bold transition-all ${zoomLevel === 'HUMAN' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            👤 Human Contribution View
          </button>
          <button onClick={() => setZoomLevel('GOVERNANCE')} className={`px-6 py-2 rounded-full font-bold transition-all ${zoomLevel === 'GOVERNANCE' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            ⚖️ Governance View
          </button>
        </div>

        {/* Network Canvas */}
        {zoomLevel !== 'GOVERNANCE' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl h-[500px] overflow-hidden relative shadow-xl">
            <ReactFlow 
              nodes={zoomLevel === 'ECOSYSTEM' ? ecosystemNodes : humanNodes} 
              edges={zoomLevel === 'ECOSYSTEM' ? ecosystemEdges : humanEdges} 
              fitView
            >
              <Background color="#1e293b" gap={16} />
              <Controls />
            </ReactFlow>
          </div>
        )}

        {/* Governance & Metrics View */}
        {zoomLevel === 'GOVERNANCE' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Weighted Evidence Consensus */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-indigo-400 mb-4 border-b border-slate-800 pb-2">Corridor Council: Weighted Evidence Consensus</h3>
              <p className="text-sm text-slate-400 mb-6 font-mono">"Authority proposes. Evidence decides."</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-bold">Science (30%)</span>
                  <div className="w-2/3 bg-slate-800 rounded h-2"><div className="bg-cyan-500 h-2 rounded w-full"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-bold">Community (25%)</span>
                  <div className="w-2/3 bg-slate-800 rounded h-2"><div className="bg-emerald-500 h-2 rounded w-[90%]"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">Industry (20%)</span>
                  <div className="w-2/3 bg-slate-800 rounded h-2"><div className="bg-amber-500 h-2 rounded w-[75%]"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-bold">Environment (15%)</span>
                  <div className="w-2/3 bg-slate-800 rounded h-2"><div className="bg-green-500 h-2 rounded w-[80%]"></div></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">Government (10%)</span>
                  <div className="w-2/3 bg-slate-800 rounded h-2"><div className="bg-purple-500 h-2 rounded w-full"></div></div>
                </div>
              </div>
            </div>

            {/* ACON Metrics */}
            <div className="bg-slate-900 border border-indigo-900/50 rounded-xl p-6 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
              <h3 className="text-xl font-bold text-indigo-400 mb-4 border-b border-indigo-900/50 pb-2">ACON Health Metrics</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex justify-between items-center">
                  <span className="text-xs text-slate-400">Meaning Alignment</span>
                  <span className="text-lg font-mono text-emerald-400 font-bold">94%</span>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex justify-between items-center">
                  <span className="text-xs text-slate-400">Reproduction Rate</span>
                  <span className="text-lg font-mono text-indigo-400 font-bold">72%</span>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex justify-between items-center">
                  <span className="text-xs text-slate-400">Knowledge Retention</span>
                  <span className="text-lg font-mono text-cyan-400">88%</span>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex justify-between items-center">
                  <span className="text-xs text-slate-400">Collaboration Density</span>
                  <span className="text-lg font-mono text-cyan-400">82%</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
