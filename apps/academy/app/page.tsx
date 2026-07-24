import React from 'react';

export default function AcademyDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 font-sans">
      <header className="mb-12">
        <h1 className="text-4xl font-light tracking-tight">AXIONYX Academy Engine</h1>
        <p className="text-gray-400 mt-2 text-lg">Learner: Gift Chisali | State: REVIEW_PENDING</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Mission Module */}
        <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl col-span-1 lg:col-span-2">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4">Current Mission</h2>
          <p className="text-2xl font-medium">AI Automotive Intelligence</p>
          <div className="mt-4 pt-4 border-t border-gray-800 flex gap-4 text-sm text-gray-400">
            <span>Path: AI Engineer</span>
            <span>&bull;</span>
            <span>Module: AI Engineering Foundations</span>
          </div>
        </section>

        {/* Mentor Module */}
        <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl col-span-1">
          <h2 className="text-sm uppercase tracking-widest text-emerald-400 mb-4">Active Mentor</h2>
          <p className="text-xl font-medium">Dr. Sarah Jenkins</p>
          <p className="text-gray-400 text-sm mt-1">Automotive AI Specialist</p>
          <button className="mt-6 w-full bg-gray-800 hover:bg-gray-700 py-2 rounded text-sm transition-colors">
            Request Design Review
          </button>
        </section>

        {/* Challenge Engine Module */}
        <section className="bg-blue-900/10 border border-blue-900/50 p-6 rounded-xl col-span-1 lg:col-span-2">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4">Current Challenge</h2>
          <p className="text-2xl font-medium">Build vehicle fault classifier</p>
          
          <div className="mt-6 space-y-3">
            <h3 className="text-sm text-gray-400">Required Evidence:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Source code repository link</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Validation dataset metrics</li>
              <li className="flex items-center gap-2 text-gray-500"><span>○</span> Deployed model API endpoint</li>
              <li className="flex items-center gap-2 text-gray-500"><span>○</span> Demonstration video (3 mins max)</li>
            </ul>
          </div>
        </section>

        {/* Capabilities Growth Module */}
        <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl col-span-1">
          <h2 className="text-sm uppercase tracking-widest text-orange-400 mb-6">Developing Capabilities</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Programming</span>
                <span className="text-orange-400 text-xs">BUILDER</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[60%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Machine Learning</span>
                <span className="text-orange-400 text-xs">EXPLORER</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[40%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Product Design</span>
                <span className="text-orange-400 text-xs">NOVICE</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[20%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Milestone */}
        <section className="bg-purple-900/20 border border-purple-800 p-6 rounded-xl col-span-1 md:col-span-2 lg:col-span-3 flex items-center justify-between">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-1">Next Milestone</h2>
            <p className="text-2xl font-medium text-white">Submit Prototype Evidence</p>
            <p className="text-sm text-gray-400 mt-1">This will trigger a Capability Review and upgrade Machine Learning to BUILDER.</p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Enter Workspace
          </button>
        </section>

      </div>
    </div>
  );
}
