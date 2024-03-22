import Image from 'next/image';
import React from 'react';
import struktur from "../../../public/struktur.png";

const AboutUs = () => {
  return (
    <div className='w-screen bg-white flex flex-col items-center'>
      <div className='mt-24 mb-8 place-content-center'>
        <img src='./logo.png' alt='logo pmbe' className='h-52 mb-4 mx-auto items-center justify-center'/>
        <h1 className='text-center text-5xl mb-4 font-bold text'>Lembaga Sertifikasi Profesi </h1>
        <b className='text-center text-5xl text-[#F06B23] font-bold'>Pertambangan Mineral Batubara dan Energi (PMBE)</b>
      </div>
      <div>
        <h2 className='text-justify ml-28 mr-28 mb-4 text-lg'>Lembaga Sertifikasi Profesi PMBE (Pertambangan Mineral Batubara dan Energi) adalah tonggak penting bagi para profesional di industri Pertambangan, Panas Bumi, Konservasi Energi, dan Migas. Sebagai lembaga di bawah naungan BNSP, kami berkomitmen untuk menjadikan PMBE sebagai pusat keunggulan dalam menerapkan standar kompetensi tertinggi. Dengan sertifikasi dari PMBE, Anda tidak hanya memperoleh pengakuan atas keahlian Anda, tetapi juga membuka peluang untuk menjadi yang terdepan dalam industri yang kompetitif dan dinamis.</h2>
        <div className='flex justify-center mt-4 gap-28'>
          <div className='mx-4 text-center'>
            <img src='./asesor.png' alt='Logo 1' className='w-48 h-48 mx-auto rounded-full' />
            <b className='mt-2 text-xl '>Asesor</b>
            <p className=''>Dengan Asesor yang telah tersertifikasi.</p>
          </div>
          <div className='mx-4 text-center'>
            <img src='./skema.png' alt='Logo 2' className='w-48 h-48 mx-auto rounded-full' />
            <b className='mt-2 text-xl'>Skema</b>
            <p className=''>Terdapat banyak pilihan tingkatan skema.</p>
          </div>
          <div className='mx-4 text-center '>
            <img src='./tuk.png' alt='Logo 3' className='w-48 h-48 mx-auto rounded-full' />
            <b className='mt-2 text-xl'>TUK</b>
            <p className="">TEMPAT UJI KOMPETENSI (TUK) Yang bersertifikat</p>
          </div>
        </div>
      </div>
      <h1 className='text-center text-5xl  mt-32 font-bold text mr-12 mb-20'>VISI MISI LSP PMBE </h1>
      <div className='flex flex-row justify-center gap-6'>
      <div className='w-[600px] h-[260px] border-solid border-8 border-[#F06B23] rounded-full  mb-6 mr-12'>
        <h1 className='text-center text-3xl  mr-8 mt-4 text-[#F06B23] font-bold font-sans'>VISI</h1>
        <h3 className='text-justify mx-12 mt-6 text-xl font-sans'>Menjadi Lembaga Sertifikasi Profesi yang profesional, independen, akuntabel, dan 
          kredibel di Indonesia serta diakui secara Internasional.</h3>
      </div>
      <div className='w-[600px] h-[260px] border-solid border-8 border-[#F06B23] rounded-full mb-6 mr-12'>
        <h1 className='text-center text-3xl mr-8 mt-4 text-[#F06B23] font-bold font-sans'>MISI</h1>
        <h3 className='text-justify mx-12 mt-2 text-xl font-sans'>Mendukung penyediaan tenaga kerja sektor ESDM yang kompeten dan profesional. 
        Mendukung pengembangan Sumber Daya Manusia. Mengembangkan jejaring dan sinergis dengan pemangku kebijakan.</h3>
      </div>
      </div>
      <h1 className='text-center text-5xl  mt-32 font-bold text mr-12 mb-12'>Struktur Organisasi LSP PMBE </h1>
      <Image src={struktur} alt='struktur-organisasi' className='w-1/2 h-400 mt-2 mb-32'></Image>
    </div>
  );
}

export default AboutUs;
