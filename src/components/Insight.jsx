import React from 'react';
import king from '../components/assests/images/king.png';

function Insight() {
  return (
    <div className='max-w-full bg-white mx-auto px-4  py-6 flex flex-col md:flex-row items-center md:items-start text-[#000000] justify-center font-custom'>
      <div className='flex justify-center md:justify-start w-full md:w-auto'>
        <img src={king} alt='king' className='mb-6 w-[400px] h-[290px] md:w-[400px] md:mb-0 md:mr-6 rounded-lg' />
      </div>
      <div className='flex flex-col text-center md:text-left px-4 md:px-0'>
        <h1 className='text-[29.86px] font-bold '>Insight helps you <span className='text-[#000080]'> Become</span></h1>
        <h1 className='text-[29.86px] font-bold text-[#000080]'>Become Experienced</h1>
        <p className='mt-4 md:max-w-[500px] text-[#000000] text-[10.66px] '>
          Insight is an innovative e-learning platform that integrates an AI model to dynamically generate quizzes based on user preferences, course content, and learning objectives. Insight helps students to test their knowledge, identify their strengths and weaknesses, and receive instant feedback and guidance. Insight also adapts to the students’ learning pace and style, and provides them with personalized quizzes that match their level and goals.
        </p>
        <button className='bg-[#FFA63A] w-[142px] py-3 px-6  rounded-full text-[#ffffff] text-[8.53px] mt-12'>Get started</button>
      </div>
    </div>
  );
}

export default Insight;
