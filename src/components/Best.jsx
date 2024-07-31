import React from 'react'
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Rectangle from '../components/assests/images/Rectangle.png'
import Rectangle1 from '../components/assests/images/Rectangle1.png'
import Rectangle2 from '../components/assests/images/Rectangle2.png'
import Rectangle3 from '../components/assests/images/Rectangle3.png'

const InstructorCard = ({ image, name, title }) => (
  <div className='bg-[#ffffff] rounded-[24px] gap-[10px] items-center w-[240px] h-[314px] p-4 flex flex-col'>
    <img src={image} alt={name} className=' mb-4 rounded-[12px]' />
    <h2 className='text-[#1B1D1F] text-[20px] font-bold'>{name}</h2>
    <h3 className='text-[#6D737A] text-[16px]'>{title}</h3>
  </div>
);

function Best() {
  return (
    <div className="max-w-full justify-center flex bg-[#E7E9EB] mx-auto px-2 py-10 flex-col items-center font-custom text-[#6D737A]">
    <div>
    <div className='ml-10 pb-6'>
        <h1 className='text-[29.86px] font-bold'>Our Best <span className='text-[#000080]'>Instructor</span></h1>
        <h2 className='text-[#6D737A] text-[10.66px] mt-2'>Various versions have evolved over the years, sometimes by accident,</h2>
      </div>

      <div className='flex gap-2 items-center '>
        <div className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center'>
          <RxCaretLeft size={25} />
        </div>

        <div className='flex flex-col items-center   lg:flex'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2  text-[#1B1D1F] text-[10.66]'>
            <InstructorCard  image={Rectangle}  name="Jacob Jones" title="UI-UX Design Expert" />
            <InstructorCard image={Rectangle1} name="James Bones" title="Social Media Expert" />
            <InstructorCard image={Rectangle2} name="Juan Smith" title="Business Idea Expert" />
            <InstructorCard image={Rectangle3} name="Joy Kay" title="Photography Expert" />
          </div>

          <div className='flex items-center space-x-2 mt-4'>
            <div className='bg-[#FFC27A] w-[12px] h-[12px] rounded-full'></div>
            <div className='bg-[#CFD3D6] w-[12px] h-[12px] rounded-full'></div>
            <div className='bg-[#CFD3D6] w-[12px] h-[12px] rounded-full'></div>
            <div className='bg-[#CFD3D6] w-[12px] h-[12px] rounded-full'></div>
            <div className='bg-[#CFD3D6] w-[12px] h-[12px] rounded-full'></div>
          </div>
        </div>

        <div className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center '>
          <RxCaretRight size={25} />
        </div>
      </div>
    </div>
    </div>
  );
}
export default Best