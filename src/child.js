import React,{useContext} from 'react';
import CounterContext from './CounterContext';

function Child(){
    let counterValue = useContext(CounterContext);
    
    return (
        <dev className="child">
               <h3> First Child Value: {counterValue}</h3>
               <br></br>
            <button className="button" onClick={()=>{counterValue[1](++counterValue[0])}}>
                CONTEXT INCREMENT</button>
        
        </dev>
    );
}
export default Child;