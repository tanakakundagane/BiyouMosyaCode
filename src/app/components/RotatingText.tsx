
"use client";

import { motion } from 'framer-motion';

const RotatingText = () => {
  const text = "beauty eye beauty eye beauty eye ";

  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
      <motion.div
        className="relative"
        style={{
          width: '150px', 
          height: '150px', 
          transformOrigin: 'center' ,

        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        {text.split("").map((char, index) => {
          const angle = (index / text.length) * 360;
          return (
            <motion.span
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: "0 75px", // Adjust the radius of the circle
                position: 'absolute', // 追加: 位置を絶対位置に設定
                right:70,
                top:0,
                fontSize:13,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default RotatingText;

