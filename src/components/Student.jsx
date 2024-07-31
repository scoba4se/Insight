import React from 'react'
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Rectangle27 from '../components/assests/images/Rectangle27.png'
import Rectangle25 from '../components/assests/images/Rectangle25.png'
import Rectangle26 from '../components/assests/images/Rectangle26.png'
import Vector from '../components/assests/images/Vector1.png'

const FeedbackCard = ({ image, name, title, text }) => (
  <div className='bg-white rounded-[20px] p-4 md:p-6 flex flex-col justify-between w-full font-custom md:w-[350px] h-auto md:h-[300px]' data-testid="feedback-card">
    <div className='flex flex-col md:flex-row justify-between items-start'>
      <div className='flex items-center gap-3 md:gap-5'>
        <img src={image} alt={name} className='w-14 h-14 md:w-20 md:h-20 object-cover' />
        <div>
          <h1 className='text-black font-bold text-base md:text-xl'>{name}</h1>
          <h3 className='text-xs md:text-sm'>{title}</h3>
        </div>
      </div>
      <img src={Vector} alt='vector' className='w-6 h-6 md:w-8 md:h-8 mt-3 md:mt-0' />
    </div>
    <p className='text-[#363A3D] text-xs md:text-base mt-3'>{text}</p>
  </div>
);

const Student = () => {
  return (
    <div className="max-w-full bg-[#F8F4FF] mx-auto px-4 py-8 md:px-8 md:py-12 flex flex-col items-center text-[#6D737A] justify-center font-custom">
      <div className='ml-10 mb-6 md:mb-10'>
        <h1 className='text-2xl md:text-4xl font-bold'>Student <span className='text-[#000080]'>Feedback</span></h1>
        <h2 className='text-[#6D737A] text-xs md:text-base mt-2'>Various versions have evolved over the years, sometimes by accident,</h2>
      </div>

      <div className='flex gap-2 items-center'>
        <div aria-label="Previous feedback" className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center cursor-pointer'>
          <RxCaretLeft size={20} className='md:w-8 md:h-8' />
        </div>

        <div className='flex flex-col md:flex-row overflow-x-auto gap-4 md:gap-6'>
          <FeedbackCard
            image={Rectangle27}
            name="Guy Hawkins"
            title="UI-UX Designer"
            text="Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis."
          />
          <FeedbackCard
            image={Rectangle26}
            name="Jane Doe"
            title="Frontend Developer"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada."
          />
          <FeedbackCard
            image={Rectangle25}
            name="John Smith"
            title="Backend Developer"
            text="Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."
          />
        </div>

        <div aria-label="Next feedback" className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center cursor-pointer'>
          <RxCaretRight size={20} className='md:w-8 md:h-8' />
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <div className='flex items-center space-x-2'>
          <div className='bg-[#FFC27A] w-3 h-3 md:w-4 md:h-4 rounded-full'></div>
          <div className='bg-[#CFD3D6] w-3 h-3 md:w-4 md:h-4 rounded-full'></div>
          <div className='bg-[#CFD3D6] w-3 h-3 md:w-4 md:h-4 rounded-full'></div>
          <div className='bg-[#CFD3D6] w-3 h-3 md:w-4 md:h-4 rounded-full'></div>
          <div className='bg-[#CFD3D6] w-3 h-3 md:w-4 md:h-4 rounded-full'></div>
        </div>
      </div>
    </div>
  );
}

export default Student;