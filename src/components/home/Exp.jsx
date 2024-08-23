import React from 'react'

function Exp() {
  return (
    <div className='w-full main-card-bg p-4 gap-8'>
        <p>6 YEARS OF</p>
        <h2 className='text-xl'>EXPERIENCE</h2>

        <div className='flex justify-between items-center my-8'>
       <h2 className='text-3xl'>Web & Shopify Developer</h2> 
            <div className='text-right'>
              <h3> Freelancing</h3>
              <p> 2022 - Present </p>
            </div>
        </div>

        <div className='flex justify-between items-center my-8'>
       <h2 className='text-3xl line-through opacity-55'>Web & Shopify Developer</h2> 
            <div className='text-right'>
              <h3> Rising WebVibe</h3>
              <p> 2022 - 2022 </p>
            </div>
        </div>

        <div className='flex justify-between items-center my-8'>
        <h2 className='text-3xl line-through opacity-55'>Web & Shopify Developer</h2> 
            <div className='text-right'>
              <h3> AdFlow Digital</h3>
              <p> 2019 - 2022 </p>
            </div>
        </div>

        <div className='flex justify-between items-center my-8'>
        <h2 className='text-3xl line-through opacity-55'> Digital Marketing Executive</h2> 
            <div className='text-right'>
              <h3> Xenium Network</h3>
              <p> 2018 - 2019 </p>
            </div>
        </div>
    </div>
  )
}

export default Exp