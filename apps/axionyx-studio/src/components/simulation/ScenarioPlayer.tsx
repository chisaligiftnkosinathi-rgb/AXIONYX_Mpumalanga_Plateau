import React from 'react';
import { ScenarioView } from '../../../../packages/studio-contracts/src/scenario-view';

interface ScenarioPlayerProps {
  scenario: ScenarioView;
}

export const ScenarioPlayer: React.FC<ScenarioPlayerProps> = ({ scenario }) => {
  return (
    <div className="scenario-player">
      <h3>{scenario.name}</h3>
      <div className="controls">
        {scenario.controls.map(control => (
          <div key={control.id} className="control-group">
            <label>{control.label}</label>
            {control.type === 'slider' && (
              <input type="range" defaultValue={control.currentValue as number} min={control.min} max={control.max} />
            )}
            {/* Add other control types here */}
          </div>
        ))}
      </div>
    </div>
  );
};
