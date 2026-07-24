import Link from "next/link";
import { Beaker, FileText, Activity, Database, ShieldCheck, ChevronRight } from "lucide-react";

export default function LaboratoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-slate-950">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2 font-bold text-white hover:text-indigo-400 transition-colors">
            <Beaker className="h-5 w-5 text-indigo-500" />
            <span>Laboratory</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <Link href="/laboratory" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-300 rounded-md hover:bg-slate-800 hover:text-white">
            <Activity className="h-4 w-4" />
            Dashboard
          </Link>
          <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Operations
          </div>
          <Link href="/laboratory/samples" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-300 rounded-md hover:bg-slate-800 hover:text-white">
            <Beaker className="h-4 w-4" />
            Samples & CoC
          </Link>
          <Link href="/laboratory/measurements" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-300 rounded-md hover:bg-slate-800 hover:text-white">
            <Database className="h-4 w-4" />
            Measurements
          </Link>
          <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Quality
          </div>
          <Link href="/laboratory/instruments" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-300 rounded-md hover:bg-slate-800 hover:text-white">
            <Activity className="h-4 w-4" />
            Instruments
          </Link>
          <Link href="/laboratory/calibration" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-300 rounded-md hover:bg-slate-800 hover:text-white">
            <ShieldCheck className="h-4 w-4" />
            Calibration
          </Link>
          <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Trust
          </div>
          <Link href="/laboratory/evidence" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-300 rounded-md hover:bg-slate-800 hover:text-white">
            <FileText className="h-4 w-4" />
            Audit Evidence
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 flex shrink-0 items-center gap-2 border-b border-slate-800 px-6 bg-slate-900/50">
          <Link href="/laboratory" className="text-sm font-medium text-slate-400 hover:text-white">Laboratory</Link>
          <ChevronRight className="h-4 w-4 text-slate-600" />
          <span className="text-sm font-medium text-slate-200">Workspace</span>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-slate-950 p-6">
          {children}
        </main>
      </div>
      
    </div>
  );
}
