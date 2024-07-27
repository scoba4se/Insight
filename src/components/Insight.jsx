import React from 'react';
import king from '../components/assests/images/king.png';

function Insight() {
  return (
    <div className='max-w-[1400px] bg-white mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start text-[#000000] justify-center'>
      <div className='flex justify-center md:justify-start w-full md:w-auto'>
        <img src={king} alt='king' className='mb-6 w-[50px] md:w-[450px] md:mb-0 md:mr-6 rounded-lg' />
      </div>
      <div className='text-center md:text-left px-4 md:px-0'>
        <h1 className='text-4xl font-bold'>Insight helps you</h1>
        <h1 className='text-4xl font-bold text-[#000080]'>Become Experienced</h1>
        <p className='mt-4 md:max-w-[500px] p-2'>
          Insight is an innovative e-learning platform that integrates an AI model to dynamically generate quizzes based on user preferences, course content, and learning objectives. Insight helps students to test their knowledge, identify their strengths and weaknesses, and receive instant feedback and guidance. Insight also adapts to the students’ learning pace and style, and provides them with personalized quizzes that match their level and goals.
        </p>
        <button className='bg-[#FFA63A] py-1 px-10 mt-6 rounded-full text-yellow-50'>Get started</button>
      </div>
    </div>
  );
}

export default Insight;
