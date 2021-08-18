import React, { useState } from "react";
import "./styles.scss";

function Contador() {
  const [number, setNumber] = useState(0);

  return (
    <div className="contador">
      <h1 data-testid="counter" className={number < 0 ? "negative" : "positive"}>{number}</h1>
      <button className="subtract" onClick={() => setNumber(number - 1)}>
        -
      </button>
      <button className="plus" onClick={() => setNumber(number + 1)}>
        +
      </button>
    </div>
  );
}

export { Contador };
