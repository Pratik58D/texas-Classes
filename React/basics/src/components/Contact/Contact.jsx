import React from 'react'
const Contact = () => {

 const isLoggedIn = false;
 
 if(isLoggedIn){
  return(
    <h1>welcome back</h1>
  )
 }
 else {
  return (
    <h1>please log In</h1>
  )
 }

}

export default Contact