"use client";
import React, { useState } from 'react';

export default function OVLDiagnosticDashboard() {
  const [reportGenerated, setReportGenerated] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8 flex flex-col">
      
      <header className="border-b border-slate-800 pb-6 mb-8 flex justify-between items-end">
         <div>
            <div className="text-sm font-bold text-sky-500 tracking-[0.3em] uppercase mb-2">Scientific Truth Membrane</div>
            <h1 className="text-4xl font-black text-white">🔬 Observatory & Validation Lab</h1>
         </div>
         <button 
           onClick={() => setReportGenerated(true)}
           className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-6 rounded shadow-[0_0_15px_rgba(2,132,199,0.5)] transition-all">
           RUN DIAGNOSTIC NOW
         </button>
      </header>

      {/* Split View */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
         
         {/* Left: Evidence Laboratory */}
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg flex flex-col">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Evidence Chain of Custody</h2>
            
            <div className="flex-1 space-y-6 pl-4 border-l-2 border-slate-800 relative">
               
               {/* E0 */}
               <div className="relative">
                  <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[25px] top-1"></div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">E0 Claim</div>
                  <div className="bg-slate-950 border border-slate-800 p-3 rounded text-sm text-slate-300">
                     "Coal quality analysis capability exists."
                  </div>
               </div>

               {/* E1 */}
               <div className="relative">
                  <div className="absolute w-4 h-4 bg-emerald-900 rounded-full -left-[25px] top-1"></div>
                  <div className="text-xs text-emerald-700 font-bold uppercase mb-1">E1 Human Observation</div>
                  <div className="bg-slate-950 border border-slate-800 p-3 rounded text-sm text-slate-300">
                     Visual confirmation of laboratory instruments.
                  </div>
               </div>

               {/* E2 */}
               <div className="relative">
                  <div className="absolute w-4 h-4 bg-emerald-700 rounded-full -left-[25px] top-1"></div>
                  <div className="text-xs text-emerald-600 font-bold uppercase mb-1">E2 Documented Evidence</div>
                  <div className="bg-slate-950 border border-slate-800 p-3 rounded text-sm text-slate-300">
                     Qualification certificates uploaded (Method: Proximate Analysis).
                  </div>
               </div>

               {/* E3 */}
               <div className="relative">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[25px] top-1 shadow-[0_0_10px_#10b981]"></div>
                  <div className="text-xs text-emerald-400 font-bold uppercase mb-1">E3 Structured Dataset</div>
                  <div className="bg-emerald-950/30 border border-emerald-900/50 p-3 rounded text-sm text-emerald-200">
                     Empirical dataset generated from coal sample.
                  </div>
               </div>
               
               <div className="text-xs text-slate-500 italic ml-2">Awaiting E4 Independent Verification...</div>
            </div>
         </div>

         {/* Right: Intelligence Graph */}
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg flex flex-col">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Capability Graph Projection</h2>
            
            <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden bg-slate-950 rounded border border-slate-800 p-8">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 opacity-50"></div>
               
               <div className="z-10 flex flex-col items-center space-y-4">
                  <div className="bg-emerald-950 border border-emerald-500 text-emerald-400 px-6 py-2 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                     Verified Evidence (E3)
                  </div>
                  <div className="h-8 w-1 bg-gradient-to-b from-emerald-500 to-sky-500"></div>
                  <div className="bg-sky-950 border border-sky-500 text-sky-400 px-6 py-2 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                     Capability: L3 Operational Competence
                  </div>
                  <div className="h-8 w-1 bg-gradient-to-b from-sky-500 to-indigo-500"></div>
                  <div className="bg-indigo-950 border border-indigo-500 text-indigo-400 px-6 py-2 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                     Node: Melokuhle Sampling
                  </div>
               </div>
               
               <div className="z-10 mt-12 bg-slate-900 p-4 rounded border border-slate-700 w-full">
                  <div className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-bold">Reality Reconciliation</div>
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">AXIONYX Prediction:</span>
                     <span className="text-white">L4 Specialized Competence</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                     <span className="text-slate-500">Observed Reality:</span>
                     <span className="text-emerald-400">L3 Operational (E3 Evidence Limit)</span>
                  </div>
                  <div className="text-xs text-sky-400 mt-2 bg-sky-950/30 p-2 rounded">
                     Inflation Prevented: System capability downgraded to match observed reality.
                  </div>
               </div>
            </div>
         </div>
         
      </div>

      {/* Sentinel Report Bottom Panel */}
      <div className={`bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg transition-all duration-500 ${reportGenerated ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
         <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
               <span>🛡️</span> AXIONYX Sentinel: 24-Hour Integrity Report
            </h2>
            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">Status: {reportGenerated ? 'UPDATED' : 'WAITING...'}</span>
         </div>
         
         {reportGenerated ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <div className="md:col-span-1 space-y-4">
                  <div className="bg-slate-950 p-4 rounded border border-emerald-900/50">
                     <div className="text-xs text-emerald-500 font-bold uppercase mb-1">Truth Integrity</div>
                     <div className="text-3xl font-black text-white">94%</div>
                  </div>
                  <div className="bg-slate-950 p-4 rounded border border-emerald-900/50">
                     <div className="text-xs text-emerald-500 font-bold uppercase mb-1">Provenance Chain</div>
                     <div className="text-3xl font-black text-white">91%</div>
                  </div>
               </div>
               
               <div className="md:col-span-3 space-y-4">
                  <div className="bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded">
                     <div className="text-xs text-amber-500 font-bold uppercase mb-1">Warning: Evidence Gap</div>
                     <div className="text-sm text-slate-300">3 capabilities require stronger evidence (E4+) to support their L4 prediction. Capability rating frozen.</div>
                  </div>
                  
                  <div className="bg-red-950/30 border-l-4 border-red-500 p-4 rounded">
                     <div className="text-xs text-red-500 font-bold uppercase tracking-widest mb-1 flex justify-between">
                        <span>🚨 Alert: Capability Survival Risk</span>
                        <span>Source: Patient Zero</span>
                     </div>
                     <div className="text-sm text-white font-bold mb-2">EVENT: Suzuki Ertiga Financial Pressure</div>
                     <div className="text-xs text-slate-300 mb-2">
                        IMPACT: Potential disruption of Mobility Node, Revenue Generation, AXIONYX Development Capacity.
                     </div>
                     <div className="bg-red-900/50 text-red-200 text-xs p-2 rounded">
                        SENTINEL RECOMMENDATION: A critical capability carrier is experiencing stress. Protection protocol (Capital Flow) recommended.
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div className="text-center py-8 text-slate-500 text-sm">
               Press "Run Diagnostic Now" to generate the integrity report.
            </div>
         )}
      </div>

    </div>
  );
}
