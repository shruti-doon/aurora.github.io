import React, { useEffect } from 'react';
import satellite from "../assets/satellite.jpg";
import star from "../assets/star.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const info = [
  {
    title: "Latest Satellites Launched",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eum recusandae harum eius fuga temporibus incidunt aspernatur amet. Dolore, nesciunt consectetur. Debitis mollitia consectetur dolores? Magnam, accusantium harum. Explicabo, quia!",
    icon: satellite,
    delay: "200",
  },
  {
    title: "Newly discovered stars",
    description: "Description for the service B...",
    icon: star,
    delay: "150",
  },
];

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-black/50 text-white pb-12 relative z-10">
      <div className="container mx-auto px-4">
        {info.map((data, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={data.delay}
            className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-10"
          >
            <div className="flex justify-center sm:justify-start">
              <img
                src={data.icon}
                alt={data.title}
                className="w-[300px] h-[180px] max-w-xs sm:max-w-md my-4"
                data-aos="zoom-in"
                data-aos-delay={data.delay}
              />
            </div>
            <div
              className="space-y-3 xl:pr-36 p-6 border-r-2 border-b-2 border-r-sky-800"
              data-aos="fade-up"
              data-aos-delay={data.delay}
            >
              <h1 className="uppercase text-2xl font-thin font-mono">{data.title}</h1>
              <p className="text-xs">{data.description}</p>
              <button className="bg-white/20 text-white hover:bg-white/30 px-4 py-1 rounded-md duration-200">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
