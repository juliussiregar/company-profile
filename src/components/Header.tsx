import Link from 'next/link';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-screen flex flex-row bg-[#F06B23] h-14 ">
      {/* Bagian kiri */}
      <div className='flex flex-row gap-4 w-6/12 pl-40 items-center text-white md:-ml-32 sm:-ml-32 '>
        <Link href='https://www.facebook.com/lsp.td/' className='icon cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'><FaFacebookF /></Link>
        <Link href='https://www.instagram.com/lsp.td/?hl=en' className='icon cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'><FaInstagram /></Link>
        <Link href='https://www.youtube.com/@LSPPmbEnergi-lz9jy' className='icon cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'><FaYoutube /></Link>
        <Link href='/' className='icon cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500 md:ml-4 md:shrink-0 sm:shrink-0 '><h3>BNSP-LSP-1765-ID</h3></Link>
      </div>
      {/* Bagian kanan */}
      <div className='flex flex-row w-6/12 gap-4 items-center justify-end mr-40 text-white md:mr-8  sm:mr-8 '>
        <Link href='#' className='icon cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'>Login</Link>
        <Link href='https://wa.me/+6285724919584' className='icon cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'>Contact</Link>
      </div>
    </div>
  )
}

export default Header;
