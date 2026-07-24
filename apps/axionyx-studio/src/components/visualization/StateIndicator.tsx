import React from 'react';

interface StateIndicatorProps {
  status: 'stable' | 'warning' | 'transition' | 'critical';
}

export const StateIndicator: React.FC<StateIndicatorProps> = ({ status }) => {
  let color = '#2ecc71'; // stable
  if (status === 'warning') color = '#f39c12';
  if (status === 'critical') color = '#e74c3c';
  if (status === 'transition') color = '#3498db';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: color }} />
      <span style={{ textTransform: 'capitalize', color: '#ccc' }}>{status}</span>
    </div>
  );
};
