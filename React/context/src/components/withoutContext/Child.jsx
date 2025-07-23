import React from 'react'
import GrandChild from './GrandChild'

const Child = ({count , setCount}) => {
  return (
    <div>
        <h1>Child Component</h1>
        <GrandChild count= {count} setCount= {setCount} />
    </div>
  )
}

export default Child