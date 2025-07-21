// File: src/components/EngineeringTools.js
import React, { useState } from "react";
import OhmsLawCalculator from "./OhmsLawCalculator";
import StressCalculator from "./StressCalculator";
import "./EngineeringTools.css";

function EngineeringTools() {
  const [selectedTool, setSelectedTool] = useState("ohm");

  const renderTool = () => {
    switch (selectedTool) {
      case "ohm":
        return <OhmsLawCalculator />;
      case "stress":
        return <StressCalculator />;
      default:
        return <OhmsLawCalculator />;
    }
  };

  return (
    <div className="engineering-tools">
      <h2>Engineering Tools</h2>
      <div className="tool-buttons">
        <button onClick={() => setSelectedTool("ohm")}>Ohm's Law</button>
        <button onClick={() => setSelectedTool("stress")}>Stress Calculation</button>
      </div>
      <div className="tool-container">{renderTool()}</div>
    </div>
  );
}

export default EngineeringTools;
