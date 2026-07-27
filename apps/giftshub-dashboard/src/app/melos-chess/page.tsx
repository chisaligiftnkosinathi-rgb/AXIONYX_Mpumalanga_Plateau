"use client";
import React from 'react';

export default function MelosChessDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <header className="border-b border-slate-800 pb-8 text-center">
          <div className="text-sm font-bold text-amber-500 tracking-[0.3em] uppercase mb-4">The Originating Principle</div>
          <h1 className="text-5xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            ✨ THE WORD CREATES
          </h1>
          <p className="text-slate-400 mt-4 text-xl font-light">
            "All intelligence must serve life. All capability must regenerate."
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: The Trinity */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2">The Melos Trinity</h2>
            
            <div className="bg-slate-900 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-lg relative overflow-hidden">
               <div className="absolute top-2 right-4 text-4xl opacity-10">🔬</div>
               <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Evidence Heart Node</div>
               <div className="text-xl font-bold text-white mb-2">PJS Laboratory</div>
               <div className="text-slate-400 text-sm italic">"Is it true? Is there evidence?"</div>
            </div>

            <div className="bg-slate-900 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-lg relative overflow-hidden">
               <div className="absolute top-2 right-4 text-4xl opacity-10">👑</div>
               <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">Stewardship Node</div>
               <div className="text-xl font-bold text-white mb-2">Kingdom Builders</div>
               <div className="text-slate-400 text-sm italic">"Who are we becoming?"</div>
            </div>

            <div className="bg-slate-900 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-lg relative overflow-hidden">
               <div className="absolute top-2 right-4 text-4xl opacity-10">🧠</div>
               <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Coordination Brain</div>
               <div className="text-xl font-bold text-white mb-2">AXIONYX Intelligence</div>
               <div className="text-slate-400 text-sm italic">"What should we do?"</div>
            </div>
          </div>

          {/* Right Column: Strategic Chess Simulator */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl h-full flex flex-col">
               <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                     <span className="text-3xl">♟️</span> Strategic Simulator
                  </h2>
                  <div className="text-xs font-bold bg-indigo-950 text-indigo-400 px-3 py-1 rounded-full border border-indigo-900">
                     A66.62 Active
                  </div>
               </div>

               <div className="flex-1 space-y-8">
                  {/* Scenario 1 */}
                  <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 relative">
                     <div className="absolute -left-3 top-6 w-6 h-6 bg-slate-950 border-2 border-indigo-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                     </div>
                     <h3 className="text-lg font-bold text-white mb-1">Move Candidate: Alpha</h3>
                     <p className="text-slate-400 text-sm mb-4">Invest in Melokuhle Sampling Community Training Program</p>
                     
                     <div className="grid grid-cols-4 gap-2 mb-4">
                        <div className="text-center p-2 bg-emerald-950/30 border border-emerald-900/50 rounded-lg">
                           <div className="text-xs text-emerald-500 font-bold mb-1">PJS</div>
                           <div className="text-lg font-black text-white">95</div>
                        </div>
                        <div className="text-center p-2 bg-amber-950/30 border border-amber-900/50 rounded-lg">
                           <div className="text-xs text-amber-500 font-bold mb-1">K-BLDRS</div>
                           <div className="text-lg font-black text-white">100</div>
                        </div>
                        <div className="text-center p-2 bg-blue-950/30 border border-blue-900/50 rounded-lg">
                           <div className="text-xs text-blue-500 font-bold mb-1">AXIONYX</div>
                           <div className="text-lg font-black text-white">90</div>
                        </div>
                        <div className="text-center p-2 bg-indigo-950 border border-indigo-500 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                           <div className="text-xs text-indigo-300 font-bold mb-1">WORD</div>
                           <div className="text-lg font-black text-white">100</div>
                        </div>
                     </div>
                     
                     <div className="bg-indigo-950/20 p-3 rounded text-sm text-indigo-300 border border-indigo-900/50">
                        <strong>Outcome:</strong> Massive regeneration. Human formation combined with scientific evidence creation.
                     </div>
                  </div>

                  {/* Scenario 2 */}
                  <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 relative opacity-60 grayscale hover:grayscale-0 transition-all">
                     <div className="absolute -left-3 top-6 w-6 h-6 bg-slate-950 border-2 border-slate-700 rounded-full flex items-center justify-center"></div>
                     <h3 className="text-lg font-bold text-white mb-1">Move Candidate: Beta</h3>
                     <p className="text-slate-400 text-sm mb-4">Automate sampling entirely without community hiring</p>
                     
                     <div className="grid grid-cols-4 gap-2 mb-4">
                        <div className="text-center p-2 bg-slate-900 border border-slate-800 rounded-lg">
                           <div className="text-xs text-slate-500 font-bold mb-1">PJS</div>
                           <div className="text-lg font-black text-white">90</div>
                        </div>
                        <div className="text-center p-2 bg-red-950/30 border border-red-900/50 rounded-lg">
                           <div className="text-xs text-red-500 font-bold mb-1">K-BLDRS</div>
                           <div className="text-lg font-black text-red-400">20</div>
                        </div>
                        <div className="text-center p-2 bg-slate-900 border border-slate-800 rounded-lg">
                           <div className="text-xs text-slate-500 font-bold mb-1">AXIONYX</div>
                           <div className="text-lg font-black text-white">85</div>
                        </div>
                        <div className="text-center p-2 bg-slate-900 border border-slate-800 rounded-lg">
                           <div className="text-xs text-slate-500 font-bold mb-1">WORD</div>
                           <div className="text-lg font-black text-slate-400">40</div>
                        </div>
                     </div>
                     
                     <div className="bg-red-950/20 p-3 rounded text-sm text-red-400 border border-red-900/50">
                        <strong>Outcome REJECTED:</strong> Fails Kingdom Builders purpose check. Maximizes intelligence but destroys human capability regeneration.
                     </div>
                  </div>

               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
