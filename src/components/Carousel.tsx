"use client"
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";
import { motion } from "framer-motion";

const AnimatedContent = ({ title, subtitle }:any) => {
  return (
    <div className='absolute top-1/4 left-0 right-0 text-center'>
      <h1 className='text-white font-bold text-6xl'>{title}</h1>
      <br />
      <h4 className='text-white font-bold text-4xl'>{subtitle}</h4>
      <br />
      <br />
      <a
        href="https://wa.me/+6285724919584"
        className='bg-[#F06B23] h-12 w-30 p-4 rounded-full text-white transition-opacity duration-500 hover:bg-opacity-80'
      >
        Contact Us
      </a>
    </div>
  );
};

const Carousel = ({ slides, titles, subtitles, autoSlide = false, autoSlideInterval = 3000 }:any) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      next();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [curr, autoSlide, autoSlideInterval]);

  return (
    <div className='w-full h-screen overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((slide:any, index:any) => (
          <div key={index} className='w-full flex-shrink-0 relative'>
            <img src={slide} alt={`Slide ${index + 1}`} className='w-full h-full object-cover' />
            <AnimatedContent
              title={titles[index]}
              subtitle={subtitles[index]}
            />
          </div>
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4 '>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronRight size={40} />
        </button>
      </div>
      <div className='absolute bottom-20 left-0 right-0 flex items-center justify-center gap-2'>
        {slides.map((_:any, i:any) => (
          <div
            key={i}
            className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-4" : "bg-opacity-50"}`}
          />
        ))}
      </div>
      <div className="absolute bottom-20 right-[-300px]">
            <motion.div
            className="bg-white p-3 rounded-lg border-2 border-[#F06B23]"
            style={{ width: 'calc(50% - 20px)' }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
             >
            <div className="flex items-center gap-2">
            <img
            src="./profile1.png"
            alt="Profile Picture"
            className="w-10 h-10 rounded-full border-2 border-[#F06B23]"
            />
            <div>
             <p className="text-[#F06B23] text-base font-semibold">
             Hendra Wijaya
            </p>
            <p className="text-base text-[#F06B23] font-semibold">
            PT. Minerba Sejahtera
             </p>
            </div>
            </div>
            <div className="text-sm text-[#F06B23] mt-2">
            "I highly recommend certification here, fast and responsive service and easy to understand."
             </div>
            <a
            href="https://wa.me/+6285724919584"
            target="_blank"
            className="bg-[#F06B23] text-white py-1 px-3 rounded-full mt-4  hover:bg-opacity-80 flex justify-center items-center"
            >
            Contact Us
            </a>
            </motion.div>
            </div>
            <div className='absolute bottom-20 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_ :any, i :any) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-4" : "bg-opacity-50"}`}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-20 right-4">
            <motion.div
            className="bg-white p-3 rounded-lg border-2 border-[#F06B23]"
            style={{ width: 'calc(50% - 20px)' }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
             >
            <div className="flex items-center gap-2">
            <img
            src="./profile2.png"
            alt="Profile Picture 2"
            className="w-10 h-10 rounded-full border-2 border-[#F06B23]"
            />
            <div>
             <p className="text-[#F06B23] text-base font-semibold">
             Bobby Santoso
            </p>
            <p className="text-base text-[#F06B23] font-semibold">
            PT. Mineral Nusantara Jaya
             </p>
            </div>
            </div>
            <div className="text-sm text-[#F06B23] mt-2">
            "I really like the LSP PMBE team because they are so friendly in serving our company's certification."
             </div>
            <a
            href="https://wa.me/+6285724919584"
            target="_blank"
            className="bg-[#F06B23] text-white py-1 px-3 rounded-full mt-4  hover:bg-opacity-80 flex justify-center items-center"
            >
            Contact Us
            </a>
            </motion.div>
            </div>
    </div>
  );
};

export default Carousel;
