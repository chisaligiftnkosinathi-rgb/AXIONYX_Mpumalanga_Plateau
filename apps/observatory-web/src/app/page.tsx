export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-950 text-slate-50">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8 tracking-widest uppercase">AXIONYX Observatory</h1>
      <p className="text-slate-400 italic mb-12 text-center max-w-2xl">
        "South Africa's Scientific Intelligence Infrastructure"
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        <a href="/crystals" className="p-6 border border-slate-800 rounded-lg bg-slate-900 hover:border-yellow-400 transition-colors">
          <h2 className="text-xl font-bold text-blue-400 mb-2">💎 Reality Crystals</h2>
          <p className="text-slate-400 text-sm">Explore verified models of reality.</p>
        </a>
        <a href="/evidence" className="p-6 border border-slate-800 rounded-lg bg-slate-900 hover:border-yellow-400 transition-colors">
          <h2 className="text-xl font-bold text-green-400 mb-2">📜 Evidence Ledger</h2>
          <p className="text-slate-400 text-sm">Trace the cryptographic lineage of knowledge.</p>
        </a>
        <a href="/labs" className="p-6 border border-slate-800 rounded-lg bg-slate-900 hover:border-yellow-400 transition-colors">
          <h2 className="text-xl font-bold text-purple-400 mb-2">🔬 Scientific Network</h2>
          <p className="text-slate-400 text-sm">Discover capabilities across SANAS labs and universities.</p>
        </a>
        <a href="/projects" className="p-6 border border-slate-800 rounded-lg bg-slate-900 hover:border-yellow-400 transition-colors">
          <h2 className="text-xl font-bold text-orange-400 mb-2">🌍 Regenerative Pilots</h2>
          <p className="text-slate-400 text-sm">Monitor live ecosystem interventions (e.g. Mpumalanga).</p>
        </a>
        <a href="/governance" className="p-6 border border-slate-800 rounded-lg bg-slate-900 hover:border-yellow-400 transition-colors">
          <h2 className="text-xl font-bold text-red-400 mb-2">⚖️ Guardian Reports</h2>
          <p className="text-slate-400 text-sm">Review risk escalations and council interventions.</p>
        </a>
        <a href="/workspace" className="p-6 border border-slate-800 rounded-lg bg-slate-900 hover:border-teal-400 transition-colors col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-bold text-teal-400 mb-2">🤝 Scientific Workspace</h2>
          <p className="text-slate-400 text-sm">Collaborative environment for submitting evidence, managing reviews, and advancing crystal maturity.</p>
        </a>
      </div>
    </main>
  );
}
