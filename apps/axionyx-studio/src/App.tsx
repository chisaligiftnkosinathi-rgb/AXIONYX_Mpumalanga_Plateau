import { useState } from 'react';
import { 
  Package, 
  Search, 
  Map as MapIcon, 
  Database, 
  Network, 
  Briefcase, 
  History, 
  Lightbulb,
  ArrowRight,
  ShieldAlert,
  FileCheck,
  ChevronRight,
  Globe
} from 'lucide-react';
import './index.css';

type Workspace = 'Explorer' | 'Packs' | 'DigitalTwin' | 'Governance' | 'Discovery';

function App() {
  const [activeWorkspace, setActiveWorkspace] = useState<Workspace>('Explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [showInspector, setShowInspector] = useState(false);

  return (
    <div className="flex h-screen bg-[#0B0E14] text-[#E2E8F0] overflow-hidden font-sans">
      
      {/* Sidebar Navigation */}
      <div className="w-16 flex flex-col items-center py-6 border-r border-[#2D3748] bg-[#151A22] z-20">
        <div className="mb-8">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg">A</div>
        </div>
        
        <div className="flex flex-col gap-6 w-full items-center">
          <SidebarIcon 
            icon={<Network size={22} />} 
            active={activeWorkspace === 'Explorer'} 
            onClick={() => setActiveWorkspace('Explorer')} 
            tooltip="Knowledge Explorer" 
          />
          <SidebarIcon 
            icon={<Package size={22} />} 
            active={activeWorkspace === 'Packs'} 
            onClick={() => setActiveWorkspace('Packs')} 
            tooltip="Pack Manager" 
          />
          <SidebarIcon 
            icon={<Globe size={22} />} 
            active={activeWorkspace === 'DigitalTwin'} 
            onClick={() => setActiveWorkspace('DigitalTwin')} 
            tooltip="Digital Twin" 
          />
          <SidebarIcon 
            icon={<Briefcase size={22} />} 
            active={activeWorkspace === 'Governance'} 
            onClick={() => setActiveWorkspace('Governance')} 
            tooltip="Governance Workspace" 
          />
          <SidebarIcon 
            icon={<Lightbulb size={22} />} 
            active={activeWorkspace === 'Discovery'} 
            onClick={() => setActiveWorkspace('Discovery')} 
            tooltip="Discovery Engine" 
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative">
        
        {/* Top Navbar / Command Palette */}
        <header className="h-14 border-b border-[#2D3748] bg-[#151A22]/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
          <div className="flex items-center text-sm font-medium text-slate-400">
            <span>AXIONYX</span>
            <ChevronRight size={14} className="mx-2 opacity-50" />
            <span className="text-white">{activeWorkspace}</span>
          </div>

          <div className="flex-1 max-w-xl px-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search nodes, policies, packs... (Ctrl+K)" 
                className="w-full bg-[#0B0E14] border border-[#2D3748] text-sm rounded-md py-1.5 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 border border-[#2D3748] rounded px-1.5 py-0.5 font-mono">
                ⌘K
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              Engine Active
            </div>
          </div>
        </header>

        {/* Dynamic Workspace Content */}
        <main className="flex-1 overflow-auto relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#151A22] via-[#0B0E14] to-[#0B0E14]">
          {activeWorkspace === 'Explorer' && <KnowledgeExplorerWorkspace />}
          {activeWorkspace === 'Packs' && <PackManagerWorkspace />}
          {activeWorkspace === 'Governance' && <GovernanceWorkspace />}
          {activeWorkspace === 'DigitalTwin' && <DigitalTwinWorkspace />}
          {activeWorkspace === 'Discovery' && <DiscoveryWorkspace />}
        </main>
      </div>

      {/* Right Inspector Panel */}
      {showInspector && (
        <div className="w-80 border-l border-[#2D3748] bg-[#151A22] flex flex-col z-20 shadow-2xl">
          <div className="h-14 border-b border-[#2D3748] flex items-center justify-between px-4">
            <h3 className="font-medium text-sm">Reasoning Inspector</h3>
            <button onClick={() => setShowInspector(false)} className="text-slate-400 hover:text-white transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="p-4 flex-1 overflow-auto">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Explain</div>
            <div className="bg-[#1D232E] border border-[#2D3748] rounded-md p-3 mb-4">
              <h4 className="text-sm font-medium mb-1">Decision</h4>
              <p className="text-xs text-slate-400">Adopt Option A (Budget +15%)</p>
            </div>
            
            <div className="flex flex-col items-center my-2 text-[#2D3748]">
              <div className="w-px h-6 bg-[#2D3748]"></div>
            </div>

            <div className="bg-[#1D232E] border border-[#2D3748] rounded-md p-3 mb-4">
              <h4 className="text-sm font-medium mb-1">Assessment</h4>
              <p className="text-xs text-slate-400">Evidence supports positive forecast for Road Quality (92%)</p>
            </div>

            <div className="flex flex-col items-center my-2 text-[#2D3748]">
              <div className="w-px h-6 bg-[#2D3748]"></div>
            </div>

            <div className="border border-green-500/30 bg-green-500/10 rounded-md p-3 mb-4">
              <h4 className="text-sm font-medium text-green-400 mb-1 flex items-center gap-1.5">
                <FileCheck size={14} /> Supporting Evidence
              </h4>
              <p className="text-xs text-slate-400">Citizen Submissions (3 votes)</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Explain Button */}
      {!showInspector && (
        <button 
          onClick={() => setShowInspector(true)}
          className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 transition-all text-sm font-medium z-30"
        >
          <Lightbulb size={16} />
          Explain Mode
        </button>
      )}

    </div>
  );
}

// ----------------------------------------------------
// Dummy Workspace Components for immediate rendering
// ----------------------------------------------------

function KnowledgeExplorerWorkspace() {
  return (
    <div className="p-8 h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-light mb-1">Knowledge Explorer</h1>
          <p className="text-slate-400 text-sm">Visualize and traverse the evidence graph</p>
        </div>
        <div className="flex bg-[#1D232E] rounded-md p-1 border border-[#2D3748]">
          <LensTab active>Hierarchy</LensTab>
          <LensTab>Network</LensTab>
          <LensTab>Timeline</LensTab>
          <LensTab>Geographic</LensTab>
        </div>
      </div>
      
      <div className="flex-1 border border-[#2D3748] rounded-lg bg-[#0B0E14] relative overflow-hidden flex items-center justify-center">
        {/* Placeholder for actual graph visualization */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}></div>
        <div className="z-10 text-center">
          <Network size={48} className="mx-auto text-blue-500 mb-4 opacity-50" />
          <h2 className="text-lg font-medium text-slate-300">Hierarchy Lens Active</h2>
          <p className="text-sm text-slate-500 mt-2">Connecting to KnowledgeRuntime...</p>
        </div>
      </div>
    </div>
  );
}

function PackManagerWorkspace() {
  return (
    <div className="p-8 h-full">
      <h1 className="text-2xl font-light mb-1">Pack Manager</h1>
      <p className="text-slate-400 text-sm mb-8">Registry of verified knowledge distributions</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PackCard name="pack-south-africa" version="1.0.0" type="National" />
        <PackCard name="pack-statssa" version="1.2.4" type="Reference" />
        <PackCard name="pack-reference-geography" version="2.0.1" type="Reference" />
        <PackCard name="pack-mpumalanga" version="1.0.0" type="Provincial" />
        <PackCard name="pack-emalahleni" version="1.0.0" type="Municipal" />
      </div>
    </div>
  );
}

function GovernanceWorkspace() {
  return (
    <div className="p-8 h-full">
      <h1 className="text-2xl font-light mb-1">Governance & Participation</h1>
      <p className="text-slate-400 text-sm mb-8">Manage public consultations, scenarios, and resolutions</p>
      
      <div className="bg-[#1D232E] border border-[#2D3748] rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Active Consultation: eMalahleni Road Budget</h2>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30">OPEN</span>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-[#2D3748] rounded bg-[#0B0E14] p-4">
            <h3 className="font-medium text-sm mb-2 text-white">Option A: Increase Budget (+15%)</h3>
            <p className="text-xs text-slate-400 mb-4">Forecast: Road Quality 92% (Range 90-95%)</p>
            <div className="flex justify-between items-center pt-3 border-t border-[#2D3748]">
              <span className="text-xs text-slate-500">Submissions: 3</span>
              <div className="h-1.5 w-24 bg-[#2D3748] rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-3/4"></div>
              </div>
            </div>
          </div>

          <div className="border border-[#2D3748] rounded bg-[#0B0E14] p-4">
            <h3 className="font-medium text-sm mb-2 text-white">Option B: Decrease Budget (-20%)</h3>
            <p className="text-xs text-slate-400 mb-4">Forecast: Road Quality 82% (Range 79-85%)</p>
            <div className="flex justify-between items-center pt-3 border-t border-[#2D3748]">
              <span className="text-xs text-slate-500">Submissions: 1</span>
              <div className="h-1.5 w-24 bg-[#2D3748] rounded-full overflow-hidden">
                <div className="h-full bg-slate-600 w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DigitalTwinWorkspace() {
  return (
    <div className="p-8 h-full flex flex-col">
      <h1 className="text-2xl font-light mb-1">Digital Twin</h1>
      <p className="text-slate-400 text-sm mb-6">Geographic and spatial asset inspection</p>
      
      <div className="flex-1 flex gap-6">
        <div className="w-64 bg-[#1D232E] border border-[#2D3748] rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3 text-slate-300">Hierarchy</h3>
          <ul className="text-sm space-y-2 text-slate-400">
            <li className="font-medium text-white">ZA South Africa</li>
            <li className="pl-4">MP Mpumalanga</li>
            <li className="pl-8 text-blue-400">eMalahleni</li>
            <li className="pl-12 text-slate-500">N4 Road Segment</li>
          </ul>
        </div>
        <div className="flex-1 border border-[#2D3748] rounded-lg bg-[#0B0E14] flex flex-col items-center justify-center relative">
           <MapIcon size={48} className="text-slate-700 mb-4" />
           <p className="text-slate-500 text-sm">Geographic visualization engine initializing...</p>
        </div>
      </div>
    </div>
  );
}

function DiscoveryWorkspace() {
  return (
    <div className="p-8 h-full">
      <h1 className="text-2xl font-light mb-1">Discovery Engine</h1>
      <p className="text-slate-400 text-sm mb-8">Proactive knowledge gap and vulnerability analysis</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1D232E] border border-orange-500/30 rounded-lg p-5">
          <div className="flex items-center gap-2 text-orange-400 mb-2">
            <ShieldAlert size={18} />
            <h3 className="font-medium">Missing Evidence Chains</h3>
          </div>
          <p className="text-xs text-slate-400">3 projects in eMalahleni lack recent verification observations.</p>
        </div>

        <div className="bg-[#1D232E] border border-slate-700 rounded-lg p-5">
          <div className="flex items-center gap-2 text-slate-300 mb-2">
            <Database size={18} />
            <h3 className="font-medium">Orphaned Indicators</h3>
          </div>
          <p className="text-xs text-slate-400">12 national indicators have no mapping to local municipal projects.</p>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

function SidebarIcon({ icon, active, onClick, tooltip }: any) {
  return (
    <div className="relative group flex items-center justify-center">
      <button 
        onClick={onClick}
        className={`p-3 rounded-xl transition-all duration-200 ${
          active 
            ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
            : 'text-slate-500 hover:text-slate-300 hover:bg-[#1D232E]'
        }`}
      >
        {icon}
      </button>
      <div className="absolute left-16 bg-[#1D232E] border border-[#2D3748] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg text-white">
        {tooltip}
      </div>
    </div>
  );
}

function LensTab({ children, active }: { children: React.ReactNode, active?: boolean }) {
  return (
    <button className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
      active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-[#2D3748]/50'
    }`}>
      {children}
    </button>
  );
}

function PackCard({ name, version, type }: { name: string, version: string, type: string }) {
  return (
    <div className="bg-[#151A22] border border-[#2D3748] rounded-lg p-5 hover:border-blue-500/50 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <Package className="text-blue-500" size={24} />
        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 bg-[#1D232E] px-2 py-1 rounded border border-[#2D3748]">
          v{version}
        </span>
      </div>
      <h3 className="font-medium text-white mb-1 relative z-10">{name}</h3>
      <p className="text-xs text-slate-400 relative z-10">{type} Knowledge Pack</p>
    </div>
  );
}

export default App;
