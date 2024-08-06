'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import SlideInMenu from './SlideInMenu'; // SlideInMenu コンポーネントをインポート

const News = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState('');

  const handleNewsClick = (news: string) => {
    setSelectedNews(news);
    setIsMenuOpen(true);
  };

  return (
    <div className='mt-40'>
      <div className='w-5/6 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div>
            <h1 className='text-6xl'>News</h1>
          </div>
          <div>
            <Link href="/next-page" passHref>
              <div className='p-2 flex flex-col md:flex-row border rounded-full w-60 mx-auto hover:bg-slate-400 duration-300'>
                <div className='flex-1 text-center'>
                  <p className='text-center'>View All</p>
                </div>
                <div className='flex-1 text-center'>
                  <p>→</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='mt-10'>
          <div className='w-full border-t-2'>
            <div className='p-5'>
              <p>Jul 05, 2024</p>
              <h2 
                className='text-2xl underline-animated hover:cursor-pointer'
                onClick={() => handleNewsClick('Lorem, ipsum dolor sit amet consectetur adipisicing elit.')}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
          </div>
          <div className='w-full border-t-2'>
            <div className='p-5'>
              <p>Jul 06, 2024</p>
              <h2 
                className='text-2xl underline-animated hover:cursor-pointer'
                onClick={() => handleNewsClick('Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}
              >
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
            </div>
          </div>
          <div className='w-full border-t-2'>
            <div className='p-5'>
              <p>Jul 07, 2024</p>
              <h2 
                className='text-2xl underline-animated hover:cursor-pointer'
                onClick={() => handleNewsClick('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.')}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </h2>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && <SlideInMenu news={selectedNews} onClose={() => setIsMenuOpen(false)} />}
    </div>
  );
};

export default News;
