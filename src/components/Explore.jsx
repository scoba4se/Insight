import React from 'react';
import { FaFacebookF, FaGolfBall } from 'react-icons/fa';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { SlSocialDribbble } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialBehance } from "react-icons/sl";

function Explore() {
  return (
    <div className='bg-[#36013F] max-w-full mx-auto px-4 py-6 flex flex-col items-center justify-center font-custom'>
      <div className='flex flex-wrap items-center justify-center gap-8'>

        <div className='text-[16px] text-[#CFD3D6] '>
          <h1 className='text-[24px] text-[#FFFFFF] py-2'>Contact</h1>
          <h4 className='py-2'>Call: +123 400 123</h4>
          <h4 className='py-1'>Present all messages, here</h4>
          <h4 className='py-1'>All our social media are available</h4>
          <h4 className='py-1'>Email: example@gmail.com</h4>
          <div className='flex gap-3 mt-2'>
            <div className='rounded-full bg-white w-10 h-10 flex items-center justify-center'>
              <FaFacebookF size={20} className='text-blue-500' />
            </div>
            <div className='rounded-full bg-white w-10 h-10 flex items-center justify-center'>
              <SlSocialDribbble size={20} className='text-blue-500' />
            </div>
            <div className='rounded-full bg-white w-10 h-10 flex items-center justify-center'>
              <TiSocialLinkedin size={20} className='text-blue-500' />
            </div>
            <div className='rounded-full bg-white w-10 h-10 flex items-center justify-center'>
              <IoLogoInstagram size={20} className='text-blue-500' />
            </div>
            <div className='rounded-full bg-white w-10 h-10 flex items-center justify-center'>
              <SlSocialBehance size={20} className='text-blue-500' />
            </div>
          </div>
        </div>

        <div className='text-[16px] text-[#CFD3D6]'>
          <h1 className='text-[24px] text-[#FFFFFF]'>Explore</h1>
          <h4 className='py-1'>Home</h4>
          <h4 className='py-1'>About</h4>
          <h4 className='py-1'>Course</h4>
          <h4 className='py-1'>Become an Instructor</h4>
          <h4 className='py-1'>Join our Affiliate Network</h4>
          <h4 className='py-1'>Become our Partner</h4>
        </div>

        <div className='text-[16px] text-[#CFD3D6] '>
          <h1 className='text-[24px] text-[#FFFFFF]'>Category</h1>
          <h4 className='py-1'>Design</h4>
          <h4 className='py-1'>Development</h4>
          <h4 className='py-1'>Marketing</h4>
          <h4 className='py-1'>Business</h4>
          <h4 className='py-1'>Lifestyle</h4>
          <h4 className='py-1'>Photography</h4>
        </div>

        <div className='text-[16px] text-[#CFD3D6] w-[200px] '>
          <h1 className='text-[#FFFFFF] text-[24px] mt-6'>Subscribe</h1>
          <p className='py-2 '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <input
            type='text'
            placeholder='Email here'
            className='rounded-[24px]  mt-4 w-[280px] h-[50px] flex items-center px-4 text-black'
          />
          <button className='bg-[#FFA63A] text-[16px] text-white rounded-full w-[170px] h-[46px] px-4 py-3 mt-4'>
            Subscribe Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Explore;
