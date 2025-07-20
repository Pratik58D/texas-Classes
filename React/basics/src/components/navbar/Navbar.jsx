import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navBar'>
        <h1 className='logo'>PD</h1>  
        <div className='navbar-list'>
            <a href="">Home</a>
            <a href="">project</a>
            <a href="">Contact</a>
            <a href="">About</a>
        </div>
        
            <button>login</button>
        </div>
  )
}

export default Navbar