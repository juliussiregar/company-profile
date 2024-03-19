import Carousel from "../components/Carousel";
import React from 'react';

const slides = [
    "./gambar1.jpg",
    "./gambar2.jpg",
    "./gambar3.jpg",
    "./gambar4.jpg",
];

const titles = [
    "LSP PMB ENERGI",
    "Building Trust through Mining Certification",
    "Elevating Your Mining Business Profile",
    "Unlocking Market Opportunities",
];

const subtitles = [
  "WELCOME",
  "Ensuring Safety and Quality Standards",
  "Competitive Edge with Certification",
  "Enhancing Competitiveness with Mining Certification",
];

const Hero = () => {
    return (
        <div>
            <div className='flex top-0 z-[-1] mt-[-80px] w-screen h-screen'>
                <Carousel slides={slides} titles={titles} subtitles={subtitles}  autoSlide={true} autoSlideInterval={2000} />
            </div>
        </div>
    );
};

export default Hero;
