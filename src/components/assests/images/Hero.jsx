import React from 'react';
import Vector from '../components/assests/images/Vector.png';
import GroupImage from "../components/assests/images/Group.png";
import Group1 from '../components/assests/images/Group1.png';
import { CiPlay1 } from "react-icons/ci";

function Hero(props) {
  return (
    <div className='relative max-w-[1400px] bg-[#000080] mx-auto py-6 flex flex-col md:flex-row justify-center items-center px-6 text-center md:text-left'>
      <div className='flex flex-col items-center md:items-start space-y-2'>
        <h3 className='text-[#FFA63A]'>Dare the impossible, stay ahead in style</h3>
        <h1 className='text-4xl md:text-5xl text-white font-bold leading-tight'>Learn faster and smarter</h1>
        <h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
          with<span className='text-[#FFA63A] border-b-2 border-[#FFA63A]'> AI-Struc</span><span className='text-[#FFA63A]'>tured learning.</span>
        </h1>
        <p className='mt-2 text-[#CFD3D6]'>
          Insight is an innovative learning platform that integrates AI<br />
          models to dynamically generate quizzes based on user preferences,<br />
          course content, and learning objectives.<br />
          Insight helps students test their knowledge, identify their strengths<br />
          and weaknesses, and receive instant feedback and guidance.
        </p>
        <div className='flex mt-2 justify-between w-[500px] px-2  '>
          <div><button className='bg-white hover:bg-gray-300 py-2 sm-ml-6 px-4 rounded-full' aria-label='Get started'>Get started</button></div>
          <img src={Vector} alt='Vector illustration' className='w-[150px]  md:flex lg:flex ' />
        </div>
      </div>
      <img src={GroupImage} alt='Group illustration' className='w-[500px] mt-6 md:mt-0 md:ml-6 ' />
      <div className='absolute bottom-[-55px] md:bottom-[-25px] right-0 left-0 mx-auto flex justify-center'>
        <div className='h-[110px] w-[110px] bg-black rounded-full flex items-center justify-center'>
          <div className='bg-[#FFA63A] rounded-full flex items-center justify-center h-[90px] w-[90px] relative'>
            <CiPlay1 size={30} className='absolute text-white' />
            <img src={Group1} alt='king' className='rounded-full h-[70px] w-[70px]' />
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {};

export default Hero;
