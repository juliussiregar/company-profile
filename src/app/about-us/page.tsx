import Image from 'next/image';
import React from 'react';
import struktur from "../../../public/struktur.png";
import logo from "../../../public/logo.png";
import asesor from "../../../public/asesor.png"
import skema from "../../../public/skema.png"
import tuk from "../../../public/tuk.png"

const AboutUs = () => {
  return (
    <div className='w-screen bg-white flex flex-col items-center'>
      <div className='mt-24 mb-8 text-center'>
        <div data-aos="zoom-out-up">
          <Image src={logo} alt='logo pmbe' className='md:h-52 w-auto mb-4 mx-auto sm:h-36' />
        </div>
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h1 className='text-center lg:text-5xl mb-4 font-bold text md:text-4xl sm:text-2xl'>Lembaga Sertifikasi Profesi </h1>
          <b className='lg:text-5xl text-[#F06B23] font-bold md:text-3xl md:ml-12 sm:text-xl sm:ml-6' >Pertambangan Mineral Batubara dan Energi (PMBE)</b>
        </div>
      </div>
      <div>
        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="2000"
          data-aos-duration="2000">
          <h2 className='flex text-justify lg:ml-[300px] lg:mr-[300px] mb-8 lg:text-lg md:ml-[100px] md:mr-[100px] 
          sm:text-sm sm:ml-[50px] sm:mr-[50px]'>Lembaga Sertifikasi Profesi PMBE (Pertambangan Mineral Batubara dan Energi) adalah tonggak penting bagi para profesional di industri Pertambangan, Panas Bumi, Konservasi Energi, dan Migas. Sebagai lembaga di bawah naungan BNSP, kami berkomitmen untuk menjadikan PMBE sebagai pusat keunggulan dalam menerapkan standar kompetensi tertinggi. Dengan sertifikasi dari PMBE, Anda tidak hanya memperoleh pengakuan atas keahlian Anda, tetapi juga membuka peluang untuk menjadi yang terdepan dalam industri yang kompetitif dan dinamis.</h2>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="2000">

          <div className='flex justify-center mt-4 lg:gap-28 '>
            <div className='mx-4 text-center'>
              <Image src={asesor} alt='Logo 1' className='md:w-48 md:h-48 mx-auto rounded-full sm:w-28 sm:h-28' />
              <b className='mt-2 md:text-xl sm:text-lg'>Asesor</b>
              <p className='md:text-base sm:text-sm'>Dengan Asesor yang telah tersertifikasi.</p>
            </div>
            <div className='mx-4 text-center'>
              <Image src={skema} alt='Logo 2' className='md:w-48 md:h-48 mx-auto rounded-full sm:w-28 sm:h-28' />
              <b className='mt-2 md:text-xl sm:text-lg'>Skema</b>
              <p className='md:text-base sm:text-sm'>Terdapat banyak pilihan tingkatan skema.</p>
            </div>
            <div className='mx-4 text-center '>
              <Image src={tuk} alt='Logo 3' className='md:w-48 md:h-48 mx-auto rounded-full sm:w-28 sm:h-28' />
              <b className='mt-2 md:text-xl sm:text-lg'>TUK</b>
              <p className="md:text-base sm:text-sm">TEMPAT UJI KOMPETENSI (TUK) Yang bersertifikat</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center text-5xl  mt-32 font-bold text mr-12 md:mb-20 md:ml-12 md:text-3xl sm:text-2xl sm:mb-12 sm:ml-16' >VISI MISI LSP PMBE </h1>
      <div className='flex xl:flex-row justify-center gap-6  xl:ml-12 sm:flex-col md:mr-8 md:ml-8 sm:mr-12 sm:ml-36'>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">

          <div className='xl:w-[550px] xl:h-[260px] border-solid border-8 border-[#F06B23] rounded-full  mb-6 mr-1 sm:w-[400px] sm:h-[250px] '>
            <h1 className='text-center text-3xl  mr-6 mt-4 text-[#F06B23] font-bold font-sans'>VISI</h1>
            <h3 className='text-justify mx-12 mt-6 font-sans  sm:text-base'>Menjadi Lembaga Sertifikasi Profesi yang profesional, independen, akuntabel, dan
              kredibel di Indonesia serta diakui secara Internasional.</h3>
          </div>
        </div>
        <div data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <div className='xl:w-[550px] xl:h-[260px] border-solid border-8 border-[#F06B23] rounded-full mb-6 mr-12 sm:w-[400px] sm:h-[250px]'>
            <h1 className='text-center text-3xl mr-6 mt-4 text-[#F06B23] font-bold font-sans'>MISI</h1>
            <h3 className='text-justify mx-12 mt-2  font-sans  sm:text-base'>Mendukung penyediaan tenaga kerja sektor ESDM yang kompeten dan profesional.
              Mendukung pengembangan Sumber Daya Manusia. Mengembangkan jejaring dan sinergis dengan pemangku kebijakan.</h3>
          </div>
        </div>
      </div>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">

        <div className='items-center justify-center flex flex-col'>
          <h1 className='text-center xl:text-5xl  mt-32 font-bold text  mb-12 md:text-4xl sm:text-3xl '>Struktur Organisasi LSP PMBE </h1>
          <Image src={struktur} alt='struktur-organisasi' className='w-auto xl:h-[400px] mt-2 mb-32 justify-center md:h-[300px] sm:h-[255x]'></Image>
        </div>
      </div>
    </div>

  );
}

export default AboutUs;
