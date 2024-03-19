import React from 'react';

const AboutUs = () => {
  return (
    <div className='w-screen h-[100vh] bg-white flex flex-col items-center'>
      <div className='mt-24 mb-8 place-content-center'>
        <img src='./logo.png' alt='logo pmbe' className='h-52 mb-4 mx-auto items-center justify-center'/>
        <h1 className='text-center text-5xl mb-4 font-bold text'>Lembaga Sertifikasi Profesi </h1>
        <b className='text-center text-5xl text-[#F06B23] font-bold'>Pertambangan Mineral Batubara dan Energi (PMBE)</b>
      </div>
      <div>
        <h2 className='text-justify ml-32 mr-32 mb-4 text-lg'>Lembaga Sertifikasi Profesi PMBE (Pertambangan Mineral Batubara dan Energi) adalah tonggak penting bagi para profesional di industri Pertambangan, Panas Bumi, Konservasi Energi, dan Migas. Sebagai lembaga di bawah naungan BNSP, kami berkomitmen untuk menjadikan PMBE sebagai pusat keunggulan dalam menerapkan standar kompetensi tertinggi. Dengan sertifikasi dari PMBE, Anda tidak hanya memperoleh pengakuan atas keahlian Anda, tetapi juga membuka peluang untuk menjadi yang terdepan dalam industri yang kompetitif dan dinamis.</h2>
        <div className='flex justify-center mt-4 gap-32'>
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
      
    </div>
  );
}

export default AboutUs;
