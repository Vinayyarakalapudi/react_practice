import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
        <h1>USEREF HOOK</h1>
    <label>Input Value:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h4>Current Value: {inputValue}</h4>
      <h4>Previous Value: {previousInputValue.current}</h4>
    </>
  );
}

export default App;