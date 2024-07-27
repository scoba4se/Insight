import React from 'react';
import { BsBriefcase } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { PiDetective, PiGraphDuotone, PiHeartbeatFill, PiPenNib, PiSunHorizonThin } from "react-icons/pi";
import { TbMicrophone2 } from "react-icons/tb";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import oba from '../components/assests/images/oba.JPG'

function Most() {
  const categories = [
    { icon: PiPenNib, label: 'Design' },
    { icon: PiSunHorizonThin, label: 'Lifestyle' },
    { icon: FaRegLightbulb, label: 'Personal Develop' },
    { icon: BsFiletypeHtml, label: 'Development' },
    { icon: CiCamera, label: 'Photography' },
    { icon: PiHeartbeatFill, label: 'Health & Fitness' },
    { icon: TbMicrophone2, label: 'Marketing' },
    { icon: IoMusicalNotesOutline, label: 'Music' },
    { icon: PiGraphDuotone, label: 'Finance' },
    { icon: BsBriefcase, label: 'Business' },
    { icon: FaDatabase, label: 'Data Science' },
    { icon: PiDetective, label: 'Teaching' },
  ];

  return (
    <div className="max-w-screen-xl bg-[#F8F4FF] mx-auto px-4 py-10  flex-col items-center text-[#6D737A]">
      <div className=''>
        <h1 className='text-3xl font-bold'>Most <span className='text-[#000080]'>Popular Course</span></h1>
        <h2 className='text-[#6D737A] text-[20px] mt-4'>Various versions have evolved over the years, sometimes by accident,</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
        {categories.map((category, index) => (
          <div key={index} className='flex w-full h-[76px] bg-[#FFFFFF] rounded-[20px] justify-between items-center p-4'>
            <div className='flex items-center space-x-4'>
              {React.createElement(category.icon, { size: 25 })}
              <h2>{category.label}</h2>
            </div>
            <div className='hover:bg-[#FFA63A] rounded-full p-2'>
              <GoArrowUpRight size={25} className='text-[#FFA63A]' />
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col lg:flex-row gap-6 p-4 text-[#FFFFFF]'>
      <div className='bg-[#faa43c] flex w-full lg:w-[648px] h-[270px] rounded-[24px] justify-between items-center p-6'>
        <div className='w-full lg:w-1/2'>
          <h1 className='text-2xl font-bold mb-2'>Become an instructor</h1>
          <p className='text-[14px] text-white mb-4'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
          <div className='text-[#FF6636] bg-white w-[190px] rounded-[24px] items-center justify-between px-6 py-2 flex cursor-pointer'>
            <h2 className='font-semibold'>Start Teaching</h2>
            <FaArrowRightLong />
          </div>
        </div>
        <img src={oba} alt='Instructor' className='h-[250px] w-[250px] rounded-2xl' />
      </div>

      <div className='h-[271px] w-full lg:w-[648px] items-center bg-white p-4 rounded-xl'>
        <h1 className='text-2xl font-bold text-black'>Your teaching & earning steps</h1>
        <div className='grid grid-cols-1 gap-4 text-[#1D2026] text-[16px] mt-10'>
          <div className='flex justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='bg-[#EBEBFF] rounded-full w-6 h-6 flex items-center justify-center'>
                <h1 className='text-[#564FFD]'>1</h1>
              </div>
              <h2>Apply to become an instructor</h2>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='bg-[#FFF0F0] rounded-full w-6 h-6 flex items-center justify-center'>
                <h1 className='text-[#E34444]'>2</h1>
              </div>
              <h2>Build & edit your profile</h2>
            </div>
          </div>
          <div className='flex justify-between mt-10'>
            <div className='flex items-center space-x-4'>
              <div className='bg-[#EBEBFF] rounded-full w-6 h-6 flex items-center justify-center'>
                <h1 className='text-[#564FFD]'>3</h1>
              </div>
              <h2>Create your new course</h2>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='bg-[#E1F7E3] rounded-full w-6 h-6 flex items-center justify-center'>
                <h1 className='text-[#23BD33]'>4</h1>
              </div>
              <h2>Start teaching & earning</h2>
            </div>
          </div>
        </div>
      </div>
    </div>


 


    </div>
  );
}

export default Most;
