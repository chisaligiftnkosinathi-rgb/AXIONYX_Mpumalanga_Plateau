import React from 'react';

export default function WorkspaceDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 font-sans">
      <header className="mb-12">
        <h1 className="text-4xl font-light tracking-tight">Your Capability Journey</h1>
        <p className="text-gray-400 mt-2 text-lg">Identity: Gift Chisali | Role: AI Engineer / Researcher</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Module */}
        <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4">Current Mission</h2>
          <p className="text-xl font-medium">Build AI tools for automotive diagnostics</p>
        </section>

        {/* Project Module */}
        <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-sm uppercase tracking-widest text-emerald-400 mb-4">Active Project</h2>
          <p className="text-xl font-medium">AI Car Doctor</p>
        </section>

        {/* Evidence Module */}
        <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl col-span-1 md:col-span-2">
          <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">Evidence Collected</h2>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-[60%]"></div>
            </div>
            <span className="text-xl font-medium">60%</span>
          </div>
          <p className="text-gray-400 mt-2 text-sm">12 artifacts securely validated</p>
        </section>

        {/* Capabilities Module */}
        <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl col-span-1 md:col-span-2">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-6">Capabilities Emerging</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">AI Engineering</span>
                <span className="text-orange-400">Level: ENGINEER</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[80%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">Research</span>
                <span className="text-orange-400">Level: CREATOR</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[100%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-lg">Software Development</span>
                <span className="text-orange-400">Level: BUILDER</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[60%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Milestone */}
        <section className="bg-blue-900/20 border border-blue-800 p-6 rounded-xl col-span-1 md:col-span-2 flex items-center justify-between">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-1">Next Milestone</h2>
            <p className="text-2xl font-medium text-white">Deploy Prototype</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Capture Evidence
          </button>
        </section>

      </div>
    </div>
  );
}
