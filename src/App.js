import "./App.css";
import "./number-utils";
import React, { useState } from "react";
import NumUtil from "./number-utils";

function App() {
  const numUtils = new NumUtil();

  const [value, setValue] = useState("");
  const [isPrime, setIsPrime] = useState(false);

  return (
    <div className="App">
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setIsPrime(numUtils.IsPrime(value))}
        />
        <div>{`Is Prime? ${isPrime}`}</div>
      </div>
    </div>
  );
}

export default App;
