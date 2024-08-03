// src/app/page.tsx
import AboutUs from './components/AboutUs';
import EyeBeauty from './components/EyeBeauty';
import ImageSlider from './components/ImageSlider';
import Nail from './components/Nail';
import ParallaxComponent from './components/ParallaxComponent';

const Home = () => {
  return (
    <div className="font-title">
      <ParallaxComponent />
      <AboutUs/>
      <div className='flex flex-col md:flex-row w-full'>
        <EyeBeauty/>
        <Nail/>
      </div>
      <ImageSlider/>
      <div className='pt-96'></div>
      <div className='pt-96'></div>
    </div>
  );
};

export default Home;
