import React from 'react';
import moon from "../assets/moon.png";

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative'>
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className='text-5xl font-bold uppercase font-serif'>For every space enthusiast</h1>
            <p data-aos ="fade-up" data-aos-delay="300" className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus ratione facilis tempora nostrum vel sequi maiores inventore nesciunt eius, quae laudantium, maxime eum fugit error exercitationem in. Ipsam, quia.</p>
            <button data-aos ="fade-up" data-aos-delay="300" className='bg-white/20 text-white hover:bg-white/30 px-4 py-1 rounded-md duration-200'>Learn More</button>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <img src={moon} alt="" className='absolute right-0 bottom-0 w-full brightness-50 z-10' />
        <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent to-black h-[20px] sm:h-[50px] md:h-[60px]"></div>
      </div>
    </div>
  );
};

export default Hero;
