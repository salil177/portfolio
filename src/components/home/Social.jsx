import React from 'react'
import { Link } from 'react-router-dom';

function Social({img , link , mailTo , styles }) {

  return (
    <div className={`w-full ${styles} main-card-bg p-4  text-center`}>
        <Link className='inline-block' to={link} onClick={mailTo} >
        <img className='w-20' src={img}/>
        </Link>
    </div>
  )
}

export default Social;