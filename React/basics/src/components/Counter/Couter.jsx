import React, { useState } from 'react'

const Couter = () => {
    const [increase , setIncrease] = useState(0);
    // function to handle increase button
    const handleIncrease = () =>{
        setIncrease(increase+1)
    }
  return (
    <div>
        <h1>{increase}</h1>
        <button onClick={handleIncrease} >Increase</button>
    </div>
  )
}

export default Couter