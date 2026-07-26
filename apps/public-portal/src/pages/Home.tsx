import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Database, ShieldCheck, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gray-800 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
          The Translation Engine
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Building trustworthy intelligence systems for industry, education, and society. 
          We translate raw reality into mathematical evidence, generating knowledge you can verify.
        </p>
        <Link to="/observatory" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
          <span>Explore The Observatory</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-100 mb-8 border-b border-gray-700 pb-4">Latest Engineering Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Coal Laboratory Intelligence" icon={<Database className="w-8 h-8 text-gray-400" />} desc="Translating physical coal samples into compliant ISO data streams." link="/observatory" />
          <Card title="Vehicle Intelligence" icon={<Activity className="w-8 h-8 text-gray-400" />} desc="From raw telemetry to explainable, evidence-backed maintenance." link="/observatory" />
          <Card title="Industrial Equipment Design" icon={<Brain className="w-8 h-8 text-gray-400" />} desc="Proving ISO standards compliance through deterministic design." link="/observatory" />
          <Card title="Environmental Sensors" icon={<ShieldCheck className="w-8 h-8 text-gray-400" />} desc="The Balanced Truth Sensor model for verified IoT data." link="/observatory" />
        </div>
      </section>
    </div>
  );
}

function Card({ title, icon, desc, link }: { title: string, icon: React.ReactNode, desc: string, link: string }) {
  return (
    <Link to={link} className="block group">
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all shadow-lg h-full flex flex-col">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm flex-grow">{desc}</p>
      </div>
    </Link>
  );
}
