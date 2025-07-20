import React from 'react'
import UserCard from "../UserCard"
import Navbar from '../navbar/Navbar'

const Home = () => {
  return (
    <div>
    <Navbar />


      <UserCard  name = "pratik Devkota" bio= "Computer Engineer"/>

    </div>
  )
}

export default Home