import React, { useState } from "react";
import "./UnitConverter.css";

function UnitConverter() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  const convert = (type) => {
    let val = parseFloat(value);
    switch (type) {
      case "mToKm":
        setResult((val / 1000).toFixed(3) + " km");
        break;
      case "cToF":
        setResult(((val * 9) / 5 + 32).toFixed(2) + " °F");
        break;
      case "kgToLb":
        setResult((val * 2.20462).toFixed(2) + " lbs");
        break;
      default:
        setResult("Invalid");
    }
  };

  return (
    <div>
      <h2>Unit Converter</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <button onClick={() => convert("mToKm")}>Meters to Kilometers</button>
        <button onClick={() => convert("cToF")}>Celsius to Fahrenheit</button>
        <button onClick={() => convert("kgToLb")}>Kg to Pounds</button>
      </div>
      {result && <div className="result">Converted: {result}</div>}
    </div>
  );
}

export default UnitConverter;
