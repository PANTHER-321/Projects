import React, { useState } from 'react';

export default function StressCalculator() {
  const [force, setForce] = useState('');
  const [area, setArea] = useState('');
  const [stress, setStress] = useState('');

  const inputStyles = {
    margin: '8px',
    padding: '10px',
    width: '80%',
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#e76f51',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    marginTop: '10px',
    cursor: 'pointer',
  };

  const labelStyles = {
    display: 'block',
    marginTop: '15px',
    fontWeight: 'bold',
  };

  const calculateStress = () => {
    const s = parseFloat(force) / parseFloat(area);
    setStress(s.toFixed(2));
  };

  return (
    <div>
      <h2 style={{ color: '#e76f51' }}>Stress Calculator</h2>
      <label style={labelStyles}>Force (N)</label>
      <input style={inputStyles} value={force} onChange={(e) => setForce(e.target.value)} />

      <label style={labelStyles}>Area (m²)</label>
      <input style={inputStyles} value={area} onChange={(e) => setArea(e.target.value)} />

      <br />
      <button style={buttonStyles} onClick={calculateStress}>Calculate</button>

      {stress && <p style={{ marginTop: '15px' }}>Stress: <strong>{stress} Pa</strong></p>}
    </div>
  );
}
