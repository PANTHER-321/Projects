import React, { useState } from "react";
import "./App.css";
import BasicCalculator from "./components/BasicCalculator";
import ScientificCalculator from "./components/ScientificCalculator";
import EngineeringTools from "./components/EngineeringTools";
import UnitConverter from "./components/UnitConverter";

function App() {
  const [activeTab, setActiveTab] = useState("basic");

  const renderContent = () => {
    switch (activeTab) {
      case "basic":
        return <BasicCalculator />;
      case "scientific":
        return <ScientificCalculator />;
      case "engineering":
        return <EngineeringTools />;
      case "converter":
        return <UnitConverter />;
      default:
        return <BasicCalculator />;
    }
  };

  return (
    <div className="App">
      <h1> Engineering Calculator</h1>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab("basic")}>Basic</button>
        <button onClick={() => setActiveTab("scientific")}>Scientific</button>
        <button onClick={() => setActiveTab("engineering")}>Engineering</button>
        <button onClick={() => setActiveTab("converter")}>Unit Converter</button>
      </div>
      <div className="content-box">{renderContent()}</div>
    </div>
  );
}

export default App;
