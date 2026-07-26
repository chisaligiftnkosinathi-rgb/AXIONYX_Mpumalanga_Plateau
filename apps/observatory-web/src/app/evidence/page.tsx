export default function EvidencePage() {
    return (
        <main className="min-h-screen p-24 bg-slate-950 text-slate-50 font-mono">
            <h1 className="text-3xl font-bold text-green-400 mb-8 uppercase">Evidence Ledger</h1>
            
            <div className="bg-slate-900 p-8 rounded border border-slate-800 max-w-4xl">
                <h2 className="text-xl font-bold mb-6 text-slate-300">Evidence Record: a83f92b4...</h2>
                
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <span className="text-slate-500 block text-sm uppercase tracking-widest">Measurement</span>
                        <p className="text-lg">pH reduction after treatment (3.2 to 6.8)</p>
                    </div>
                    <div>
                        <span className="text-slate-500 block text-sm uppercase tracking-widest">Methodology</span>
                        <p>Laboratory closed-system bioreactor simulation using local microbial consortia.</p>
                    </div>
                    <div>
                        <span className="text-slate-500 block text-sm uppercase tracking-widest">Source</span>
                        <p className="text-purple-300">University Laboratory (Pretoria)</p>
                    </div>
                    <div>
                        <span className="text-slate-500 block text-sm uppercase tracking-widest">Timestamp</span>
                        <p>2026-07-26T10:00:00Z</p>
                    </div>
                    <div className="border-t border-slate-800 pt-4 mt-4">
                        <span className="text-slate-500 block text-sm uppercase tracking-widest">Verification Status</span>
                        <p className="text-green-400 font-bold">Independent Review (VERIFIED)</p>
                    </div>
                    <div>
                        <span className="text-slate-500 block text-sm uppercase tracking-widest">Cryptographic Hash</span>
                        <p className="text-xs text-slate-600 bg-slate-950 p-2 rounded">a83f92b4c10e6a9876543210fdecba98</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
