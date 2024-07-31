import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import user1 from '../components/assests/images/user1.jpg'; // Corrected the image path

function Steps() {
  return (
    <div className="font-custom max-w-screen-full bg-[#F8F4FF]  text-[#6D737A] justify-center pb-10 gap-10 mx-auto flex flex-col items-center ">
      <div className="flex flex-col lg:flex-row gap-6 text-white items-center font-custom ">
        <div className="bg-[#faa43c]  flex w-full rounded-[24px] justify-between items-center p-6">
          <div className="w-full lg:w-1/2 pl-10">
            <h1 className="text-[17.06px] mb-2">Become an instructor</h1>
            <p className="text-[7.46px] text-white mb-4">
              Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
            </p>
            <div className="text-[#FF6636] bg-white w-[120px] rounded-[24px] items-center justify-between px-6 py-2 flex cursor-pointer">
              <h2 className="text-[8.53px] text-[#FF6636]">Start Teaching</h2>
              <FaArrowRightLong size={12} />
            </div>
          </div>
          <img src={user1} alt="Instructor" className="h-[150px] w-[140px] rounded-2xl" />
        </div>

        <div className="bg-white p-4 rounded-xl w-full h-[200px]  ">
          <h1 className="text-[17.06px] font-bold text-[#1D2026] ">Your teaching & earning steps</h1>
          <div className="grid grid-cols-1 gap-4 text-[#1D2026] text-[16px] mt-4">
            <div className="flex  space-x-4 mb-4">
              <div className="flex items-center space-x-2 hover:bg-[#EBEBFF] rounded-xl px-2">
                <div className="bg-[#EBEBFF] rounded-full w-[27.73px] h-[27.73px] flex items-center justify-center">
                  <h1 className="text-[#564FFD]">1</h1>
                </div>
                <h2 className="text-[#1D2026] text-[8.53px]">Apply to become an instructor</h2>
              </div>
              <div className="flex items-center space-x-2 hover:bg-[#FFF0F0] rounded-xl px-2">
                <div className="bg-[#FFF0F0] rounded-full w-[27.73px] h-[27.73px] flex items-center justify-center">
                  <h1 className="text-[#E34444]">2</h1>
                </div>
                <h2 className="text-[#1D2026] text-[8.53px]">Build & edit your profile</h2>
              </div>
            </div>
            <div className="flex  space-x-10 mb-4">
              <div className="flex items-center space-x-2 hover:bg-[#EBEBFF] rounded-xl px-2">
                <div className="bg-[#EBEBFF] rounded-full w-[27.73px] h-[27.73px] flex items-center justify-center">
                  <h1 className="text-[#564FFD]">3</h1>
                </div>
                <h2 className="text-[#1D2026] text-[8.53px]">Create your new course</h2>
              </div>
              <div className="flex items-center space-x-2  hover:bg-[#E1F7E3] rounded-xl px-2 ">
                <div className="bg-[#E1F7E3] rounded-full w-[27.73px] h-[27.73px] flex items-center justify-center">
                  <h1 className="text-[#23BD33]">4</h1>
                </div>
                <h2 className="text-[#1D2026] text-[8.53px]">Start teaching & earning</h2>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Steps;
