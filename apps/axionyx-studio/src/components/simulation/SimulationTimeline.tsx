import React from 'react';

interface SimulationTimelineProps {
  currentTick: number;
  onScrub: (tick: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const SimulationTimeline: React.FC<SimulationTimelineProps> = ({ currentTick, onScrub, isPlaying, onTogglePlay }) => {
  return (
    <div className="simulation-timeline" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
      <button onClick={onTogglePlay}>{isPlaying ? 'Pause' : '▶ Run Simulation'}</button>
      <input 
        type="range" 
        min="0" 
        max="1000" 
        value={currentTick} 
        onChange={(e) => onScrub(Number(e.target.value))} 
        style={{ flex: 1 }}
      />
      <span>Tick: {currentTick}</span>
    </div>
  );
};
