import Link from 'next/link'
import React from 'react'

const Nail = () => {
  return (
    <div className='mt-40 border-t-2 w-full text-center mb-20'>
      <h1 className='p-14 text-5xl mt-10'>Nail</h1>
      <Link href="/next-page" passHref>
        <div className="relative w-[400px] h-[500px] cursor-pointer overflow-hidden rounded-full mx-auto">
          <div
            className="absolute inset-0 bg-center bg-cover rounded-full transform transition-transform duration-500 hover:scale-110"
            style={{
              backgroundImage: "url('/images/nail.jpg')",
              backgroundSize: "250%", // 画像の一部分を拡大
              backgroundPosition: "50% 15%", // 画像の中央部分にフォーカス
            }}
          ></div>
        </div>
      </Link>
      <div className='p-10 text-lg'>
        <h2>いつまでも健やかな爪で</h2>
        <h2>あなたらしいネイルをずっと。</h2>
      </div>
      <div className='w-3/4 mx-auto'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium obcaecati corporis necessitatibus aut, quibusdam ducimus tenetur sint harum ad dolores repellat illo! Rerum adipisci tempore deleniti, qui laudantium debitis.</p>
      </div>
      <Link href="/next-page" passHref>
        <div className='p-2 mt-10 flex flex-col md:flex-row border  rounded-full w-60 mx-auto hover:bg-slate-400 duration-300'>
          <div className='flex-1 taxt-center'>
            <p>View more</p>
          </div>
          <div className='flex-1 text-center'>
            <p>→</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Nail