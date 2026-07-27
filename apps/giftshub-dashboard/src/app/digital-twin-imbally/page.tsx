"use client";
import React, { useState } from 'react';
import { generateRealityTimeline } from '@packages/digital-twin-engine/src/timeline-simulator/reality-timeline';
import { generateOptimizedTimeline } from '@packages/digital-twin-engine/src/timeline-simulator/optimized-timeline';
import { DivergenceCalculator } from '@packages/digital-twin-engine/src/optimisation-metrics/divergence-calculator';

export default function DigitalTwinDashboard() {
  const [activeTab, setActiveTab] = useState<'TIMELINE' | 'SCORING'>('TIMELINE');
  const realityTimeline = generateRealityTimeline();
  const optimizedTimeline = generateOptimizedTimeline();
  
  const calc = new DivergenceCalculator();
  const realityScores = calc.generateEvidenceScores(false);
  const optimizedScores = calc.generateEvidenceScores(true);

  // Example scenario for CCD
  const realityLoss = calc.calculateCapabilityLoss(18, 8, 3.5); // 18m duration, 8m delay, 3.5 complexity
  const optimizedLoss = calc.calculateCapabilityLoss(3, 0.1, 3.5); // 3m duration, 1 day delay, 3.5 complexity

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            A66.44 Imbally Industrial Ecosystem Digital Twin
          </h1>
          <p className="text-slate-400 mt-2 text-lg max-w-4xl">
            "What capability was delayed because the ecosystem was disconnected?"<br/>
            Comparing a reactive, fragmented timeline against an AXIONYX-coordinated, capability-compressed intelligence hub.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex gap-4">
          <button onClick={() => setActiveTab('TIMELINE')} className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === 'TIMELINE' ? 'bg-purple-700 text-white' : 'bg-slate-900 text-slate-400 border border-slate-700 hover:bg-slate-800'}`}>
            ⏱️ 10-Year Projection Twin
          </button>
          <button onClick={() => setActiveTab('SCORING')} className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === 'SCORING' ? 'bg-purple-700 text-white' : 'bg-slate-900 text-slate-400 border border-slate-700 hover:bg-slate-800'}`}>
            📊 Reality Evidence Scoring
          </button>
        </div>

        {/* Timeline View */}
        {activeTab === 'TIMELINE' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Reality Timeline */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-300 mb-6 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-red-500"></span>
                Reality Timeline (Reactive)
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {realityTimeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      Y{item.year}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-slate-800 bg-slate-950/50 shadow">
                      <p className={`text-sm ${item.status === 'constraint' ? 'text-red-400' : 'text-slate-300'}`}>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimized Timeline */}
            <div className="bg-slate-900 border border-purple-900/50 rounded-xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
                AXIONYX Optimised Timeline (Coordinated)
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-900/50 before:to-transparent">
                {optimizedTimeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/50 bg-slate-900 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      Y{item.year}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-purple-900/50 bg-slate-950/50 shadow">
                      <p className="text-sm text-purple-200">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Scoring View */}
        {activeTab === 'SCORING' && (
          <div className="space-y-8">
            
            {/* CCD Block */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-8">
              <h2 className="text-3xl font-bold text-slate-100 mb-2">Capability Coordination Delay (CCD)</h2>
              <p className="text-slate-400 mb-8">Formula: Problem Duration × Coordination Delay × Complexity</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-950 p-6 rounded-lg border border-red-900/50">
                  <h3 className="text-red-400 font-bold mb-2">Reality: Maintenance Problem</h3>
                  <ul className="text-sm text-slate-400 space-y-2 mb-4">
                    <li>Detected: Month 0</li>
                    <li>Expert Found: Month 8 (Coordination Delay)</li>
                    <li>Implemented: Month 18 (Duration)</li>
                  </ul>
                  <div className="text-3xl font-mono text-red-500">{realityLoss.toFixed(1)} Units Lost</div>
                </div>
                
                <div className="bg-slate-950 p-6 rounded-lg border border-emerald-900/50">
                  <h3 className="text-emerald-400 font-bold mb-2">AXIONYX: Maintenance Problem</h3>
                  <ul className="text-sm text-slate-400 space-y-2 mb-4">
                    <li>Detected: Month 0</li>
                    <li>Expert Found: Day 1 (Coordination Delay)</li>
                    <li>Implemented: Month 3 (Duration)</li>
                  </ul>
                  <div className="text-3xl font-mono text-emerald-500">{optimizedLoss.toFixed(1)} Units Lost</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded text-purple-200">
                <strong>Insight:</strong> The ecosystem gains 15 months of time. That compressed time becomes economic intelligence.
              </div>
            </div>

            {/* Metrics Table */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800">
                    <th className="p-4 text-slate-300 font-semibold">Metric</th>
                    <th className="p-4 text-slate-300 font-semibold">Meaning</th>
                    <th className="p-4 text-red-400 font-semibold">Reality Score</th>
                    <th className="p-4 text-emerald-400 font-semibold">Optimised Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-200">Capability Activation Rate</td>
                    <td className="p-4 text-sm text-slate-400">How fast people become contributors</td>
                    <td className="p-4 text-red-300">{realityScores.capabilityActivationRate}%</td>
                    <td className="p-4 text-emerald-300">{optimizedScores.capabilityActivationRate}%</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-200">Knowledge Retention</td>
                    <td className="p-4 text-sm text-slate-400">Does knowledge survive people leaving?</td>
                    <td className="p-4 text-red-300">{realityScores.knowledgeRetention}%</td>
                    <td className="p-4 text-emerald-300">{optimizedScores.knowledgeRetention}%</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-200">Coordination Delay</td>
                    <td className="p-4 text-sm text-slate-400">Time lost finding capability</td>
                    <td className="p-4 text-red-300">{realityScores.coordinationDelay} months</td>
                    <td className="p-4 text-emerald-300">{optimizedScores.coordinationDelay} months</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-200">Node Creation Rate</td>
                    <td className="p-4 text-sm text-slate-400">How many new capabilities emerge</td>
                    <td className="p-4 text-red-300">{realityScores.nodeCreationRate} / yr</td>
                    <td className="p-4 text-emerald-300">{optimizedScores.nodeCreationRate} / yr</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-200">Industrial Resilience</td>
                    <td className="p-4 text-sm text-slate-400">Ability to survive shocks</td>
                    <td className="p-4 text-red-300">{realityScores.industrialResilience}%</td>
                    <td className="p-4 text-emerald-300">{optimizedScores.industrialResilience}%</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-200">Sovereignty Growth</td>
                    <td className="p-4 text-sm text-slate-400">Local ability to solve local problems</td>
                    <td className="p-4 text-red-300">{realityScores.sovereigntyGrowth}%</td>
                    <td className="p-4 text-emerald-300">{optimizedScores.sovereigntyGrowth}%</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
