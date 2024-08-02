"use client"
import React, { useEffect } from 'react';
import './BackgroundAnimation.css'; // CSSファイルを別途作成してインポートします

const BackgroundAnimation = () => {
  useEffect(() => {
    const background2 = document.querySelector('.background2') as HTMLElement;
    const background3 = document.querySelector('.background3') as HTMLElement;
    const background4 = document.querySelector('.background4') as HTMLElement;

    if (background2) {
      background2.style.transform = 'translateX(160%)';
      setTimeout(() => {
        background2.style.animation = 'scrollBackground2 40s linear infinite';
      }, 10000); // 少しの遅延を追加してアニメーションを開始
    }

    if (background3) {
      background3.style.transform = 'translateX(240%)';
      setTimeout(() => {
        background3.style.animation = 'scrollBackground3 40s linear infinite';
      }, 20000); // 少しの遅延を追加してアニメーションを開始
    }

    if (background4) {
      background4.style.transform = 'translateX(420%)';
      setTimeout(() => {
        background4.style.animation = 'scrollBackground4 40s linear infinite';
      }, 30000); // 少しの遅延を追加してアニメーションを開始
    }
  }, []);

  return (
    <>
      <div className="background background1"></div>
      <div className="background background2"></div>
      <div className="background background3"></div>
      <div className="background background4"></div>
    </>
  );
};

export default BackgroundAnimation;
