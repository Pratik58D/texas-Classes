// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Couter from './components/Counter/Couter';
import Navbar from './components/navbar/Navbar';
import Project from "./components/project/Project"
import Login from './components/login/Login';
import Home from './components/home/Home';
import Product from './components/Product/Product';
import Education from './components/About/Education';
import SingleProduct from './components/Product/SingleProduct';

// import Location from "./components/Location/Location"

function App() {
  const age = 17; 

  // function handleClick(){
  //   console.log(" button is clicked!")
  //   // alert("you have clicked the button")
  // }
  return (
  <>
    <Navbar />
  {/* <div className='container'>

    <h1>my Protfolio</h1>
    <p> i am pratik devkota . i am 16 yrs old. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rerum sint iusto repellat dolores consequuntur corrupti. Magnam autem eligendi praesentium natus modi voluptate doloremque asperiores cum! Voluptatibus dolor aliquam totam.</p>
    <button
    id='btn' 
    onClick={handleClick}>
    click me
    </button>
  </div> */}
   {/*routing configuration  */}
   <Routes>
     <Route path='/' element= {<Home />} />
    <Route path='/contact' element= {<Contact />} />
    <Route path='project'  element= {<Project />} />
    <Route path='/about' element= {<About age={age} />} >
    <Route path="education" element={<Education/>} />
    <Route path="hobby" element={<Education/>} />
    </Route>
    <Route path='/login' element= {<Login/>} />
    {/* for api integration learning */}
    
    <Route path='/product' element= {<Product/>} />
    <Route path='/product/:id' element= {<SingleProduct/>} />

   </Routes>
  
  </>
  
  )
}

export default App
