import React from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navBar'>
        <h1 className='logo'>PD</h1>

        <ul className='nav-list'>
            <li>
              <NavLink to="/"  activeClassName="active">Home</NavLink>
              </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active"> About me</NavLink>
             </li>
        </ul>
        <button>
          <NavLink to="/login" activeClassName="active">
          Login
          </NavLink>
          </button>

        
    </nav>
  )
}

export default Navbar