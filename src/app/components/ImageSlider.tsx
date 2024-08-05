"use client";

import React, { useState, useEffect } from 'react';

const images = [
  { src: '/images/sliderimage1.jpg',
    description: '○○店\nLorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vero!\n Ipsum repellat soluta quod laborum natus rerum voluptates,\nnulla architecto eaque ea, molestiae quis amet ut iste quaerat minima sed?\n〒000-0000\n○○県〇〇市〇〇〇〇' },
  { src: '/images/sliderimage2.jpg', 
    description: '✖️✖️店\nLorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vero!\n Ipsum repellat soluta quod laborum natus rerum voluptates,\n〒000-0000\n✖️✖️県✖️市✖️✖️✖️✖️'},
  { src: '/images/sliderimage3.jpg', 
    description: '△店\nLorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vero!\n Ipsum repellat soluta quod laborum natus rerum voluptates,\nnulla architecto eaque ea, molestiae quis amet ut iste quaerat minima sed?\n〒000-0000\n△県△市△△△△' },
  { src: '/images/sliderimage4.jpg', 
    description: '◻︎店\nLorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vero!\n Ipsum repellat soluta quod laborum natus rerum voluptates,\n〒000-0000\n◻︎◻︎県◻︎◻︎市◻︎◻︎◻︎◻︎' },
  { src: '/images/sliderimage5.jpg', 
    description: '◻︎△店\nLorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vero!\n Ipsum repellat soluta quod laborum natus rerum voluptates,\nnulla architecto eaque ea, molestiae quis amet ut iste quaerat minima sed?\n〒000-0000\n◻︎△県◻︎△市◻︎◻︎◻︎◻︎' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowText(true);
      }, 2000); // 3秒間のテキストのフェードアウト時間を待つ
    }, 10000); // 10秒ごとに画像を切り替え

    return () => clearInterval(interval); // コンポーネントのクリーンアップ
  }, []);

  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-3000 ease-in-out transform ${index === currentIndex ? 'opacity-100 scale-in' : 'opacity-0 scale-out'}`}
          style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      ))}
      <div className={`absolute bottom-5 left-20 m-4 p-2 text-white transition-opacity duration-3000 ease-in-out ${showText ? 'opacity-100' : 'opacity-0'}`}>
        {formatDescription(images[currentIndex].description)}
      </div>
    </div>
  );
};

export default ImageSlider;
