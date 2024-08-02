"use client";

import { useEffect, useRef } from 'react';
import Header from './Header';
import RotatingText from './RotatingText';

const ParallaxComponent = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current && textRef.current) {
        const scrollPosition = window.scrollY;
        const zoomRatio = 30; // ズームインの比率を設定します
        const baseSize = 105; // 基本の背景サイズを設定します
        bgRef.current.style.backgroundSize = `${baseSize + scrollPosition / zoomRatio}%`;
        textRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
        <Header/>

      <div
        ref={bgRef} 
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: "url('/images/header3.jpg')", 
          backgroundSize: "105%" ,// 初期の背景サイズを設定します (例えば、110%)
          backgroundPosition: "50% 20%" // 初期の背景位置を設定します (例えば、中央上)
        }} 
      ></div>
      <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center h-full text-black">
        <div className='absolute left-20'>
          <RotatingText />       
        </div>
        <p className="text-xl mt-4 absolute bottom-28 left-20 bg-opacity-50 p-2 rounded">
          感動は、細部に宿る。
        </p>
        <h1 className="text-7xl absolute bottom-10 left-10 bg-opacity-50 p-2 rounded">
          Impression in the details.
        </h1>
      </div>
    </div>
  );
};

export default ParallaxComponent;
