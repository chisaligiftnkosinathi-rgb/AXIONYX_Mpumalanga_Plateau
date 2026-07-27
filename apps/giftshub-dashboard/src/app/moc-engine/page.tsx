"use client";
import React, { useState } from 'react';

export default function MocEngineDashboard() {
  const [view, setView] = useState<'EXECUTIVE' | 'AUDIT'>('EXECUTIVE');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8 flex flex-col">
      <header className="border-b border-slate-800 pb-6 mb-8 text-center">
         <div className="text-sm font-bold text-indigo-500 tracking-[0.3em] uppercase mb-2">Decision Support Platform</div>
         <h1 className="text-4xl font-black text-white">🎯 AXIONYX MOC Engine</h1>
         <p className="text-slate-400 mt-2">Mission, Objectives & Constraints</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 flex-1">
         
         {/* Left: Active Mission HUD */}
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg xl:col-span-1 flex flex-col">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Active Mission HUD</h2>
            
            <div className="space-y-6 flex-1">
               <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Mission [v2.1.0]</div>
                  <div className="text-lg font-black text-white bg-slate-950 border border-slate-800 p-3 rounded">Produce Export-Quality Coal</div>
               </div>

               <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-2">Key Objectives</div>
                  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 ml-2">
                     <li>Maximise recovery (Yield)</li>
                     <li>Maintain quality (Ash &lt; 16%)</li>
                     <li>Protect equipment</li>
                  </ul>
               </div>

               <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-2">First-Class Constraints</div>
                  <div className="space-y-2">
                     <div className="flex justify-between items-center bg-slate-950 border border-rose-900/50 p-2 rounded">
                        <span className="text-sm text-rose-400 font-bold">Safety Limits Satisfied</span>
                        <span className="text-xs font-black bg-rose-950 text-rose-500 px-2 py-1 rounded">HARD (CRITICAL)</span>
                     </div>
                     <div className="flex justify-between items-center bg-slate-950 border border-rose-900/50 p-2 rounded">
                        <span className="text-sm text-rose-400 font-bold">Ash ≤ 16%</span>
                        <span className="text-xs font-black bg-rose-950 text-rose-500 px-2 py-1 rounded">HARD (HIGH)</span>
                     </div>
                     <div className="flex justify-between items-center bg-slate-950 border border-sky-900/50 p-2 rounded">
                        <span className="text-sm text-sky-400 font-bold">Minimize Magnetite Cost</span>
                        <span className="text-xs font-black bg-sky-950 text-sky-500 px-2 py-1 rounded">SOFT (MEDIUM)</span>
                     </div>
                  </div>
               </div>
               
               <div className="mt-auto">
                  <div className="text-xs text-slate-500 font-bold uppercase mb-2">Decision Policy Priority</div>
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                     Safety <span className="text-slate-600">➔</span> Compliance <span className="text-slate-600">➔</span> Evidence Quality <span className="text-slate-600">➔</span> Mission Success <span className="text-slate-600">➔</span> Cost
                  </div>
               </div>
            </div>
         </div>

         {/* Right: Explainability Log */}
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg xl:col-span-2 flex flex-col">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
               <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Explainability Protocol</span>
                  <span className="text-xs font-black bg-emerald-950 text-emerald-500 px-2 py-1 rounded tracking-widest uppercase">Action Approved</span>
               </h2>
               
               <div className="flex bg-slate-950 rounded border border-slate-800 overflow-hidden text-xs font-bold">
                  <button onClick={() => setView('EXECUTIVE')} className={`px-4 py-2 ${view === 'EXECUTIVE' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>EXECUTIVE</button>
                  <button onClick={() => setView('AUDIT')} className={`px-4 py-2 border-l border-slate-800 ${view === 'AUDIT' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>AUDIT</button>
               </div>
            </div>
            
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded p-8">
               
               <div className="mb-8">
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Recommended Action</div>
                  <div className="text-2xl font-black text-white">Increase dense medium density to 1.55.</div>
               </div>

               {view === 'EXECUTIVE' && (
                  <div className="text-slate-300 text-lg leading-relaxed border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-950/10">
                     "This recommendation satisfies all safety and equipment constraints, is supported by verified laboratory evidence (E4), and is expected to reduce product ash while maintaining acceptable yield."
                  </div>
               )}

               {view === 'AUDIT' && (
                  <div className="w-full text-sm">
                     <table className="w-full text-left border-collapse">
                        <tbody>
                           <tr className="border-b border-slate-800">
                              <th className="py-4 text-slate-400 font-bold w-1/3">What was observed?</th>
                              <td className="py-4 text-white">Ash trend increasing</td>
                           </tr>
                           <tr className="border-b border-slate-800">
                              <th className="py-4 text-slate-400 font-bold">What evidence supports it?</th>
                              <td className="py-4 text-white">LIMS + Plant Historian (E4)</td>
                           </tr>
                           <tr className="border-b border-slate-800">
                              <th className="py-4 text-slate-400 font-bold">Which mission?</th>
                              <td className="py-4 text-white">Produce Export-Quality Coal [v2.1.0]</td>
                           </tr>
                           <tr className="border-b border-slate-800">
                              <th className="py-4 text-slate-400 font-bold">Why this action?</th>
                              <td className="py-4 text-white">Highest expected quality improvement within constraints</td>
                           </tr>
                           <tr>
                              <th className="py-4 text-slate-400 font-bold">Confidence</th>
                              <td className="py-4 text-emerald-400 font-black">91%</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               )}
            </div>
         </div>
         
      </div>
    </div>
  );
}
