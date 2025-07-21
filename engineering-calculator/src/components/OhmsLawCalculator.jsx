import React, { useState } from 'react';

export default function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');

  const inputStyles = {
    margin: '8px',
    padding: '10px',
    width: '80%',
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#457b9d',
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

  const calculate = () => {
    if (voltage === '') {
      setVoltage((parseFloat(current) * parseFloat(resistance)).toFixed(2));
    } else if (current === '') {
      setCurrent((parseFloat(voltage) / parseFloat(resistance)).toFixed(2));
    } else if (resistance === '') {
      setResistance((parseFloat(voltage) / parseFloat(current)).toFixed(2));
    }
  };

  return (
    <div>
      <h2 style={{ color: '#1d3557' }}>Ohm’s Law Calculator</h2>
      <label style={labelStyles}>Voltage (V)</label>
      <input style={inputStyles} value={voltage} onChange={(e) => setVoltage(e.target.value)} />

      <label style={labelStyles}>Current (I)</label>
      <input style={inputStyles} value={current} onChange={(e) => setCurrent(e.target.value)} />

      <label style={labelStyles}>Resistance (R)</label>
      <input style={inputStyles} value={resistance} onChange={(e) => setResistance(e.target.value)} />

      <br />
      <button style={buttonStyles} onClick={calculate}>Calculate</button>
    </div>
  );
}
