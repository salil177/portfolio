import React from 'react'
import { Link } from 'react-router-dom'

function Projects({img , link , title}) {
  return (
    <div className='w-full flex flex-col justify-center main-card-bg gap-8 p-6 h-full justify-around'>
        <img className='w-full' src={img}/>
        <h2 className='text-xl'>Shopify</h2>
        <div className='flex jusify-between gap-4'>
        <h2 className='text-3xl'>{title}</h2>
        <Link to={link} >
        <img className='w-8' src="share.svg"/>
        </Link>
        </div>
        
    </div>
  )
}

export default Projects