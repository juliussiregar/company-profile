"use client"
import React, { useEffect, useRef, useState } from 'react';
import VideoPlayerControls from '@/components/VideoPlayerControls';

const History = () => {
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoProgress, setVideoProgress] = useState<number>(0);
    const videoContainerRef = useRef<HTMLDivElement>(null);




    useEffect(() => {
        const video = videoRef.current;
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isPaused) {
                    video?.play();
                } else {
                    video?.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
        if (videoContainerRef.current) {
            observer.observe(videoContainerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [isPaused]);

    useEffect(() => {
        const video = videoRef.current;
        const handleTimeUpdate = () => {
            const currentTime = video?.currentTime || 0;
            const duration = video?.duration || 1;
            setVideoProgress(currentTime / duration);
        };

        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            setIsPaused(!video.paused);
            video.paused ? video.play() : video.pause();
        }
    };

    return (
        <div className='w-screen h-auto flex flex-col items-center justify-start'>
            <h1 className='text-center  font-bold text 2xl:-mb-32 md:-mb-20 xl:text-6xl md:text-4xl sm:text-2xl'>History</h1>
            <div ref={videoContainerRef} className='relative  2xl:w-[1000px] 2xl:h-[800px] xl:w-[800px] xl:h-[550px] mx-auto  md:w-[600px] md:h-[450px] sm:w-[500px] sm:h-[400px]'>
                <div className='absolute 2xl:top-44 2xl:right-[12px] z-10 xl:top-28 xl:right-[12px] md:top-28 md:right-[12px] sm:top-28 sm:right-[12px]'>
                    <VideoPlayerControls progress={videoProgress} isPaused={isPaused} onPlayPause={togglePlayPause} />
                </div>
                <button onClick={togglePlayPause}></button>
                <video
                    className='w-full h-full mt-6'
                    src="/video.mp4"
                    ref={videoRef}
                    autoPlay
                    loop
                ></video>
            </div>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">

                <p className="text-justify border-4 border-solid border-[#F06B23] rounded-lg mb-12 mt-8 xl:mx-[400px]  lg:mx-[200px]  sm:mx-[100px]  p-4">
                    Lembaga Sertifikasi Profesi (LSP) Pertambangan Mineral Batubara dan Energi (PMBE) diinisiasikan oleh PT.Prediktama Fajar Traindo pada tahun 2017
                    dan berkedudukan di Kota Bandung, Jawa Barat, Indonesia. Landasan pendirian LSP ini berawal dari digagasnya MEA pada
                    tahun 2003, yang akan mentransformasikan kawasan ASEAN menjadi suatu kawasan dimana terdapat aliran bebas tenaga kerja
                    terampil dari mancanegara. Aliran bebas tenaga kerja terampil antar negara ASEAN tersebut, harus disikapi dengan penyediaan
                    tenaga kerja lokal Indonesia yang lebih terampil, kompeten dan bersertifikat. Hal ini bertujuan agar tenaga kerja lokal bisa
                    berdaya saing tinggi dengan tenaga kerja asing.
                </p>
            </div>

        </div>
    );
};

export default History;
