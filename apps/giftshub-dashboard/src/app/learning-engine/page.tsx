"use client";
import React, { useState } from 'react';

export default function LearningEngine() {
  const [learningMaturity, setLearningMaturity] = useState('RULE_ACTIVE');

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen font-sans">
      <header className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-500">LEARNING ENGINE</h1>
          <p className="text-gray-400">Continuous Improvement & Preventive Intelligence</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 font-mono">SYSTEM INTELLIGENCE</div>
          <div className="text-xl font-bold text-blue-400 font-mono">GENERATION 4: EVOLUTION</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Learning Object Details */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl">
          <div className="border-b border-gray-800 pb-4 mb-4">
            <div className="text-blue-500 font-mono text-sm font-bold mb-1">GIFT-HUB-LL-001</div>
            <h2 className="text-xl font-bold text-gray-200">System Memory: The Omars Event</h2>
            <div className="text-xs text-gray-500 mt-1 font-mono">ORIGIN: GIFT-HUB-NC-001</div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Failure Pattern</h3>
              <p className="text-gray-300 bg-black p-3 rounded border border-gray-800 font-mono text-sm">
                High market opportunity + insufficient partner verification = Trust exposure.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Root Cause</h3>
              <p className="text-gray-300 bg-black p-3 rounded border border-gray-800 font-mono text-sm">
                Opportunity discovery happened before partner qualification.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">Synthesized Lesson</h3>
              <p className="text-blue-300 bg-blue-900/10 p-3 rounded border border-blue-900 font-mono text-sm">
                Economic value cannot be separated from evidence integrity. Capability does not emerge automatically from resources; it emerges from verified connections.
              </p>
            </div>
          </div>
        </section>

        {/* Preventive Rule Generation */}
        <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl flex flex-col">
          <h2 className="text-xl font-bold mb-6 text-purple-400 border-b border-gray-800 pb-2">Preventive Intelligence</h2>
          
          <div className="flex-1 flex flex-col justify-center space-y-3 font-mono text-xs mb-8 relative">
            <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-800 z-0"></div>

            {['LESSON_CREATED', 'LESSON_CONFIRMED', 'PREVENTIVE_RULE_GENERATED', 'RULE_ACTIVE', 'RULE_MONITORED'].map((state) => {
              const isActive = learningMaturity === state;
              const isPast = ['LESSON_CREATED', 'LESSON_CONFIRMED', 'PREVENTIVE_RULE_GENERATED'].includes(state) && ['RULE_ACTIVE', 'RULE_MONITORED'].includes(learningMaturity);
              
              let bgColor = 'bg-black';
              let borderColor = 'border-gray-800';
              let textColor = 'text-gray-600';

              if (isActive) {
                bgColor = 'bg-purple-900/20';
                borderColor = 'border-purple-500';
                textColor = 'text-purple-400';
              } else if (isPast) {
                bgColor = 'bg-gray-800';
                borderColor = 'border-gray-600';
                textColor = 'text-gray-400';
              }

              return (
                <div key={state} className={`relative z-10 p-3 rounded border flex items-center gap-4 ${bgColor} ${borderColor} ${textColor}`}>
                  <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-purple-500' : isPast ? 'bg-gray-500' : 'bg-gray-800'}`}></div>
                  {state}
                  {isActive && state === 'RULE_ACTIVE' && <span className="ml-auto text-purple-300">Confidence: 0.95</span>}
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-black border border-purple-900 rounded-lg">
            <h3 className="text-sm font-bold text-purple-500 mb-2">GIFT-HUB-PR-001 (ACTIVE)</h3>
            <p className="text-gray-300 font-mono text-xs leading-relaxed">
              Before any node activation:<br/><br/>
              [X] Demand Evidence<br/>
              [X] Capability Evidence<br/>
              [X] Trust Evidence<br/>
              [X] Compliance Evidence<br/><br/>
              <span className="text-purple-400">Must be verified. Node admission blocked if incomplete.</span>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
