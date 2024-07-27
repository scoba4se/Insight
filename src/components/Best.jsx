import React from 'react'
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Rectangle from '../components/assests/images/Rectangle.png'
import Rectangle1 from '../components/assests/images/Rectangle1.png'
import Rectangle2 from '../components/assests/images/Rectangle2.png'
import Rectangle3 from '../components/assests/images/Rectangle3.png'

const InstructorCard = ({ image, name, title }) => (
  <div className='bg-[#FFFFFF] rounded-[24px] gap-[10px] items-center w-[312px] h-[370px] text-center p-4 flex flex-col'>
    <img src={image} alt={name} className='w-full h-auto mb-4 rounded-[24px]' />
    <h2 className='text-[#1B1D1F] text-[20px] font-bold'>{name}</h2>
    <h3 className='text-[#6D737A] text-[16px]'>{title}</h3>
  </div>
);

function Best() {
  return (
    <div className="max-w-screen-xl bg-[#F8F4FF] mx-auto px-4 py-10 flex-col items-center text-[#6D737A]">
      <div className=' mb-8'>
        <h1 className='text-3xl font-bold'>Our Best <span className='text-[#000080]'>Instructor</span></h1>
        <h2 className='text-[#6D737A] text-[20px] mt-4'>Various versions have evolved over the years, sometimes by accident,</h2>
      </div>

      <div className='flex gap-4 items-center'>
        <div className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center'>
          <RxCaretLeft size={25} />
        </div>

        <div className='flex flex-col items-center scroll lg:flex'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <InstructorCard image={Rectangle} name="Jacob Jones" title="UI-UX Design Expert" />
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

        <div className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center ml-10'>
          <RxCaretRight size={25} />
        </div>
      </div>
    </div>
  );
}
export default Best