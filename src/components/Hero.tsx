import Carousel from "../components/Carousel";
import React from 'react';
import gambar1 from "../../public/gambar1.jpg"
import gambar2 from "../../public/gambar2.jpg"
import gambar3 from "../../public/gambar3.jpg"
import gambar4 from "../../public/gambar4.jpg"

const slides = [
    gambar1,
    gambar2,
    gambar3,
    gambar4,
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
