// "use client";

// import React, { useState, useEffect } from 'react';

// const images = [
//   '/images/sliderimage1.jpg',
//   '/images/sliderimage2.jpg',
//   '/images/sliderimage3.jpg',
//   '/images/sliderimage4.jpg',
//   '/images/sliderimage5.jpg',
// ];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 10000); // 10秒ごとに画像を切り替え

//     return () => clearInterval(interval); // コンポーネントのクリーンアップ
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full transition-opacity duration-3000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//           style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default ImageSlider;

"use client";

import React, { useState, useEffect } from 'react';

const images = [
  '/images/sliderimage1.jpg',
  '/images/sliderimage2.jpg',
  '/images/sliderimage3.jpg',
  '/images/sliderimage4.jpg',
  '/images/sliderimage5.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10秒ごとに画像を切り替え

    return () => clearInterval(interval); // コンポーネントのクリーンアップ
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-3000 ease-in-out transform ${index === currentIndex ? 'opacity-100 scale-in' : 'opacity-0 scale-out'}`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      ))}
    </div>
  );
};

export default ImageSlider;

