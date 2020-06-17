import React,{useContext} from 'react';
import CounterContext from './CounterContext';

function Child(){
    let counterValue = useContext(CounterContext);
    
    return (
        <dev>
               <h2>it is First Child its value is {counterValue}</h2>
               <br></br>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>
                Increment</button>
        
        </dev>
    );
}
export default Child;