import React from 'react'
import { Link } from 'react-router-dom'

function Cv() {
  return (
    <div className='w-full main-card-bg p-4 gap-8 items-center flex justify-between'>
        <div className=''>
        <p className='my-3'>2024 CV</p>
        <h2 className='text-3xl'>RESUME</h2>
        </div>
        <Link to="Salil's CV.pdf" target="_blank" download>
        <img className='w-20' src="download.svg"/>
        </Link>
    </div>
  )
}

export default Cv