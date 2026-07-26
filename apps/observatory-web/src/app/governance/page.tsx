export default function GovernancePage() {
    return (
        <main className="min-h-screen p-24 bg-slate-950 text-slate-50 font-mono flex flex-col items-center">
            <h1 className="text-3xl font-bold text-red-400 mb-8 uppercase">Guardian Review Interface</h1>
            
            <div className="bg-red-950 border-2 border-red-500 p-8 rounded max-w-2xl w-full text-center">
                <h2 className="text-2xl font-bold text-red-400 mb-2 uppercase">AXIONYX Recommendation</h2>
                <p className="text-slate-300 mb-8">System ID: AXIONYX_REALITY_CRYSTAL_001</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                    <div className="bg-red-900/50 p-4 rounded">
                        <span className="text-slate-400 block text-sm uppercase">Confidence Score</span>
                        <span className="text-2xl font-bold text-white">78%</span>
                    </div>
                    <div className="bg-red-900/50 p-4 rounded">
                        <span className="text-slate-400 block text-sm uppercase">Known Risks</span>
                        <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <div className="bg-red-900/50 p-4 rounded">
                        <span className="text-slate-400 block text-sm uppercase">Unknown Variables</span>
                        <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <div className="bg-red-900/50 p-4 rounded border-2 border-yellow-500 animate-pulse">
                        <span className="text-yellow-500 block text-sm uppercase">Human Review Required</span>
                        <span className="text-2xl font-bold text-white">YES</span>
                    </div>
                </div>
                
                <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded uppercase tracking-widest w-full">
                    Open Planetary Stewardship Protocol
                </button>
            </div>
        </main>
    );
}
