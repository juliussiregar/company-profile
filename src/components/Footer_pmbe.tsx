import Image from 'next/image'
import React from 'react'
import logo from "../../public/logo.png";


const Footer_pmbe = () => {
  return (
    <div data-aos="fade-up"
      data-aos-anchor-placement="center-bottom">
      <div className='w-screen h-[360px] flex flex-col items-center bg-gray-200 text-[#F06B23] font-serif '>
        <div className=' lg:ml-[50px] '>
        <div className='flex flex-row  2xl:gap-[400px] xl:gap-[350px] lg:gap-[200px] sm:gap-[100px] mt-4 '>
          <h1 className='text-2xl '>About Us</h1>
          <h1 className='text-2xl '>Contact Us</h1>
          <h1 className='text-2xl '>Lokasi</h1>
        </div>
        <div className='flex flex-row mt-4'>
          <div className=' flex flex-col'>
            <Image className='lg:w-[150px] sm:w-[100px] mt-2 mb-4 cursor-pointer transition duration-300 transform hover:scale-110' src={logo} alt="Logo" />
            <p className='text-justify lg:text-sm sm:text-xs xl:w-[275px] lg:w-[200px] sm:w-[150px]'>Lembaga ini dibawah naungan BNSP yang bertanggung jawab melaksanakan sertifikasi
              kompetensi untuk profesi di bidang Pertambangan, Panas Bumi, Konservasi Energi dan Migas</p>
          </div>
          <div className=' flex flex-col 2xl:ml-56 2xl:mr-[270px] xl:ml-44 xl:mr-52 lg:ml-24 lg:mr-8 sm:ml-12 sm:-mr-4'>
            <p className='text-justify text-sm lg:w-[250px] sm:w-[125px] mt-2'>Ruko Gading Regency, Jl. Soekarno Hatta No.14 Blok A 1, Cisaranten Endah, Kec. Arcamanik, Kota Bandung, Jawa Barat 40293</p><br />
            <p className='text-justify  text-sm'>Telp : (021) 82767609</p>
            <p className='text-justify text-sm'>WA/HP : +62 812-1010-1238</p> <br />
            <p className='text-justify text-sm'>+62 822- 9933- 1238</p><br />
            <p className='text-justify text-sm'>Email : lspenergimandiri@gmail.com</p>

          </div>
        
          <div className=' flex flex-col 2xl:-mr-52 '>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31623.276099046523!2d107.6709935!3d-6.9374643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e902f2a42b25%3A0x476a98d8485109a8!2sLSP%20PMB%20Energi!5e0!3m2!1sen!2sid!4v1652889645346!5m2!1sen!2sid"
                 width="220" height="280" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        </div>  






      </div>
      <div className='w-screen h-[50px] flex flex-col justify-center items-center text-center bg-[#F06B23]  text-white'>
        <p className='text-xs'>COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
        <p className='text-xs'>Design And Developed By PT.Dinamika Digital Nusantara</p>
      </div>
    </div>
  )
}

export default Footer_pmbe
