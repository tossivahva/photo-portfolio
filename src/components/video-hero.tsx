import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

const VideoHero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll({
        target: canvasRef,
        offset: ['center end', 'start start'],
    });
    
    const images = useMemo(() => {
        const loadedImages: HTMLImageElement[] = [];
        
        for (let i = 1; i <= 206; i++) {
            const img = typeof Image !== 'undefined' ? new Image() : { src: `/img/hero-sequence/${i}.webp` } as HTMLImageElement;
            // const img = new Image();
            img.src = `/img/hero-sequence/${i}.webp`;
            loadedImages.push(img);
        }
        return loadedImages;
    }, []);
    
    const render = useCallback((index: number) => {
        if (images[index - 1]) {
            canvasRef.current?.getContext('2d')
                     ?.drawImage(images[index - 1], 0, 0);
        }
    }, [images]);
    
    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 206]);
    
    useMotionValueEvent(currentIndex, 'change', (latest) => {
        render(Number(latest.toFixed()));
        console.log(latest.toFixed());
    });
    
    useEffect(() => {
        render(1);
    }, [render]);
    
    return (
        <div
            className='relative w-full h-[3000px] bg-blue-500'
        >
            {/*<div className='h-96'/>*/}
            <canvas
                ref={canvasRef}
                width={1000}
                height={1000}
                className='sticky top-0 bg-cover border-8 border-red-500'
            >
            </canvas>
        </div>
    );
};

export default VideoHero;
