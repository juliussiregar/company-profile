"use client"
import React, { useEffect, useRef, useState } from 'react';
import VideoPlayerControls from '@/components/VideoPlayerControls';

const History = () => {
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoDuration, setVideoDuration] = useState<number>();
    const [videoProgress, setVideoProgress] = useState<number>(0);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            setVideoDuration(video.duration);
        }
    }, []);

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
        <div className='w-screen h-screen flex flex-col items-center justify-start'>
           <h1 className='text-center text-5xl font-bold text'>History </h1>
            <div ref={videoContainerRef} className='relative w-[80%] max-w-6xl mx-auto my-8  overflow-hidden '>
                <div className='absolute top-16 right-16 z-10 '>
                    <VideoPlayerControls progress={videoProgress} isPaused={isPaused} onPlayPause={togglePlayPause} />
                </div>
                <button onClick={togglePlayPause}></button>
                <video
                    className='w-[1200px] h-[600px] mt-6'
                    src="/video.mp4"
                    ref={videoRef}
                    autoPlay  
                    loop
                    muted
                ></video>
            </div>
        </div>
    );
};

export default History;
