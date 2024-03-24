"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "../../public/logo.png";
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';

const Header_bot = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full  flex flex-row sticky top-0 z-50 h-20 bg-white bg-opacity-80 ">
      <div className="flex items-center w-6/12 gap-0 pl-48  md:-ml-44 sm:-ml-48 ">
        <Image className='h-16 w-auto cursor-pointer transition duration-300 transform hover:scale-110' src={logo} alt="Logo" />
        <div className="text-[#F06B23] text-[0.9rem] font-[Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif]">
          <p className='kompeten'>Kompeten</p>
          <p className='profesional'>Profesional</p>
          <p className='disiplin'>Disiplin</p>
        </div>
      </div>
      <div className="text-[#F06B23] text-[0.9rem] flex md:flex-row justify-center  gap-8 xl:gap-8 font-bold pt-7 xl:ml-36  font-[Georgia, 'Times New Roman', Times, serif] lg:gap-6 
      lg:shrink-0 lg:mr-4  md:gap-2 md:mr-16 sm:ml-16">
        <div  className='flex md:flex-row justify-center gap-8 xl:gap-8 md:gap-2 sm:flex-col sm:gap-1' >
        <Link href='/' className='cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'> <h1>HOME</h1> </Link>
        <div className="relative md:ml-6" onMouseEnter={toggleDropdown} onMouseLeave={handleDropdownClose}>
          <div className='flex items-center cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'>
            <h1 >PROFILE</h1>
            <div className="ml-1 text-xl"><FaAngleDown/></div>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content absolute bg-white shadow-md text-center justify-center items-center w-36 h-26 -left-8 mt-2 rounded-lg ">
              <Link href='/about-us' className='block px-4 py-4 hover:bg-[#F06B23] hover:text-white hover:rounded-md transition duration-100 transform hover:scale-110'>About Us</Link>
              <Link href='/history' className='block px-4 py-4 hover:bg-[#F06B23] hover:text-white hover:rounded-md transition duration-100 transform hover:scale-110'>History</Link>
            </div>
          )}
        </div>
        </div>
        <div  className='flex md:flex-row justify-center gap-8 xl:gap-8 md:gap-2 sm:flex-col sm:gap-1' >
        <Link href='/skema-sertifikasi' className='cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500 md:text-center'><h1>SERTIFICATION SCHEME</h1></Link>
        <Link href='/sertification' className='cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500 '><h1>SERTIFICATION</h1></Link>
        </div>
        <div  className='flex md:flex-row justify-center gap-8 xl:gap-8 md:gap-2 sm:flex-col sm:gap-1' >
        <Link href='/activity' className='cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500 '><h1>ACTIVITY</h1></Link>
        <Link href='/our-team' className='cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500 md:text-center'><h1>OUR TEAM</h1></Link>
        </div>
      </div>
    </div>
  );
};

export default Header_bot;
