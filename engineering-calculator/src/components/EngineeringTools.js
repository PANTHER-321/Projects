import React, { useState } from "react";
import "./EngineeringTools.css";

function EngineeringTools() {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [force, setForce] = useState("");
  const [area, setArea] = useState("");
  const [ohmsResult, setOhmsResult] = useState(null);
  const [stressResult, setStressResult] = useState(null);

  const calculateOhmsLaw = () => {
    const result = parseFloat(voltage) / parseFloat(current);
    setOhmsResult(result.toFixed(2) + " Ω");
  };

  const calculateStress = () => {
    const result = parseFloat(force) / parseFloat(area);
    setStressResult(result.toFixed(2) + " N/m²");
  };

  return (
    <div>
      <h2>Engineering Tools</h2>
      <div>
        <h4>Ohm's Law (V = IR)</h4>
        Voltage (V):{" "}
        <input value={voltage} onChange={(e) => setVoltage(e.target.value)} />
        Current (I):{" "}
        <input value={current} onChange={(e) => setCurrent(e.target.value)} />
        <button onClick={calculateOhmsLaw}>Calculate Resistance</button>
        {ohmsResult && <div>Resistance: {ohmsResult}</div>}
      </div>
      <hr />
      <div>
        <h4>Stress = Force / Area</h4>
        Force (N):{" "}
        <input value={force} onChange={(e) => setForce(e.target.value)} />
        Area (m²):{" "}
        <input value={area} onChange={(e) => setArea(e.target.value)} />
        <button onClick={calculateStress}>Calculate Stress</button>
        {stressResult && <div>Stress: {stressResult}</div>}
      </div>
    </div>
  );
}

export default EngineeringTools;
