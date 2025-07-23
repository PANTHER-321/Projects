// File: src/ScientificCalculator.js
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
    switch (func) {
      case "sin":
        setResult(Math.sin(toRadians(expression)).toFixed(4));
        break;
      case "cos":
        setResult(Math.cos(toRadians(expression)).toFixed(4));
        break;
      case "tan":
        setResult(Math.tan(toRadians(expression)).toFixed(4));
        break;
      case "log":
        setResult(Math.log10(expression).toFixed(4));
        break;
      case "ln":
        setResult(Math.log(expression).toFixed(4));
        break;
      case "sqrt":
        setResult(Math.sqrt(expression).toFixed(4));
        break;
      default:
        break;
    }
  };

  const toRadians = (angle) => (angle * Math.PI) / 180;

  return (
    <div>
      <h2>Scientific Calculator</h2>
      <input
        type="text"
        placeholder="Enter expression or value"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <div>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleFunction("sin")}>sin</button>
        <button onClick={() => handleFunction("cos")}>cos</button>
        <button onClick={() => handleFunction("tan")}>tan</button>
        <button onClick={() => handleFunction("log")}>log</button>
        <button onClick={() => handleFunction("ln")}>ln</button>
        <button onClick={() => handleFunction("sqrt")}>√</button>
      </div>
      {result !== null && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default ScientificCalculator;
