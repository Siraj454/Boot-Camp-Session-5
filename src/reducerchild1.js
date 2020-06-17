import React,{useReducer} from 'react';
import counterReducer from './CounterReducer';
const Child1=()=>{
    let [state,dispatch]=useReducer(counterReducer,10);
    console.log(state);
    return (
        <dev>
                <h2> Reducer Value Is: {state} </h2>
                 <button onClick={()=>dispatch('INCREMENT')}>
                     REDUCER INCREMENT</button>
                     <br></br>
                 <button onClick={()=>dispatch('Plus2')}>REDUCER PLUS 2</button> 
                 <br></br>
                 <button onClick={()=>dispatch('RESET')}>REDUCER RESET</button>   
    </dev>
    )
}
export default Child1;