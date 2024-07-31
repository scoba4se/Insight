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
    <div className="max-w-screen-full bg-[#F8F4FF] px-4 text-[#6D737A] justify-center gap-10 mx-auto flex flex-col items-center font-custom ">
      <div>
      <div className=" mb-8">
        <h1 className="text-[#21212f] text-[30.88px] font-bold">Most <span className="text-[#000080]">Popular Course</span></h1>
        <h2 className="text-[10.66px] mt-4">Various versions have evolved over the years, sometimes by accident,</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full mx-auto justify-between mb-16">
  {categories.map((category, index) => (
    <div 
      key={index} 
      className="flex w-full max-w-[186.36px] h-[40.52px] bg-[#FFFFFF] rounded-[20px] justify-between items-center p-2 hover:bg-[#FFA63A] transition-colors duration-300"
    >
      <div className="flex items-center space-x-4 text-[10.66px]">
        {React.createElement(category.icon, { size: 25 })}
        <h2>{category.label}</h2>
      </div>
      <div className="hover:bg-[#FFA63A] rounded-full p-2 transition-colors duration-300">
        <GoArrowUpRight size={25} className="text-[#FFA63A] hover:text-[#FFFFFF]" />
      </div>
    </div>
  ))}
</div>


      </div>
     

    </div>
  );
}

export default Most;