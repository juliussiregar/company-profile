import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Header = () => {
  return (
   
    <div className="flex flex-row bg-[#F06B23] h-14">
        <div className='flex flex-row gap-4 w-6/12 pl-40 items-center text-white'>
            <a href='#'><FaFacebookF /></a>
            <a href='#'><FaInstagram /></a>
            <a href='#'><FaYoutube /></a>
            <a href='#'><h3>BNSP-LSP-1765-ID</h3></a>
        </div>
        <div className='flex flex-row w-6/12 gap-4 items-center justify-end mr-40 text-white'>
            <a href='#'>Login</a>
            <a href='https://wa.me/+6285724919584'>Contact</a>
        </div>
    </div>
  )
}

export default Header