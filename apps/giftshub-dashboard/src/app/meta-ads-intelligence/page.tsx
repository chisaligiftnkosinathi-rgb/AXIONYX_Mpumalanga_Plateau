"use client";
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';

const mockMetrics = [
  { day: 'Mon', spend: 10, signals: 2, nodes: 0, cpcd: 0 },
  { day: 'Tue', spend: 20, signals: 8, nodes: 2, cpcd: 10 },
  { day: 'Wed', spend: 30, signals: 15, nodes: 4, cpcd: 7.5 },
  { day: 'Thu', spend: 40, signals: 25, nodes: 8, cpcd: 5 },
  { day: 'Fri', spend: 50, signals: 40, nodes: 15, cpcd: 3.3 },
  { day: 'Sat', spend: 60, signals: 60, nodes: 22, cpcd: 2.7 },
  { day: 'Sun', spend: 100, signals: 75, nodes: 20, cpcd: 5 },
];

export default function MetaAdsIntelligenceDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            Adaptive Opportunity Advertising
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            "The forest does not advertise products. It attracts seeds, understands needs, and grows capability."
          </p>
        </header>

        {/* Funnel Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <MetricCard title="Ad Spend (Sunlight)" value="£100" icon="☀️" color="text-amber-400" />
          <MetricCard title="Signals Received" value="75" icon="📱" color="text-blue-400" />
          <MetricCard title="ACRI Translations" value="50" icon="🧠" color="text-purple-400" />
          <MetricCard title="Capability Nodes" value="20" icon="🌱" color="text-emerald-400" />
          <MetricCard title="Collaborations" value="5" icon="🤝" color="text-teal-400" />
          <MetricCard title="CPCD" value="£5.00" subtitle="Cost / Node" icon="⚖️" color="text-rose-400" />
        </div>

        {/* Main Chart */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-amber-500">📈</span> Capability Discovery Loop
          </h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis yAxisId="left" stroke="#64748b" />
                <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
                <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="spend" name="Cumulative Spend (£)" stroke="#fbbf24" strokeWidth={2} />
                <Line yAxisId="left" type="monotone" dataKey="signals" name="Reality Signals" stroke="#60a5fa" strokeWidth={2} />
                <Line yAxisId="left" type="monotone" dataKey="nodes" name="Capability Nodes" stroke="#34d399" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="cpcd" name="Cost Per Discovery (£)" stroke="#f43f5e" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* The Equation */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-slate-400 text-sm uppercase tracking-widest mb-4">The Master Advertising Equation</h3>
          <div className="font-mono text-2xl text-emerald-400 bg-slate-950 p-4 rounded-lg border border-slate-800">
            CPCD = Ad Investment / Verified Capability Nodes
          </div>
          <p className="text-slate-500 mt-4 max-w-2xl">
            Optimizing for Signal Quality × Evidence × Trust × Collaboration Potential.
            Engagement without capability is noise.
          </p>
        </div>

      </div>
    </div>
  );
}

function MetricCard({ title, value, subtitle, icon, color }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
      <div className="text-slate-400 text-sm font-medium flex items-center justify-between">
        {title} <span>{icon}</span>
      </div>
      <div className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </div>
      {subtitle && <div className="text-slate-500 text-xs mt-1">{subtitle}</div>}
    </div>
  );
}
