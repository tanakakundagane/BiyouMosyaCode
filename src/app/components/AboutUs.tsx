import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const AboutUs = () => {
  return (
    <div className='mt-40'>
      <div  className='over'>
        <BackgroundAnimation/>
        <div className="parallelogram-container">
          <div className="parallelogram mx-auto">
            <div className='w-1/2 mx-auto'>
              <h1 className='text-5xl p-10'>
                About us
              </h1>
              <h2 className='pt-14 pb-10 text-xl'>
                大きな感動は、<br/>小さな表現に眠っている。
              </h2>
              <p className='leading-7 text-sm'>
                お店に入った瞬間に感じる、特別な空間。気持ちのいいおもてなしで、なりたい私になれる予感。美しくなったアイラッシュやネイルに、思わず笑顔。お店を出る頃には、大きな感動で心が満たされている。小さなときめきが重なるとき、世界はもっと美しく見えてくる。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
