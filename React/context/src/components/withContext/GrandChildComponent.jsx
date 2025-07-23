import React, { useContext } from 'react';
import {CountContext} from "../../context/CountContext"


const GrandChildComponent = () => {
    const {count , setCount} = useContext(CountContext)
  return (
    <div>
        <h3>GrandComponent</h3> 
        <h4>Count is : {count}</h4>
        <button onClick={()=> setCount(count+1)}>
            increase
        </button>

    </div>
  )
}

export default GrandChildComponent