"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navGroups = [
    {
      title: 'Operations',
      links: [
        { name: 'Operational Pilot', path: '/operations/operational-pilot' },
        { name: 'Live Observatory', path: '/operations/live-observatory' },
      ]
    },
    {
      title: 'Laboratory',
      links: [
        { name: 'Batch Processor', path: '/laboratory/batch-processor' },
        { name: 'Evidence', path: '/laboratory/evidence' },
        { name: 'Chain of Custody', path: '/laboratory/chain-of-custody' },
      ]
    },
    {
      title: 'Decision Support',
      links: [
        { name: 'Missions', path: '/decision-support/missions' },
        { name: 'Decisions', path: '/decision-support/decisions' },
        { name: 'Approvals', path: '/decision-support/approvals' },
      ]
    },
    {
      title: 'Engineering',
      links: [
        { name: 'Tracing', path: '/engineering/tracing' },
        { name: 'Replay', path: '/engineering/replay' },
        { name: 'Metrics', path: '/engineering/metrics' },
      ]
    },
    {
      title: 'Administration',
      links: [
        { name: 'ISP Billing', path: '/administration/isp-billing' },
        { name: 'Schemas', path: '/administration/schemas' },
        { name: 'Policies', path: '/administration/policies' },
      ]
    }
  ];

  return (
    <div className="w-64 bg-slate-950 border-r border-slate-800 h-full flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-black text-white tracking-tighter">AXIONYX<span className="text-fuchsia-500 text-sm align-top">α1</span></h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {navGroups.map(group => (
          <div key={group.title}>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-3">{group.title}</h2>
            <ul className="space-y-1">
              {group.links.map(link => (
                <li key={link.path}>
                  <Link href={link.path} className={`block px-3 py-2 text-sm rounded ${pathname.startsWith(link.path) ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
