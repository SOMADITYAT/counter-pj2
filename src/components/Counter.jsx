import React, { useRef } from "react";

const Counter = () => {
  const Refcounter = useRef(0);

  const increment = () => {
    Refcounter.current += 1;
    console.log("Counter", Refcounter.current);
  }

  const decrement = () => {
    if (Refcounter.current <= 0) {
    
    } else {
      Refcounter.current -= 1;
      console.log("Counter", Refcounter.current);
    }




  }

  return (
    <div>
       <p>Counter:{Refcounter.current}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
     
    </div>
  )
}
export default Counter