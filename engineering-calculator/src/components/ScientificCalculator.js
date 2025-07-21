// File: src/components/ScientificCalculator.js
import React, { useState } from "react";
import "./ScientificCalculator.css";

function ScientificCalculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    try {
      const evaluated = eval(expression);
      setResult(evaluated);
    } catch {
      setResult("Invalid Expression");
    }
  };

  const handleFunction = (func) => {
    const value = parseFloat(expression);
    if (isNaN(value)) {
      setResult("Enter valid number");
      return;
    }

    switch (func) {
      case "sin":
        setResult(Math.sin(toRadians(value)).toFixed(4));
        break;
      case "cos":
        setResult(Math.cos(toRadians(value)).toFixed(4));
        break;
      case "tan":
        setResult(Math.tan(toRadians(value)).toFixed(4));
        break;
      case "log":
        setResult(Math.log10(value).toFixed(4));
        break;
      case "ln":
        setResult(Math.log(value).toFixed(4));
        break;
      case "sqrt":
        setResult(Math.sqrt(value).toFixed(4));
        break;
      default:
        break;
    }
  };

  const toRadians = (angle) => (angle * Math.PI) / 180;

  return (
    <div className="scientific-calculator">
      <h2>Scientific Calculator</h2>
      <input
        type="text"
        placeholder="Enter expression or value"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <div className="button-grid">
        <button onClick={calculate} className="equal">=</button>
        <button onClick={() => handleFunction("sin")}>sin</button>
        <button onClick={() => handleFunction("cos")}>cos</button>
        <button onClick={() => handleFunction("tan")}>tan</button>
        <button onClick={() => handleFunction("log")}>log</button>
        <button onClick={() => handleFunction("ln")}>ln</button>
        <button onClick={() => handleFunction("sqrt")}>√</button>
        <button onClick={() => { setExpression(""); setResult(null); }} className="clear">C</button>
      </div>
      {result !== null && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default ScientificCalculator;
