// customhooks.js
import { useState, useEffect } from "react";

function useCustomHook(initializer, componentName) {
  const [counter, setCounter] = useState(initializer);

  function incrementCounter() {
    setCounter(counter + 1); // Increment the counter
  }

  useEffect(() => {
    console.log(`The button of the ${componentName} is clicked ${counter} times.`);
  }, [counter, componentName]);

  return { counter, incrementCounter };
}

export default function Custom() {
  const { counter, incrementCounter } = useCustomHook(0, "Counter Component");

  return (
    <div style={{ marginTop: "50px" }}>
        <h1>CUSTOM HOOK </h1>
      <h4>Custom Hook Counter</h4>
      <p>The button has been clicked {counter} times.</p>
      <button onClick={incrementCounter}>Click Me</button>
    </div>
  );
}