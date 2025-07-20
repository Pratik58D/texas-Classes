import React, { useState } from 'react'

const Setting = () => {

    const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(null); // trying to store previous

  const handleClick = () => {
    setPrevCount(count);      // set previous to current
    setCount(count + 1);      // then increase the count
  };

  return (
    <div>
       <h2>Current: {count}</h2>
      <h2>Previous: {prevCount}</h2>
      <button onClick={handleClick}>Increment</button>
  
      
    </div>
  )
}

export default Setting