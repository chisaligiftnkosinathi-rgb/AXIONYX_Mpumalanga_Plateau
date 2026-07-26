"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

// Hybrid Graph visualizing the Contribution Memory
const initialNodes: Node[] = [
  // Reality Entry
  { id: '1', position: { x: 400, y: 50 }, data: { label: '📱 Reality Signal: WhatsApp Message' }, style: { background: '#0f172a', color: '#60a5fa', border: '1px solid #60a5fa', padding: 10, borderRadius: 8, width: 220 } },
  { id: '2', position: { x: 400, y: 150 }, data: { label: '🧠 ACRI: Env. Sensing Requirement' }, style: { background: '#0f172a', color: '#c084fc', border: '1px solid #c084fc', padding: 10, borderRadius: 8, width: 220 } },
  
  // Capability Roots (Contributors)
  { id: '3', position: { x: 150, y: 300 }, data: { label: '🧪 Chemist\nTrust: 92%\n(Material analysis)' }, style: { background: '#0f172a', color: '#fcd34d', border: '1px solid #fcd34d', padding: 10, borderRadius: 8, textAlign: 'center' } },
  { id: '4', position: { x: 400, y: 300 }, data: { label: '⚡ Engineer\nTrust: 88%\n(Sensor architecture)' }, style: { background: '#0f172a', color: '#fcd34d', border: '1px solid #fcd34d', padding: 10, borderRadius: 8, textAlign: 'center' } },
  { id: '5', position: { x: 650, y: 300 }, data: { label: '🔬 Laboratory\nTrust: 95%\n(Calibration validation)' }, style: { background: '#0f172a', color: '#fcd34d', border: '1px solid #fcd34d', padding: 10, borderRadius: 8, textAlign: 'center' } },
  
  // The Solution & Ring
  { id: '6', position: { x: 400, y: 450 }, data: { label: '🌻 Sensor Prototype (Solution)' }, style: { background: '#0f172a', color: '#34d399', border: '1px solid #34d399', padding: 10, borderRadius: 8 } },
  { id: '7', position: { x: 400, y: 550 }, data: { label: '🌳 Growth Ring #005\n(Permanent Memory Sealed)' }, style: { background: '#0f172a', color: '#10b981', border: '2px solid #10b981', padding: 15, borderRadius: 100, textAlign: 'center', fontWeight: 'bold' } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e2-3', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e2-4', source: '2', target: '4', markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e2-5', source: '2', target: '5', markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  
  { id: 'e3-6', source: '3', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#fcd34d' } },
  { id: 'e4-6', source: '4', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#fcd34d' } },
  { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#fcd34d' } },
  
  { id: 'e6-7', source: '6', target: '7', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#10b981', strokeWidth: 3 } },
];

export default function CapabilityLedgerDashboard() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500">
            Capability Economy Ledger
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "The forest remembers every root that nourished the flower."
          </p>
        </header>

        {/* Ledger State */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-slate-400 text-sm uppercase tracking-widest">Active Provenance Record</h3>
            <div className="text-2xl font-bold mt-1 text-emerald-400">Growth Ring: MP_SENSOR_001</div>
          </div>
          <div>
            <h3 className="text-slate-400 text-sm uppercase tracking-widest">Nodes Rewarded</h3>
            <div className="text-2xl font-bold mt-1 text-amber-400">3 Verified Contributors</div>
          </div>
          <div className="text-right">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest">Capability Growth Value (CGV)</h3>
            <div className="text-3xl font-bold mt-1 text-cyan-400">920</div>
          </div>
        </div>

        {/* Hybrid Tree Graph */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[700px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-emerald-500">🌳</span> The Growth Ring Tree (Contribution Graph)
          </h2>
          <p className="text-slate-400 mb-4 text-sm max-w-3xl">
            A visual provenance ledger. Instead of a traditional factory timeline, this graph maps how individual human capabilities converged to solve a reality signal. Every contributor permanently retains their sovereign trust score and evidence history in the Growth Ring.
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
