import React from 'react'
import image from '../components/assests/images/image.png'
import image1 from '../components/assests/images/image1.png'
import image2 from '../components/assests/images/image2.png'
import image3 from '../components/assests/images/image3.png'
import image4 from '../components/assests/images/image4.png'

function Logo() {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-between px-4 md:px-20 py-10 text-[#230F0F]'>
      <div className='mb-6 md:mb-0 md:mr-6 text-center md:text-left'>
        <h1 className='text-lg md:text-xl font-bold'>We Partner With More</h1>
        <h1 className='text-lg md:text-xl font-bold'>Than 10+ Companies</h1>
      </div>
     
        <img src={image1} alt='company1' className='w-24 h-24 md:w-16 md:h-16 object-contain' />
        <img src={image2} alt='company2' className='w-24 h-24 md:w-16 md:h-16 object-contain' />
        <img src={image4} alt='company4' className='w-24 h-24 md:w-16 md:h-16 object-contain' />
        <img src={image3} alt='company3' className='w-24 h-24 md:w-16 md:h-16 object-contain' />
        <img src={image} alt='company' className='w-24 h-24 md:w-16 md:h-16 object-contain' />
      
    </div>
  )
}

export default Logo