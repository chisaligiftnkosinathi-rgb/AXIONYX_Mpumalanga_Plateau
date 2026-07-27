"use client";
import React from 'react';

export default function NationalEvolutionDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            National Evolution Genome Engine
          </h1>
          <p className="text-slate-400 mt-2 text-lg max-w-4xl mx-auto">
            "A nation's capability is not accidental. It is an adaptation between geography, resources, history, institutions, population, and external pressures."
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* South Africa Genome Path */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-500 text-xs px-4 py-2 rounded-bl-lg border-b border-l border-amber-500/20 font-bold uppercase tracking-wider">
              Physical Intelligence
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">🇿🇦</span> South Africa
            </h2>

            <div className="space-y-6">
              <div className="border-l-2 border-amber-500/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[7px] top-1"></div>
                <h3 className="text-amber-400 font-bold mb-1">Environmental Layer</h3>
                <p className="text-slate-300 text-sm">Southern African geology, rich mineral abundance, isolated industrial geography.</p>
              </div>

              <div className="border-l-2 border-amber-500/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[7px] top-1"></div>
                <h3 className="text-amber-400 font-bold mb-1">Constraint Layer</h3>
                <p className="text-slate-300 text-sm italic">"How do we extract value from complex physical systems?"</p>
              </div>

              <div className="border-l-2 border-amber-500/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[7px] top-1"></div>
                <h3 className="text-amber-400 font-bold mb-1">Adaptation Layer (Branching)</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs">Mining</span>
                  <span className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs">Engineering</span>
                  <span className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs">Chemistry</span>
                  <span className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs">Measurement Science</span>
                </div>
              </div>

              <div className="border-l-2 border-amber-500/30 pl-6 relative pb-6">
                <div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[7px] top-1"></div>
                <h3 className="text-amber-400 font-bold mb-1">Institutional Memory <span className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-0.5 rounded ml-2">VERIFIED</span></h3>
                <p className="text-slate-300 text-sm font-mono mt-2">CSIR • Mintek • SANAS</p>
              </div>
            </div>

            <div className="mt-4 bg-amber-950/30 border border-amber-500/20 p-4 rounded-lg">
              <div className="text-xs text-amber-500/70 uppercase tracking-wider mb-1">Genome Output</div>
              <div className="text-amber-400 font-bold">Physical Transformation Capability</div>
            </div>
          </div>

          {/* Nigeria Genome Path */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500/10 text-emerald-500 text-xs px-4 py-2 rounded-bl-lg border-b border-l border-emerald-500/20 font-bold uppercase tracking-wider">
              Coordination Intelligence
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">🇳🇬</span> Nigeria
            </h2>

            <div className="space-y-6">
              <div className="border-l-2 border-emerald-500/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                <h3 className="text-emerald-400 font-bold mb-1">Environmental Layer</h3>
                <p className="text-slate-300 text-sm">Large young population, rapid urban concentration, active informal entrepreneurial networks.</p>
              </div>

              <div className="border-l-2 border-emerald-500/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                <h3 className="text-emerald-400 font-bold mb-1">Constraint Layer</h3>
                <p className="text-slate-300 text-sm italic">"How do millions of people coordinate and exchange value efficiently?"</p>
              </div>

              <div className="border-l-2 border-emerald-500/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                <h3 className="text-emerald-400 font-bold mb-1">Adaptation Layer (Branching)</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs">Digital Commerce</span>
                  <span className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs">FinTech</span>
                  <span className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs">Software</span>
                  <span className="bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs">Communication Networks</span>
                </div>
              </div>

              <div className="border-l-2 border-emerald-500/30 pl-6 relative pb-6">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
                <h3 className="text-emerald-400 font-bold mb-1">Institutional Memory <span className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-0.5 rounded ml-2">VERIFIED</span></h3>
                <p className="text-slate-300 text-sm font-mono mt-2">Flutterwave • Paystack • Yaba Ecosystem</p>
              </div>
            </div>

            <div className="mt-4 bg-emerald-950/30 border border-emerald-500/20 p-4 rounded-lg">
              <div className="text-xs text-emerald-500/70 uppercase tracking-wider mb-1">Genome Output</div>
              <div className="text-emerald-400 font-bold">Human Coordination Capability</div>
            </div>
          </div>

        </div>

        {/* The Meaning Layer */}
        <div className="bg-slate-900 border border-cyan-900/50 rounded-xl p-8 text-center max-w-4xl mx-auto shadow-[0_0_30px_rgba(6,182,212,0.1)]">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">The AXIONYX Meaning Layer</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            "When different evolutionary intelligences communicate through a shared meaning layer, civilization gains capabilities that neither system could create independently."
          </p>
        </div>

      </div>
    </div>
  );
}
