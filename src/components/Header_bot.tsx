import React from 'react'


const Header_bot = () => {
  return (
      <div className="flex flex-row sticky top-0 z-1000 h-20 bg-white bg-opacity-80">
        <div className="flex items-center w-6/12 gap-0 pl-48">
            <img className='h-[70px]' src="./logo.png" alt="Logo" />
            <div className="text-[#F06B23] text-[0.9rem] font-[Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif]">
            <p className='kompeten'>Kompeten</p>
            <p className='profesional'>Profesional</p>
            <p className='disiplin'>Disiplin</p>
            </div>
            </div>
            <div className="text-[#F06B23] text-[0.9rem] flex flex-row justify-center gap-8 font-bold pt-7 ml-12 font-[Georgia, 'Times New Roman', Times, serif] ">
                <h1>HOME</h1>
                <h1>ABOUT US</h1>
                <h1>SKEMA SERTIFIKASI</h1>
                <h1>OUR TEAM</h1>
            </div>
            
        </div>



  )
}

export default Header_bot
