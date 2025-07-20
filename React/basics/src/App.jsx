// import { useState } from 'react';
import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Couter from './components/Couter/Couter';
import Navbar from './components/navbar/Navbar';
import Project from "./components/project/Project"

// import Location from "./components/Location/Location"

function App() {
  const age = 17; 

  function handleClick(){
    console.log(" button is clicked!")
    // alert("you have clicked the button")
 

  }
  return (
  <>
    <Navbar />

  <div className='container'>

    <h1>my Protfolio</h1>
    <p> i am pratik devkota . i am 16 yrs old. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rerum sint iusto repellat dolores consequuntur corrupti. Magnam autem eligendi praesentium natus modi voluptate doloremque asperiores cum! Voluptatibus dolor aliquam totam.</p>
    <button
    id='btn' 
    onClick={handleClick}>
    click me
    </button>
  </div> 


    <About age = {age} />
    <Contact />


    <Couter />

<Project />
    
  
  </>
  
  )
}

export default App
