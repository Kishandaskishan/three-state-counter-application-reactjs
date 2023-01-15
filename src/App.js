import React,{useState} from "react";
import "./App.css";



function App(){
  const[ count ,setCount]=useState(true)

 
  return(
    <div className="App">
    <header>
      <h1>Counter app using State/hooks</h1>
    </header>
    <h2>Current Value of count is{count}</h2>
    <button onClick={()=> setCount(0)}>Rest Counter</button>
    <button onClick={()=>(count>=10 ?"":setCount(count +1))}>Increse Counter</button>
    <button onClick={()=>(count<=0 ?"":setCount(count-1))}>Decrease Counter</button>
     
    </div>
  );
}
export default App;