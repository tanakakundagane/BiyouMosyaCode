import React, { useEffect, useState } from 'react';

interface SlideInMenuProps {
  news: string;
  onClose: () => void;
}

const SlideInMenu: React.FC<SlideInMenuProps> = ({ news, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // アニメーションの時間に合わせて300ms後にonCloseを呼び出す
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-end">
      <div className={`w-1/2 h-full bg-white p-6 transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="text-black text-2xl mb-4"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className="text-black">
          <h2 className="text-2xl mb-4">News Detail</h2>
          <p>{news}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideInMenu;
