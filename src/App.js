import './App.css';

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
 const increment=()=>{
     return count < 10 ? setCount(count + 1) : ""
    }
  const decrement=()=>{
   return count>0? setCount(count-1):" "
  }
  const Reset=()=>{
    setCount(0)
  }
  return (
    <div className="App">
      <h1>counter</h1>
      <h1>{count}</h1>
      <div><button onClick={increment}>increment</button>
      
      <button onClick={Reset}>Reset</button>
      <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
}

export default App;
