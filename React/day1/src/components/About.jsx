import React from 'react';
import "./about.css"


// person = {
//     firstName : "Mingmar",
//     age: "21"
//   }


const About = ({person}) => {
  return (
    <div className='aboutContainer'>
        <p>this is texas. 
            i am here as a react instructor.
             this is our 5th day 
              i am {person.firstName}
              i am {person.age} yrs old
             </p>


    </div>
  )
}

export default About