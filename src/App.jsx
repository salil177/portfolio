import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div className='max-w-screen-xl mx-auto md:px-20 px-5'>
   { /* <Header /> */}
    <Outlet />
    </div>
  )
}

export default App
