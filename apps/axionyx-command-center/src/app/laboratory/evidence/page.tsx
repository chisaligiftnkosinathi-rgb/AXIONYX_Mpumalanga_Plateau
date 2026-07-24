export default function Evidence() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Audit Evidence</h1>
          <p className="text-sm text-slate-400 mt-1">Immutable records backing every operational decision.</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-slate-400 mb-4">Evidence Graph & Document Viewer</div>
        <p className="text-sm text-slate-500 max-w-md">
          This connects the AXIONYX Kernel directly to the UI. View PDF reports, calibration certificates, and digital signatures.
        </p>
      </div>
    </div>
  );
}
