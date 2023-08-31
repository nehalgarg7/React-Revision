// Event and State Understanding

/**
 * Note : Whenever you are clicking on counter button then only whole counter component gets reloaded. 
 * 
 */

// Ques: Create a counter.

import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function increment(){
    setCount (count = count + 1);
    console.log(count);
  }

  function decrement(){
    setCount (count = count - 1);
    console.log(count);
  }

  console.log('Hello! I am Counter.jsx');

  return (
    <div>
      <p>Counter : {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
