import React, { Component } from 'react';
import { FaLayerGroup } from "react-icons/fa6";
import { PiNotebookLight } from "react-icons/pi";
import { VscGitPullRequest } from "react-icons/vsc";

export class Access extends Component {
  render() {
    return (
      <div className='max-w-[1400px] bg-white mx-auto px-4 py-10 flex flex-col items-center text-[#625D5D]'>
        <h1 className='text-2xl font-bold'>Why Choose Us?</h1>
        <h4 className='text-center mt-2'>
          Randomised words even slightly which don't look even<br />
          slightly believable.
        </h4>
        <div className='flex flex-col md:flex-row justify-around w-full mt-6'>
          <div className='flex flex-col items-center w-full md:w-1/3 mb-6 md:mb-0'>
            <div className='shadow rounded-full flex items-center justify-center w-14 h-14 mb-2'>
              <FaLayerGroup size={30} className='text-[#013499]' />
            </div>
            <h1 className='font-bold'>Learning Path</h1>
            <h1 className='font-bold'>Recommendations</h1>
            <p className='text-center md:text-left px-4'>
              Insight's AI-driven algorithm analyses individual learning behaviors, preferences, and career
              goals to provide personalized learning paths, ensuring efficient skill acquisition.
            </p>
          </div>
          <div className='flex flex-col items-center w-full md:w-1/3 mb-6 md:mb-0'>
            <div className='shadow rounded-full flex items-center justify-center w-14 h-14 mb-2'>
              <VscGitPullRequest size={30} className='text-[#FFA63A]' />
            </div>
            <h1 className='font-bold'>Career Goals-to</h1>
            <h1 className='font-bold'>Skill Matrix</h1>
            <p className='text-center md:text-left px-4'>
              A dynamic tool that aligns career aspirations with the necessary skills, empowering users to make informed decisions about their
              professional development.
            </p>
          </div>
          <div className='flex flex-col items-center w-full md:w-1/3'>
            <div className='shadow rounded-full flex items-center justify-center w-14 h-14 mb-2'>
              <PiNotebookLight size={30} className='text-[#013499]' />
            </div>
            <h1 className='font-bold'>Course Selection</h1>
            <p className='text-center md:text-left px-4 p-6'>
              Comprehensive notes and resources for deep understanding.<br />
              Well-structured content to facilitate learning.
            </p>
          </div>
        </div>
        <button className='bg-[#FFA63A] rounded-full px-10 py-2 text-white mt-6'>Access Whitepaper</button>
      </div>
    );
  }
}

export default Access;
