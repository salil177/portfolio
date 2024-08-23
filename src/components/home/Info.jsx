import React from 'react'

function Info() {
  return (
    <div className='w-full bg-white-900 p-6 main-card-bg h-full'>
      <div className='flex gap-12 items-center'>
        <div className='rounded-full shadow-black drop-shadow-lg'>
        <img className="w-20" src="Memoji.webp"/>
        </div>
        <h2 className='text-4xl'>Salil Kumar</h2> 
        </div> 

        <div className='mt-6'>
          <p>I am passionate about building beautiful and functional user interfaces.</p>
          <p>Currently working as a freelance Web Developer</p>
        </div>
    </div>
  )
}

export default Info