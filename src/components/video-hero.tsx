import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';


const VideoHero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll({ target: canvasRef, offset: ['center end', 'center start'] });
    
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        console.log(latest);
    });
    
    return (
        <div
            className='w-full h-[300vh] bg-blue-500'
        >
            <h1 className='hero-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-center font-bold text-white'>
                Keke title lala
            </h1>
            <canvas
                ref={canvasRef}
                className='w-full h-full border-8 border-red-500'
            >
            
            </canvas>
        </div>
    );
};

export default VideoHero;
