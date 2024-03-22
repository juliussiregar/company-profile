import React from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';

interface VideoPlayerControlsProps {
    progress: number;
    isPaused: boolean;
    onPlayPause: () => void;
    size?: number;
    width?: number;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
    progress,
    isPaused,
    onPlayPause,
    size = 48,
    width = 3,
}) => {
    const center = size / 2;
    const radius = center - width;
    const dashArray = 2 * Math.PI * radius;
    const dashOffset = dashArray * (1 - progress);

    return (
        <div className='relative'>
            <svg width={size} height={size}  onClick={onPlayPause}>
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill='transparent'
                    stroke='#aaaaaa'
                    strokeWidth={width}
                />
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill='transparent'
                    stroke='#ffffff'
                    strokeWidth={width}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    strokeLinecap='round'
                />
                <foreignObject x={center - 12} y={center - 12} width={24} height={24} style={{ transform: 'rotate(0deg)' }} >
                    <div className='flex items-center justify-center'>
                        {isPaused ? (
                            <FiPlay size={24} color="#ffffff"  />
                        ) : (
                            <FiPause size={24} color="#ffffff" />
                        )}
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
}

export default VideoPlayerControls;
