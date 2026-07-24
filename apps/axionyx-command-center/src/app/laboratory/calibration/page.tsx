export default function Calibration() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Calibration & Verification</h1>
          <p className="text-sm text-slate-400 mt-1">Ensure compliance with ISO Guide 98 and ISO 17025.</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-slate-400 mb-4">Calibration Records go here</div>
        <p className="text-sm text-slate-500 max-w-md">
          Track upcoming calibrations, record calibration certificates, and compute uncertainty.
        </p>
      </div>
    </div>
  );
}
