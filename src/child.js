import React,{useContext} from 'react';
import CounterContext from './CounterContext';

function Child(){
    let counterValue = useContext(CounterContext);
    
    return (
        <dev>
               <h3>it is First Child its value is {counterValue}</h3>
               <br></br>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>
                Increment</button>
        
        </dev>
    );
}
export default Child;