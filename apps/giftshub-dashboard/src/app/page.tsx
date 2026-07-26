"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeStage, setActiveStage] = useState(0);

  const genome = [
    {
      id: "SEED",
      question: "What potential exists?",
      desc: "The invisible beginning. Potential carried forward from ancestors, culture, and environment.",
      icon: "🌱"
    },
    {
      id: "ROOT",
      question: "What relationships and evidence support growth?",
      desc: "Every teacher, mentor, failure, and correction that provided nutrients.",
      icon: "🪢"
    },
    {
      id: "GROWTH RING",
      question: "What hardships have been converted into wisdom?",
      desc: "The ability to carry knowledge upward through the discipline of surviving the sun (reality).",
      icon: "🪵"
    },
    {
      id: "POLLINATION",
      question: "How does this person make others stronger?",
      desc: "The visible capability (the flower) sharing information, trust, and resources.",
      icon: "🐝"
    },
    {
      id: "LEGACY",
      question: "What seeds are they creating for future generations?",
      desc: "The ability to create new flowers. Leaving the garden healthier than they found it.",
      icon: "🌻"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans flex flex-col relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-900/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/10 blur-[150px] pointer-events-none"></div>

      <div className="flex-grow flex flex-col items-center justify-center p-8 z-10">
        
        <div className="text-center mb-16 animation-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-500 tracking-tight">
            GIFT'S HUB
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-400 mt-4 font-light tracking-widest">
            THE AFRICAN CAPABILITY BANK
          </h2>
          <div className="mt-6 text-sm font-mono text-emerald-500/80 max-w-2xl mx-auto">
            Reality ➔ Observation ➔ Learning ➔ Transformation ➔ Capability ➔ Collaboration ➔ Legacy
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          
          {/* Narrative / Thesis */}
          <div className="space-y-8">
            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-200 mb-4 border-b border-gray-800 pb-2">
                The Flower of Imbally
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Every human being is a seed carrying potential intelligence. The purpose of civilization is not to manufacture flowers, but to create the environment where seeds can discover their ability to bloom.
              </p>
              <p className="text-gray-400 leading-relaxed font-mono text-sm border-l-2 border-emerald-500 pl-4 italic">
                "A flower is never self-created. It is the visible proof of invisible collaboration. The beautiful flower is not the end. It is proof that the entire ecosystem worked together."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Link href="/civilization-engine" className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-emerald-500 transition-colors group">
                <div className="text-emerald-500 mb-2 font-mono text-xs">A66.16</div>
                <div className="font-bold group-hover:text-emerald-400 transition-colors">Civilization Engine</div>
              </Link>
              <Link href="/growth-rings" className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-amber-500 transition-colors group">
                <div className="text-amber-500 mb-2 font-mono text-xs">A66.18</div>
                <div className="font-bold group-hover:text-amber-400 transition-colors">Dendrochronology</div>
              </Link>
              <Link href="/impande-bank" className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-500 transition-colors group">
                <div className="text-blue-500 mb-2 font-mono text-xs">A66.19</div>
                <div className="font-bold group-hover:text-blue-400 transition-colors">Impande Score</div>
              </Link>
              <Link href="/acri-pollination" className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500 transition-colors group">
                <div className="text-purple-500 mb-2 font-mono text-xs">A66.25</div>
                <div className="font-bold group-hover:text-purple-400 transition-colors">ACRI Pollination</div>
              </Link>
            </div>
          </div>

          {/* The Human Potential Genome */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-gray-300 mb-2">The Human Potential Genome</h3>
            
            {genome.map((stage, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStage(idx)}
                className={`p-5 rounded-xl border transition-all duration-300 cursor-default ${
                  activeStage === idx 
                    ? 'bg-gray-800 border-gray-600 transform scale-[1.02] shadow-lg shadow-black/50' 
                    : 'bg-gray-950 border-gray-900 hover:border-gray-800'
                }`}
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{stage.icon}</div>
                  <div>
                    <div className="text-xs font-mono text-gray-500 mb-1">{stage.id} QUESTION</div>
                    <div className={`font-bold ${activeStage === idx ? 'text-amber-400' : 'text-gray-300'}`}>
                      {stage.question}
                    </div>
                    {activeStage === idx && (
                      <div className="text-sm text-gray-400 mt-2 animation-fade-in">
                        {stage.desc}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
