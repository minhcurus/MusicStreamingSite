import React from 'react'
import Sidebar from './components/Sidebar'
import PLayer from './components/Player'
import Display from './components/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <PLayer/>
    </div>
  ) 
}

export default App