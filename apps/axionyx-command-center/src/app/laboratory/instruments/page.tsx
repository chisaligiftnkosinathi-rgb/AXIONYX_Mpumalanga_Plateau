export default function InstrumentRegistry() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Instrument Registry</h1>
          <p className="text-sm text-slate-400 mt-1">Asset lifecycle from Commissioning to Retirement.</p>
        </div>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Add Instrument
        </button>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-slate-400 mb-4">Instrument grid goes here</div>
        <p className="text-sm text-slate-500 max-w-md">
          Integration point for Telemetry, Calibration scheduling, and Preventive Maintenance.
        </p>
      </div>
    </div>
  );
}
