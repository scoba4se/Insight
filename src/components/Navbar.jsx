import React, { useState } from 'react';
import Grou from '../components/assests/images/Grou.png'
import { GiPadlock } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from 'react-icons/ai';
import { MdLock } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='relative max-w-full mx-auto py-6 flex flex-col md:flex-row justify-center items-center px-6 text-center md:text-left'
    style={{ background: 'linear-gradient(90deg, #000080, #000000)' }}>
      <div className=' font-custom flex justify-between items-center w-full md:w-auto'>
        {/* Logo and Heading */}
        <div className='flex items-center space-x-2'>
          <img src={Grou} alt='Logo' className='w-10 h-10' />
          <h1 className='text-[12.48px] text-white'>INSIGHT</h1>
        </div>
        
        {/* Mobile Menu Icon */}
        <div className='md:hidden' onClick={toggleMenu}>
          <IoMenuSharp size={25} className='text-white cursor-pointer' />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden text-[8.53px] md:flex flex-1 justify-center items-center space-x-6 mt-4 md:mt-0 text-white'>
        <a href="#" className='text-[#FFA63A] '>Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
        <a href="#">Become an Instructor</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <div className='flex items-center space-x-4'>
          < MdLock  size={25} className='ml-14'  />
          <a href="#">Login</a>
          <button className='bg-[#FFA63A] px-3 py-2 rounded-full'>Create an account</button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed w-full h-screen bg-black/80 z-10 top-0 left-0 ${menuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}></div>

      {/* Mobile Navigation */}
      <nav className={`fixed top-0 right-0 w-[300px] h-[500px] rounded-lg bg-[#000052] z-20 duration-500 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <AiOutlineClose size={25} className='absolute right-4 top-4 cursor-pointer text-white' onClick={toggleMenu} />
        <ul className='flex flex-col   space-y-4 px-14 pt-10 text-start text-white'>
          <li><a href="#" className='text-[#FFA63A]'>Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Become an Instructor</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
          <div className='flex  items-center '>
            < MdLock size={25}  />
            <a href="#" className='ml-4'>Login</a>
          </div>
          <button className='bg-[#FFA63A]  py-3 rounded-full'>Create an account</button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

