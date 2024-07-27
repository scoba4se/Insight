import React from 'react';
import PropTypes from 'prop-types';
import { FcGraduationCap } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { PiUsersThreeLight } from "react-icons/pi";

function Icon(props) {
  return (
    <div className='max-w-[1400px] bg-[#F1F2F8] mx-auto px-4 py-10 flex flex-col items-center justify-center'>
      <div className='relative mb-10'>
       
      </div>

      <div className='flex flex-wrap items-center justify-center gap-8'>
        <div className='flex items-center mb-4 p-4 hover:shadow-lg rounded-lg'>
          <div className='bg-gradient-to-b from-[#2AF9B1] to-[#20B486] rounded-full h-[50px] w-[50px] flex items-center justify-center'>
            <FcGraduationCap size={30} />
          </div>
          <div className='ml-4'>
            <h4 className='font-bold text-2xl text-[#1B1D1F]'>300</h4>
            <h4 className='text-[#52565C]'>Instructors</h4>
          </div>
        </div>

        <div className='flex items-center mb-4 p-4  hover:shadow-lg rounded-lg'>
          <div className='bg-gradient-to-b from-[#A988F9] to-[#6D3AE9] rounded-full h-[50px] w-[50px] flex items-center justify-center text-white'>
            <FaUserFriends size={30} />
          </div>
          <div className='ml-4'>
            <h4 className='font-bold text-2xl text-[#1B1D1F]'>20,000+</h4>
            <h4 className='text-[#52565C]'>Students</h4>
          </div>
        </div>

        <div className='flex items-center mb-4 p-4  hover:shadow-lg rounded-lg'>
          <div className='bg-gradient-to-t to-[#FFA4AF] from-[#EE455A] rounded-full h-[50px] w-[50px] flex items-center justify-center text-white'>
            <FiVideo size={30} />
          </div>
          <div className='ml-4'>
            <h4 className='font-bold text-2xl text-[#1B1D1F]'>10,000+</h4>
            <h4 className='text-[#52565C]'>Videos</h4>
          </div>
        </div>

        <div className='flex items-center mb-4 p-4 hover:shadow-lg rounded-lg'>
          <div className='bg-gradient-to-t to-[#92DAF0] from-[#21C9FF] rounded-full h-[50px] w-[50px] flex items-center justify-center text-white'>
            <PiUsersThreeLight size={30} />
          </div>
          <div className='ml-4'>
            <h4 className='font-bold text-2xl text-[#1B1D1F]'>50,000+</h4>
            <h4 className='text-[#52565C]'>Users</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

Icon.propTypes = {};

export default Icon;
