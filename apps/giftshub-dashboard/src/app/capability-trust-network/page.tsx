"use client";
import React, { useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

// Trust Forest visualization matching the Sensor Tree simulation
const initialNodes: Node[] = [
  // Reality Need
  { id: '1', position: { x: 400, y: 50 }, data: { label: '🌍 Reality Signal\n"Mine needs affordable water sensors"' }, style: { background: '#0f172a', color: '#60a5fa', border: '1px solid #60a5fa', padding: 10, borderRadius: 8, width: 250, textAlign: 'center' } },
  
  // The Nodes with dynamic sizing reflecting CTI
  { id: '2', position: { x: 200, y: 200 }, data: { label: '🌲 Chemist\nCTI 92 (+12)' }, style: { background: '#0f172a', color: '#10b981', border: '2px solid #10b981', padding: 25, borderRadius: 100, textAlign: 'center', fontWeight: 'bold' } },
  { id: '3', position: { x: 400, y: 200 }, data: { label: '🌲 Engineer\nCTI 88 (+15)' }, style: { background: '#0f172a', color: '#10b981', border: '2px solid #10b981', padding: 20, borderRadius: 100, textAlign: 'center', fontWeight: 'bold' } },
  { id: '4', position: { x: 600, y: 200 }, data: { label: '🌲 Laboratory\nCTI 95 (+10)' }, style: { background: '#0f172a', color: '#10b981', border: '2px solid #10b981', padding: 30, borderRadius: 100, textAlign: 'center', fontWeight: 'bold' } },
  
  // The Failure & Metabolism
  { id: '5', position: { x: 400, y: 350 }, data: { label: '⚠️ Calibration Instability Detected' }, style: { background: '#0f172a', color: '#f43f5e', border: '1px solid #f43f5e', padding: 10, borderRadius: 8, textAlign: 'center' } },
  { id: '6', position: { x: 400, y: 450 }, data: { label: '🧬 Metabolism: New Calibration Method' }, style: { background: '#0f172a', color: '#fbbf24', border: '1px solid #fbbf24', padding: 10, borderRadius: 8, textAlign: 'center' } },
  
  // The Growth Ring
  { id: '7', position: { x: 400, y: 550 }, data: { label: '🌳 Trust Growth Ring A66.31.001' }, style: { background: '#0f172a', color: '#38bdf8', border: '2px solid #38bdf8', padding: 15, borderRadius: 100, textAlign: 'center', fontWeight: 'bold' } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e1-3', source: '1', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  { id: 'e1-4', source: '1', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' }, style: { stroke: '#475569' } },
  
  { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#f43f5e' } },
  { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#f43f5e' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#f43f5e' } },
  
  { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#fbbf24' }, style: { stroke: '#fbbf24', strokeWidth: 2 } },
  { id: 'e6-7', source: '6', target: '7', animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }, style: { stroke: '#10b981', strokeWidth: 3 } },
];

export default function CapabilityTrustDashboard() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-amber-500">
            Capability Trust Network
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "Trust is not assigned. Trust is grown through evidence, contribution, adaptation, and time."
          </p>
        </header>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-2">Capability Growth</h3>
            <div className="text-3xl font-bold text-emerald-400">VERIFIED</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-2">Failure Metabolized</h3>
            <div className="text-3xl font-bold text-amber-400">100% (Adaptation)</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
            <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-2">Trust Ring Sealed</h3>
            <div className="text-3xl font-bold text-cyan-400">A66.31.001</div>
          </div>
        </div>

        {/* Trust Forest Graph */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[700px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-emerald-500">🌲</span> The Trust Forest
          </h2>
          <p className="text-slate-400 mb-4 text-sm max-w-3xl">
            A visualization of Trust Governance. The ecosystem metabolizes failure (calibration instability) into a capability upgrade (new calibration method). Because the roots adapted, their Capability Trust Index (CTI) increases, ensuring they are chosen for future opportunities.
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
