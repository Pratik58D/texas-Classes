import React from 'react'
import Parent from './components/withoutContext/Parent'
import ParentComponent from './components/withContext/ParentComponent'

const App = () => {
  return (
    <div>
      {/* <Parent /> */}

      <ParentComponent />


    </div>
  )
}

export default App