import React, { Component } from 'react';
import { FaLayerGroup } from "react-icons/fa";
import { PiNotebookLight } from "react-icons/pi";
import { VscGitPullRequest } from "react-icons/vsc";

export class Access extends Component {
  render() {
    return (
      <div className='max-w-[1200px] bg-white mx-auto  py-4 flex flex-col items-center text-[#625D5D] mb-10 font-custom'>
        <h1 className=' text-center text-[21.33px] text-[#433C3C] font-bold'>Why Choose Us?</h1>
        <h4 className='text-center text-[#625D5D] text-[20px] mt-4'>
          Randomised words even slightly which don't look even<br />
          slightly believable.
        </h4>
        <div className='flex flex-col md:flex-row justify-center w-full text-[9.6px] mt-10'>
          <div className='flex flex-col items-center md:w-1/3 mb-6 md:mb-0  '>
            <div className='shadow-md rounded-full flex items-center justify-center w-14 h-14 mb-2'>
              <FaLayerGroup size={30} className='text-[#013499]' />
            </div>
            <h2 className='font-bold text-[#494E62]'>Learning Path</h2>
            <h2 className='font-bold text-[#494E62]'>Recommendations</h2>
            <p className='text-center py-4 px-24 text-[#758fa4]'>
              Insight's AI-driven algorithm analyses individual learning behaviors, preferences, and career goals to provide personalized learning paths, ensuring efficient skill acquisition.
            </p>
          </div>
          <div className='flex flex-col items-center md:w-1/3 mb-6 md:mb-0  '>
            <div className='shadow-md rounded-full flex items-center justify-center w-14 h-14 mb-2'>
              <VscGitPullRequest size={30} className='text-[#FFA63A]' />
            </div>
            <h2 className='font-bold text-[#625D5D] text-[9.6px]'>Career Goals-to</h2>
            <h2 className='font-bold text-[#625D5D] text-[9.6px]'>Skill Matrix</h2>
            <p className='text-center py-4 px-24 text-[#758fa4]'>
              A dynamic tool that aligns career aspirations with the necessary skills, empowering users to make informed decisions about their professional development.
            </p>
          </div>
          <div className='flex flex-col items-center md:w-1/3  '>
            <div className='shadow-md rounded-full flex items-center justify-center w-14 h-14 mb-2'>
              <PiNotebookLight size={30} className='text-[#013499] ' />
            </div>
            <h2 className='font-bold text-[#494E62]'>Course Selection</h2>
            <p className='text-center py-6 px-24 text-[#758fa4]'>
              Comprehensive notes and resources for deep understanding.<br />
              Well-structured content to facilitate learning.
            </p>
          </div>
        </div>
        <button className='bg-[#FFA63A] text-[8.53px] text-center rounded-full px-10 py-2 text-white mt-10 '>Access Whitepaper</button>
      </div>
    );
  }
}

export default Access;
