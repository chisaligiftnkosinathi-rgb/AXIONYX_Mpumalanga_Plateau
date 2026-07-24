import { Activity, AlertTriangle, Beaker, CheckCircle2, Clock } from "lucide-react";

export default function LaboratoryDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-white">Laboratory Overview</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-400">Samples Today</h3>
            <Beaker className="h-4 w-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-bold text-white">142</div>
          <p className="text-xs text-slate-500 mt-1">+12% from yesterday</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-400">Pending Reviews</h3>
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-white">18</div>
          <p className="text-xs text-slate-500 mt-1">4 require immediate attention</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-400">Instrument Status</h3>
            <Activity className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-white">24 / 26</div>
          <p className="text-xs text-slate-500 mt-1">2 offline for maintenance</p>
        </div>

        <div className="rounded-xl border border-amber-900/50 bg-amber-950/20 p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-amber-500">Active CAPAs</h3>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-amber-400">3</div>
          <p className="text-xs text-amber-500/70 mt-1">Non-conformances logged</p>
        </div>

      </div>

      {/* Main Content Grids */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        
        {/* Recent Samples */}
        <div className="lg:col-span-4 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Samples</h3>
          <div className="space-y-4">
            {[
              { id: "S-240531-01", type: "Water", status: "In Analysis", time: "10 mins ago" },
              { id: "S-240531-02", type: "Soil", status: "Pending Prep", time: "45 mins ago" },
              { id: "S-240531-03", type: "Air Filter", status: "Completed", time: "2 hours ago" },
              { id: "S-240531-04", type: "Coal", status: "Rejected", time: "3 hours ago" },
            ].map((sample) => (
              <div key={sample.id} className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-white">{sample.id}</p>
                  <p className="text-xs text-slate-500">{sample.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    sample.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20" :
                    sample.status === "Rejected" ? "bg-red-500/10 text-red-400 ring-red-500/20" :
                    "bg-indigo-500/10 text-indigo-400 ring-indigo-500/20"
                  }`}>
                    {sample.status}
                  </span>
                  <span className="text-xs text-slate-500 w-20 text-right">{sample.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Center */}
        <div className="lg:col-span-3 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Action Center</h3>
          <div className="space-y-4">
            
            <div className="flex gap-4 items-start rounded-lg bg-amber-950/30 p-3 border border-amber-900/50">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-amber-200">Calibration Due</h4>
                <p className="text-xs text-amber-500/80 mt-1">ICP-MS Agilent 7900 calibration expires in 3 days. Standard ISO 17025 compliance risk.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start rounded-lg bg-emerald-950/30 p-3 border border-emerald-900/50">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-emerald-200">PT Results Accepted</h4>
                <p className="text-xs text-emerald-500/80 mt-1">Water Quality Proficiency Test round 44 passed with Z-Score of 0.4.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
