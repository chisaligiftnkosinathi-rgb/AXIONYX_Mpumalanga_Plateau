import React, { useState, useEffect } from 'react';
import { JsonEventStoreAdapter } from '../adapters/JsonEventStoreAdapter';
import './ReplayController.css';

interface ReplayProps {
  demoPackagePath: string;
}

export const ReplayController: React.FC<ReplayProps> = ({ demoPackagePath }) => {
  const [currentTimestamp, setCurrentTimestamp] = useState<string>('2026-07-24T12:00:00Z');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMode, setActiveMode] = useState('Presentation'); // Presentation, Training, Audit, Engineering, Sales
  const [projectedState, setProjectedState] = useState<any>({});

  const eventStore = new JsonEventStoreAdapter([]); // In reality, loaded from demo-package/events.json

  // The Master Clock
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      // Advance clock and rebuild state
      const nextTime = new Date(new Date(currentTimestamp).getTime() + 1000).toISOString();
      setCurrentTimestamp(nextTime);
      
      eventStore.replayUpTo(nextTime).then(events => {
        // Dispatch to Projection Engine
        setProjectedState({ eventsReplayed: events.length });
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, currentTimestamp]);

  return (
    <div className="replay-controller">
      <div className="replay-header">
        <h2>AXIONYX Replay Center</h2>
        <div className="mode-selector">
          {['Presentation', 'Training', 'Audit', 'Engineering', 'Sales'].map(mode => (
            <button 
              key={mode} 
              className={activeMode === mode ? 'active' : ''}
              onClick={() => setActiveMode(mode)}
            >
              {mode} Mode
            </button>
          ))}
        </div>
      </div>

      <div className="replay-workspace">
        <div className="video-panel">
          <div className="video-placeholder">
            [ Video Synchronized to {currentTimestamp} ]
          </div>
          <div className="scrubber">
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>
            <input type="range" min="0" max="100" className="timeline-slider" />
          </div>
        </div>

        <div className="state-panel">
          <h3>Reconstructed Reality (Digital Twin)</h3>
          <pre>{JSON.stringify(projectedState, null, 2)}</pre>
          <div className="evidence-chain">
            <h4>Live Evidence Chain</h4>
            <p className="subtext">Driven entirely by the Event Store, not the video.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
