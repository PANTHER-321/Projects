import React, { useState } from "react";
import "./BasicCalculator.css";

function BasicCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div className="basic-calculator">
      <h2>Basic Calculator</h2>
      <input type="text" value={input} readOnly className="display" />
      <div className="calculator-grid">
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((num, i) => (
            <button key={i} onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
          <button onClick={clear}>C</button>
        </div>
        <div className="operators">
          {["+", "-", "*", "/", "="].map((op, i) =>
            op === "=" ? (
              <button key={i} onClick={calculate}>
                =
              </button>
            ) : (
              <button key={i} onClick={() => handleClick(op)}>
                {op}
              </button>
            )
          )}
        </div>
      </div>
      {result !== null && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default BasicCalculator;
