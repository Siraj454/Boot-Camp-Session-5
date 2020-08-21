import React from 'react';
import Child from './child';
import Child1 from './reducerchild1';

function Parent(props){
    return (
        <dev>
            <Child name={props.name}/>
            <Child1/>
    
        </dev>
    );
}
export default Parent;