import React from 'react';
import "./about.css"
import Education from './Education';
import { Outlet } from 'react-router-dom';


// person = {
//     firstName : "Mingmar",
//     age: "21"
//   }


const About = ({age}) => {

  // const fullName = <h1> i am prtozoa </h1>

  return (
    <div className='aboutContainer'>
        <p>this is texas. 
            i am here as a react instructor.
             this is our 5th day 
            
              i am {age} yrs old
             </p>
  {/* <div>{fullName}</div> */}

  <Outlet/>

  



    </div>
  )
}

export default About