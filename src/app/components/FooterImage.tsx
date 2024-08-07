import React from 'react';

const FooterImage = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row mt-40'>
        {Array(3).fill('').map((_, index) => (
          <div key={index} className='relative group cursor-pointer'>
            <img 
              src="/images/brand.jpg" 
              alt="brand" 
              className='w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-90' />
            <div className='absolute border-2 rounded-full top-1/4 right-1/3 w-32 h-32 bg-transparent group-hover:bg-white transition-colors duration-300 ease-in-out'>
              <div className='flex justify-center mt-9 text-center'>
                <p className='text-white group-hover:text-black transition-colors duration-300 ease-in-out'>brand<br/>concept</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterImage;
