import React from 'react'
import oga from '../components/assests/images/oga.png'


function Join() {
  return (
    <div className='bg-[#F8F4FF] max-w-screen-xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center text-[#52565C] justify-center font-custom'>
      <img src={oga} alt='learning platform' className='w-full md:w-auto mb-6 md:mb-0 md:mr-6 rounded-[30px]' />
      <div className=' w-full md:w-auto flex flex-col items-c'>
        <h1 className='text-[40px] md:text-[40px] text-[#21212F] font-bold'>
          Join <span className='text-[#000080]'>World's largest</span> learning platform today
        </h1>
        <h2 className='text-[24px] md:text-[24px] my-4'>Start learning by registering for free</h2>
        <p className=' md:text-[16px] text-[#6D737A] mb-4'>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        </p>
        <button className='bg-[#FFA63A] px-4 py-2 rounded-full mt-6 text-white w-[200px] h-12 text-[16px]'>Create an account</button>
      </div>
    </div>
  )
}

export default Join
