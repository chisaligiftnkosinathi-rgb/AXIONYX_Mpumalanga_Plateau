export default function WorkspacePage() {
    return (
        <main className="min-h-screen p-24 bg-slate-950 text-slate-50 font-mono">
            <h1 className="text-3xl font-bold text-teal-400 mb-8 uppercase">Scientific Workspace</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Collaborators Panel */}
                <div className="bg-slate-900 p-8 rounded border border-slate-800">
                    <h2 className="text-xl font-bold mb-6 text-slate-300">Active Collaborators</h2>
                    <ul className="space-y-4">
                        <li className="p-4 bg-slate-800 rounded border-l-4 border-blue-500">
                            <span className="block font-bold">University Laboratory (Pretoria)</span>
                            <span className="text-sm text-slate-400">Role: Evidence Validator</span>
                        </li>
                        <li className="p-4 bg-slate-800 rounded border-l-4 border-orange-500">
                            <span className="block font-bold">Mining Partner Corp</span>
                            <span className="text-sm text-slate-400">Role: Field Data Provider</span>
                        </li>
                        <li className="p-4 bg-slate-800 rounded border-l-4 border-green-500">
                            <span className="block font-bold">Mpumalanga Community Council</span>
                            <span className="text-sm text-slate-400">Role: Impact Observer</span>
                        </li>
                        <li className="p-4 bg-slate-800 rounded border-l-4 border-red-500">
                            <span className="block font-bold">AXIONYX Guardian</span>
                            <span className="text-sm text-slate-400">Role: Governance Review</span>
                        </li>
                    </ul>
                </div>

                {/* Evidence Submission Panel */}
                <div className="bg-slate-900 p-8 rounded border border-slate-800">
                    <h2 className="text-xl font-bold mb-6 text-slate-300">Evidence Submission Workflow</h2>
                    
                    <div className="mb-6 p-4 border border-teal-800 bg-teal-950 rounded">
                        <h3 className="font-bold text-teal-400 mb-2">Submit New Observation</h3>
                        <input type="text" placeholder="Methodology" className="w-full p-2 mb-2 bg-slate-800 border border-slate-700 rounded text-slate-200" />
                        <input type="text" placeholder="Dataset Reference Hash" className="w-full p-2 mb-4 bg-slate-800 border border-slate-700 rounded text-slate-200" />
                        <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded w-full">
                            Submit for Scientific Review
                        </button>
                    </div>

                    <div className="mt-8">
                        <h3 className="font-bold text-yellow-500 mb-2 uppercase">Maturity Advancement</h3>
                        <p className="text-sm text-slate-400 mb-4">Current: C3 | Target: C4</p>
                        <p className="text-xs text-slate-500 mb-2">Required Signatures:</p>
                        <ul className="text-sm space-y-1 mb-4">
                            <li className="text-green-400">✅ University</li>
                            <li className="text-slate-500">⏳ Industry</li>
                            <li className="text-slate-500">⏳ AXIONYX Guardian</li>
                        </ul>
                        <button className="bg-slate-800 text-slate-400 border border-slate-700 py-2 px-4 rounded w-full cursor-not-allowed" disabled>
                            Signatures Pending
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}
