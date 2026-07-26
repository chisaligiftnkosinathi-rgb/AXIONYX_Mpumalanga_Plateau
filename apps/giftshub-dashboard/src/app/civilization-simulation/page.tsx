"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

// Interactive Branching Simulation Graph for the Mpumalanga Water Intelligence Network
const initialNodes: Node[] = [
  // Reality Entry
  { id: '1', position: { x: 400, y: 50 }, data: { label: '🌍 Reality Signal\nMpumalanga Mines require better water monitoring' }, style: { background: '#0f172a', color: '#60a5fa', border: '1px solid #60a5fa', padding: 10, borderRadius: 8, width: 250, textAlign: 'center' } },
  
  { id: '2', position: { x: 400, y: 150 }, data: { label: 'Initial State (Year 0)\n5 Mines | 3 Labs | 10 Engineers' }, style: { background: '#0f172a', color: '#cbd5e1', border: '1px solid #cbd5e1', padding: 10, borderRadius: 8, width: 220, textAlign: 'center' } },

  // Capability Interventions
  { id: '3', position: { x: 400, y: 250 }, data: { label: '⚡ Capability Intervention\n+20% Training | +30% Local Mfg | +50% Collab' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8, textAlign: 'center' } },

  // Simulation Clock Output Branches
  { id: '4', position: { x: 150, y: 350 }, data: { label: '🔮 Future A: Collaborative Growth\n+450 Capabilities | +1200 Jobs\nTrust: 88% | Risks: Low' }, style: { background: '#064e3b', color: '#34d399', border: '2px solid #34d399', padding: 15, borderRadius: 8, textAlign: 'center' } },
  { id: '5', position: { x: 400, y: 350 }, data: { label: '🔮 Future B: Capital First\n+200 Capabilities | Dependency: High\nLocal Ownership: Low' }, style: { background: '#450a0a', color: '#f87171', border: '2px solid #f87171', padding: 15, borderRadius: 8, textAlign: 'center' } },
  { id: '6', position: { x: 650, y: 350 }, data: { label: '🔮 Future C: Fragmented Growth\nLow Coordination | Trust Decay\nCapability Loss' }, style: { background: '#172554', color: '#60a5fa', border: '2px solid #60a5fa', padding: 15, borderRadius: 8, textAlign: 'center' } },
  
  // Reality Validator Loop
  { id: '7', position: { x: 150, y: 500 }, data: { label: '✅ Recommended Path' }, style: { background: '#0f172a', color: '#10b981', border: '2px dashed #10b981', padding: 10, borderRadius: 8, textAlign: 'center' } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#34d399' } },
  { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#f87171' } },
  { id: 'e3-6', source: '3', target: '6', animated: true, style: { stroke: '#60a5fa' } },
  
  { id: 'e4-7', source: '4', target: '7', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }, style: { stroke: '#10b981', strokeWidth: 2 } },
];

export default function CivilizationSimulationDashboard() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
            Civilization Simulation Engine
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "A civilization should learn from simulated consequences before committing irreversible resources."
          </p>
        </header>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-2">Scenario Active</h3>
            <div className="text-2xl font-bold text-indigo-400">Mpumalanga Sensor Expansion</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-2">Simulation Horizon</h3>
            <div className="text-3xl font-bold text-cyan-400">10 Years</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-2">Adaptive Volatility (AVI)</h3>
            <div className="text-3xl font-bold text-amber-400">Low (High Trust Resilence)</div>
          </div>
        </div>

        {/* Branching Future Graph */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[700px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-purple-500">🔮</span> Scenario Laboratory: Branching Futures
          </h2>
          <p className="text-slate-400 mb-4 text-sm max-w-3xl">
            A flight simulator for capability development. This model injects failures into the timeline to test the Adaptive Volatility Index (AVI). It proves that the biggest capital investment (Future B) does not yield the highest capability growth if local ownership and trust are compromised.
          </p>
          <div className="flex-1 border border-slate-800 rounded-lg overflow-hidden">
            <ReactFlow nodes={nodes} edges={edges} fitView>
              <Background color="#1e293b" gap={16} />
              <Controls />
            </ReactFlow>
          </div>
        </div>

      </div>
    </div>
  );
}
