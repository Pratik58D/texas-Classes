import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import DashboardHome from './pages/DashboardHome'
import Profile from './pages/Profile'
import Setting from './pages/Setting'

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="setting">Setting</NavLink>
      </nav>


      <Outlet /> {/* Child route content will render here */}
    </div>
  )
}

export default Dashboard