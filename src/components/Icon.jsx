import React from 'react';
import PropTypes from 'prop-types';
import { FaUserFriends } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { PiUsersThreeLight } from "react-icons/pi";
import { PiGraduationCapLight } from "react-icons/pi";


function Icon(props) {
  return (
    <div className='max-w-full bg-[#F1F2F8]   mx-auto px-4 py-8 flex flex-col items-center justify-center text-Stem-Regular font-custom'>
      <div className='flex flex-wrap items-center justify-center gap-20 '>
        <div className='flex items-center mb-4 p-4 hover:shadow-lg rounded-lg'>
          <div className='bg-gradient-to-b from-[#2AF9B1] to-[#20B486] rounded-full h-[84px] w-[84px] flex items-center justify-center'>
            <PiGraduationCapLight className='text-white w-[44px] h-[44px]' />
          </div>
          <div className='ml-4'>
            <h4 className=' text-[#06241B] text-[17.06px]'>300</h4>
            <h4 className='text-[#52565C] text-[10.66px]'>Instructors</h4>
          </div>
        </div>

        <div className='flex items-center mb-4 p-4 hover:shadow-lg rounded-lg'>
          <div className='bg-gradient-to-b from-[#A988F9] to-[#6D3AE9] rounded-full h-[84px] w-[84px] flex items-center justify-center text-white'>
            <FaUserFriends className='w-[44px] h-[44px]' />
          </div>
          <div className='ml-4'>
            <h4 className=' text-[#06241B] text-[17.06px]'>20,000+</h4>
            <h4 className='text-[#52565C] text-[10.66px]'>Students</h4>
          </div>
        </div>

        <div className='flex items-center mb-4 p-4 hover:shadow-lg rounded-lg'>
          <div className='bg-gradient-to-t from-[#EE455A] to-[#FFA4AF] rounded-full h-[84px] w-[84px] flex items-center justify-center text-white'>
            <FiVideo className='w-[44px] h-[44px]' />
          </div>
          <div className='ml-4'>
            <h4 className='text-[#06241B] text-[17.06px] '>10,000+</h4>
            <h4 className='text-[#52565C] text-[10.66px] px-2'>Videos</h4>
          </div>
        </div>

        <div className='flex items-center mb-4 p-4 hover:shadow-lg rounded-lg'>
          <div className='bg-gradient-to-t from-[#21C9FF] to-[#92DAF0] rounded-full h-[84px] w-[84px] flex items-center justify-center text-white'>
            <PiUsersThreeLight className='w-[44px] h-[44px]' />
          </div>
          <div className='ml-4'>
            <h4 className=' text-[#06241B] text-[17.06px]'>50,000+</h4>
            <h4 className='text-[#52565C] text-[10.66px]'>Users</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
Icon.propTypes = {};

export default Icon;
