import React,{useState} from 'react';
import './App.css';
import Parent from './parent';
import CounterContext from './CounterContext';
function App(){
  //let [count,setCount]=useState(40);
  let countState=useState(0);

  return(
  <CounterContext.Provider value={countState}>
    <dev>
      <Parent/>
     <h2>Parent Changes State of Context:</h2>
      <button onClick={()=>{countState[1](--countState[0])}}>
               Parent Decrement</button>
    </dev>
  </CounterContext.Provider>
 
 );
}
export default App;