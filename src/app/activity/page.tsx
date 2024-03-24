import Image from 'next/image'
import React from 'react'
import Activity_1 from "../../../public//activity1.jpg";
import Activity_2 from "../../../public//activity2.jpg";
import Activity_3 from "../../../public//activity3.jpg";
import Activity_4 from "../../../public//activity4.jpg";
import Activity_5 from "../../../public//activity5.jpg";
import Activity_6 from "../../../public//activity6.jpg";

const Activity = () => {
    return (
        <div className='w-screen h-auto '>
            <div data-aos="fade-down">
                <h1 className='text-center  font-bold -mb-12 xl:text-6xl md:text-4xl lg:text-5xl sm:text-2xl'>Activity</h1>
            </div>
            <div className='flex 2xl:flex-col 2xl:items-center 2xl:justify-start lg:flex-row lg:justify-center lg:gap-8 sm:flex-col sm:items-center'>
                <div data-aos="fade-left" className='flex 2xl:flex-row mt-24 2xl:gap-8 lg:flex-col lg:gap-8 sm:flex-col sm:gap-8'>
                    <Image src={Activity_1} alt='Aktifitas_1' className='2xl:w-full 2xl:h-[300px] rounded-2xl xl:h:-[200px] xl:w-[400px] lg:w-[350px] sm:w-[350px]' style={{ maxWidth: '100%' }}></Image>
                    <Image src={Activity_2} alt='Aktifitas_2' className='2xl:w-full 2xl:h-[300px] rounded-2xl xl:h:-[200px] xl:w-[400px] lg:w-[350px] sm:w-[350px]' style={{ maxWidth: '100%' }}></Image>
                    <Image src={Activity_3} alt='Aktifitas_3' className='2xl:w-full 2xl:h-[300px] rounded-2xl xl:h:-[200px] xl:w-[400px] lg:w-[350px] sm:w-[350px]' style={{ maxWidth: '100%' }}></Image>

                </div>
                <div data-aos="fade-right" className='flex 2xl:flex-row lg:mt-24 2xl:gap-8 lg:flex-col lg:gap-8 sm:flex-col sm:gap-8 sm:mt-8'>
                    <Image src={Activity_4} alt='Aktifitas_4' className='2xl:w-full 2xl:h-[300px] rounded-2xl xl:h:-[200px] xl:w-[400px] lg:w-[350px] sm:w-[350px]' style={{ maxWidth: '100%' }}></Image>
                    <Image src={Activity_5} alt='Aktifitas_5' className='2xl:w-full 2xl:h-[300px] rounded-2xl xl:h:-[200px] xl:w-[400px] lg:w-[350px] sm:w-[350px]' style={{ maxWidth: '100%' }}></Image>
                    <Image src={Activity_6} alt='Aktifitas_6' className='2xl:w-full 2xl:h-[300px] rounded-2xl xl:h:-[200px] xl:w-[400px] lg:w-[350px] sm:w-[350px]' style={{ maxWidth: '100%' }}></Image>
                </div>
            </div>
        </div>
    )
}

export default Activity
