import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect to log the count whenever it changes
  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); // Dependency array ensures effect runs only when 'count' changes

  return (
    <div>
            <h1>USEEFFECT HOOK</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;