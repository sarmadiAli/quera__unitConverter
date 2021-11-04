import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [val, setVal] = useState({});

  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        < Input label="Amount" onChange={(e) => {
          const value = e.target.value
          setVal(prevState => ({ ...prevState, amont: value }))
        }} />
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label="From" items={units} onChange={(e) => {
            const value = e.target.value
            setVal(prevState => ({ ...prevState, from: value }))
          }} />

          <Select label="To" items={units} onChange={(e) => {
            const value = e.target.value
            setVal(prevState => ({ ...prevState, to: value }))

          }} />

          <button onClick={() => {
            const zarb = ((val?.amont ? val?.amont : 0 ) * ( val?.from ? val?.from : 1))
            const a = zarb / (val?.to ? val?.to : 1)
            setResult(a)

          }}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
