export default function SampleRegistration() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Sample Lifecycle & Chain of Custody</h1>
          <p className="text-sm text-slate-400 mt-1">ISO 17025 compliant sample tracking and evidence generation.</p>
        </div>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Register New Sample
        </button>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-slate-400 mb-4">Sample data grid goes here (TanStack Table)</div>
        <p className="text-sm text-slate-500 max-w-md">
          This module will track the sample from Registration → Barcode → Collection → Transport → Storage → Preparation → Analysis.
        </p>
      </div>
    </div>
  );
}
