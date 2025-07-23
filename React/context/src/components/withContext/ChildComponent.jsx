import React from 'react'
import GrandChildComponent from './GrandChildComponent'

const ChildComponent = () => {
  return (
    <div>
        <h2>Child Component</h2>
        <GrandChildComponent />
    </div>
  )
}

export default ChildComponent