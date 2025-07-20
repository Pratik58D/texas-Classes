import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../navbar/Navbar'

const About = () => {

  const [count, setCount] = useState(0);
  // const inputRef = useRef(null);
  const prevCount = useRef();

  useEffect(()=>{
    prevCount.current= count;
  },[count])



  // function handleClick (){
  //   inputRef.current.focus();
  // }

  return (
    <div>
      <Navbar />

      {/* <div>
        <input type="text" ref={inputRef} placeholder='enter your name' />
        <button onClick={handleClick}>focus the input</button>
      </div> */}
      <div>
        <h2>Current : {count}</h2>
        <h2>Previous: {prevCount.current}</h2>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
      </div>


      
      </div>
  )
}

export default About