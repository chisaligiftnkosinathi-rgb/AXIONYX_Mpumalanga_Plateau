import React, { useState } from 'react';

interface CuriosityInputProps {
  onSubmit: (question: string) => void;
}

export const CuriosityInput: React.FC<CuriosityInputProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="curiosity-portal" style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Curiosity Portal</h1>
      <p>What should we investigate?</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <input 
          type="text" 
          value={query} 
          onChange={e => setQuery(e.target.value)} 
          placeholder="e.g. Why does my phone get hot?"
          style={{ width: '400px', padding: '10px', fontSize: '16px' }}
        />
        <button 
          onClick={() => onSubmit(query)}
          style={{ padding: '10px 20px', fontSize: '16px', background: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Investigate
        </button>
      </div>
    </div>
  );
};
