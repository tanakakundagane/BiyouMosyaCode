import React from 'react';
import Link from 'next/link';

const EyeBeauty = () => {
  return (
    <div className='mt-40 border-t-2 w-full text-center border-r-2'>
      <h1 className='p-14 text-5xl mt-10'>Eye beauty</h1>
      <Link href="/next-page" passHref>
        <div className="relative w-[400px] h-[500px] cursor-pointer overflow-hidden rounded-full mx-auto">
          <div
            className="absolute inset-0 bg-center bg-cover rounded-full transform transition-transform duration-500 hover:scale-110"
            style={{
              backgroundImage: "url('/images/104484.jpg')",
              backgroundSize: "500%", // 画像の一部分を拡大
              backgroundPosition: "50% 15%", // 画像の中央部分にフォーカス
            }}
          ></div>
        </div>
      </Link>
      <div className='p-10 text-lg'>
        <h2>第一印象がきらめく</h2>
        <h2>見違えるようなアイビューティーを。</h2>
      </div>
      <div className='w-3/4 mx-auto'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium obcaecati corporis necessitatibus aut, quibusdam ducimus tenetur sint harum ad dolores repellat illo! Rerum adipisci tempore deleniti, qui laudantium debitis.</p>
      </div>
      <Link href="/next-page" passHref>
        <div className='p-2 mt-10 flex flex-col md:flex-row border  rounded-full w-60 mx-auto'>
          <div className='flex-1 taxt-center'>
            <p>View more</p>
          </div>
          <div className='flex-1 text-center'>
            <p>→</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EyeBeauty;
