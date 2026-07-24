import Link from "next/link";
import { Activity, Beaker, Database, FileText, Settings, ShieldAlert, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-16 shrink-0 items-center border-b border-slate-800 bg-slate-950 px-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Cpu className="h-6 w-6 text-indigo-500" />
          <span>AXIONYX</span>
          <span className="text-slate-500 font-light ml-2">Command Center</span>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          
          <Link href="/laboratory" className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-indigo-500 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Beaker className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold">Laboratory Intelligence</h2>
            </div>
            <p className="text-sm text-slate-400">
              Sample lifecycle, instrumentation, calibration, and evidence generation.
            </p>
          </Link>

          <Link href="/mining" className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-amber-500 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-lg bg-amber-500/10 p-3 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Activity className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold">Mining Intelligence</h2>
            </div>
            <p className="text-sm text-slate-400">
              Asset tracking, sensor telemetry, and predictive maintenance.
            </p>
          </Link>

          <div className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 opacity-50 cursor-not-allowed">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-400">
                <Database className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold">Environmental Module</h2>
            </div>
            <p className="text-sm text-slate-400">
              Coming soon. Atmosphere, hydrology, and sustainability twins.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
