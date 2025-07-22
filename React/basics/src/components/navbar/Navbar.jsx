import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBar'>
        <h1 className='logo'>
          <Link to="/">
          PD
          </Link>
          </h1>  
        <div className='navbar-list'>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
        </div>    
            <button>
              <Link to="/login">
              login
              </Link>
              
              </button>
        </div>
  )
}

export default Navbar