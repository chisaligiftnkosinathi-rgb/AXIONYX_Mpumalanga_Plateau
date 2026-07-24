export default function Measurements() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Measurements</h1>
          <p className="text-sm text-slate-400 mt-1">Raw telemetry, computed results, and uncertainty models.</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-slate-400 mb-4">Measurement Data Grid</div>
        <p className="text-sm text-slate-500 max-w-md">
          This connects the Real-World (Instrument Telemetry) to the Database (Measurements), generating Evidence.
        </p>
      </div>
    </div>
  );
}
