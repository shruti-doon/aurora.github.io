import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../assets/wave.gif";

const ServiceData = [
    {
        title: " title A",
        content: " content for A ...",
        description: " description for the service A...........................",
        icon: <FaReact className="text-7xl" />,
        aosDelay: "200",
    },
    {
        title: " title B",
        content: " content for B ...",
        description: " description for the service B...........................",
        icon: <FaShuttleSpace className="text-7xl" />,
        aosDelay: "200",
    },
    {
        title: " title C",
        content: " content for C ...",
        description: " description for the service C...........................",
        icon: <FaSpaceAwesome className="text-7xl" />,
        aosDelay: "200",
    },
];

const Services = () => {
    return (
        <div className='bg-black/90 text-white relative'>
            <div className="container relative z-30">
                <div className='min-h-[400px]'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-20 bg-black/50'>
                        {
                            ServiceData.map(
                                (data, index) => (
                                    <div data-aos ="fade-right"  data-aos-delay={data.aosDelay}
                                    key={index}
                                    className='min-h-[180px] gap-3 flex flex-col justify-center items-center rounded-xl bg-blue-950/50 backdrop-blur-sm text-center text-2xl py-8 w-full lg:w-[300px] mx-auto transform transition duration-200 hover:scale-95'>
                                        <div className='text-center'>{data.icon}</div>
                                        <h1>{data.title}</h1>
                                        <p>{data.content}</p>
                                        <p className='text-sm'>{data.description}</p>
                                    </div>
                                ))
                        }
                    </div>
                    <img src={wave} alt="" className='h-[200px] w-full object-cover mix-blend-screen  absolute bottom-20 z-10' />
                </div>
            </div>
        </div>
    );
}

export default Services;
