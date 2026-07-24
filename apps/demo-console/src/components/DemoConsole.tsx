import React, { useState } from 'react';
import './DemoConsole.css';

export const DemoConsole = () => {
  const [config, setConfig] = useState({
    industry: 'Mining',
    audience: 'Operations Director',
    goal: 'Reduce downtime'
  });

  const [activeScene, setActiveScene] = useState(1);
  const [generationStatus, setGenerationStatus] = useState<string | null>(null);

  const handleGenerateEverything = () => {
    setGenerationStatus('Dispatching Render Graph to Content Factory...');
    setTimeout(() => {
      setGenerationStatus('✅ Render Bundle Complete: [Replay, PDF, LinkedIn, Academy, Video]');
    }, 2000);
  };

  return (
    <div className="demo-console">
      <div className="sidebar">
        <h3>AXIONYX Presenter</h3>
        <div className="config-panel">
          <label>Industry</label>
          <select value={config.industry} onChange={e => setConfig({...config, industry: e.target.value})}>
            <option>Mining</option>
            <option>Laboratory</option>
            <option>Water</option>
          </select>

          <label>Audience</label>
          <select value={config.audience} onChange={e => setConfig({...config, audience: e.target.value})}>
            <option>Operations Director</option>
            <option>Quality Manager</option>
            <option>CEO</option>
          </select>

          <label>Goal</label>
          <select value={config.goal} onChange={e => setConfig({...config, goal: e.target.value})}>
            <option>Reduce downtime</option>
            <option>ISO17025 compliance</option>
          </select>
        </div>

        <button className="generate-btn" onClick={handleGenerateEverything}>
          ✨ Generate Everything
        </button>
        {generationStatus && <p className="status-msg">{generationStatus}</p>}

        <div className="scene-navigator">
          <h4>Guided Presentation</h4>
          {[
            '1. Observe', '2. Understand', '3. Decide', 
            '4. Explain', '5. Replay', '6. Teach', '7. Publish'
          ].map((scene, idx) => (
            <button 
              key={scene} 
              className={activeScene === idx + 1 ? 'active-scene' : ''}
              onClick={() => setActiveScene(idx + 1)}
            >
              {scene}
            </button>
          ))}
        </div>
      </div>

      <div className="main-stage">
        <div className="presenter-view">
          {/* This renders the shared packages/experience modules */}
          <h2>Scene {activeScene}: Live Experience Module</h2>
          <div className="module-placeholder">
            [ Packages/Experience Module Rendered Here ]
          </div>
        </div>
      </div>
    </div>
  );
};
