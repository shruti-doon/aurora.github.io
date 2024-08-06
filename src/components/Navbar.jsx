import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div data-aos="fade-down" className='fixed top-0 left-0 right-0 w-full h-[70px] z-50 bg-white/10 backdrop-blur-sm py-4'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 font-bold text-2xl text-white">
            <img src={logo} alt="Aurora logo" className='w-10' />
            <span>
              <Link to="/">Aurora</Link>
            </span>
          </div>
          <div className='text-white'>
            <ul className="flex items-center gap-6 text-xl py-4 font-thin">
              <li>
                <Link to='/about' className='hover:font-semibold'>
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className='hover:font-semibold'>
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/" className='hover:font-semibold'>
                  Galaxy
                </Link>
              </li>
              <li className='hover:font-semibold'>
                <a href="#">Satellites</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-white/20 text-white hover:bg-white/30 px-4 py-1 rounded-md duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
