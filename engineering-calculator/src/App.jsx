import React, { useState } from 'react';
import OhmsLawCalculator from './components/OhmsLawCalculator';
import StressCalculator from './components/StressCalculator';

function App() {
  const [selectedCalc, setSelectedCalc] = useState('ohm');

  return (
    <div style={{ padding: 20 }}>
      <h1>🔧 Engineering Calculator</h1>
      <select onChange={(e) => setSelectedCalc(e.target.value)}>
        <option value="ohm">Ohm's Law</option>
        <option value="stress">Stress</option>
      </select>

      <div style={{ marginTop: 20 }}>
        {selectedCalc === 'ohm' && <OhmsLawCalculator />}
        {selectedCalc === 'stress' && <StressCalculator />}
      </div>
    </div>
  );
}

export default App;
