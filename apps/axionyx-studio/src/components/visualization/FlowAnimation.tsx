import React from 'react';

interface FlowAnimationProps {
  label: string;
  intensity: number; // 0 to 1
  active: boolean;
}

export const FlowAnimation: React.FC<FlowAnimationProps> = ({ label, intensity, active }) => {
  return (
    <div className={`flow-animation ${active ? 'active' : 'idle'}`} style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>{label}</span>
      <div 
        style={{ 
          height: '4px', 
          width: '100px', 
          background: active ? `linear-gradient(90deg, #333, #3b82f6 ${intensity * 100}%, #333)` : '#333',
          animation: active ? `flow ${2 - intensity}s infinite linear` : 'none'
        }} 
      />
    </div>
  );
};
