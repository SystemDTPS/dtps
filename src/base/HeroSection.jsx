import React from 'react';
import bg from '../assets/1.jpg';
import logo from '../assets/logo.png';
import { FaAngleDoubleDown } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="w-full h-screen relative top-0">
      {/* Background Image */}
      <img src={bg} alt="" className="w-full h-full object-cover absolute top-0 left-0 right-0 z-0" />

      {/* Text - Ensure it's positioned correctly */}
      <div className="absolute top-1/3 p-4 transform  -translate-y-1/2 text-left z-10">
        <img src={logo} alt="" className='h-[70px] md:h-[150px] mt-20 sm:mt-40' />
        <h1 className="text-white text-[24px] md:text-[60px] font-primary font-bold mt-5">DTPS Product And Services LLP</h1>
        <p className="mt-2 text-left text-[14px] md:text-[28px] w-[90%] md:w-[50%] text-zinc-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo delectus corrupti totam quas esse, vero maxime porro ipsam nam ullam itaque hic reprehenderit impedit.</p>
        <a href="#about">
          <button style={{boxShadow: '0 0 20px 2px #fee685'}} className='mt-12 px-4 py-2 rounded bg-amber-300 cursor-pointer hover:shadow-rose-400 text-[20px] sm:text-[24px]'>Explore Now</button>  
        </a>
      </div>

      <div className='absolute bottom-[50px] animate-bounce left-[calc(50%_-_25px)] h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center'>
        <FaAngleDoubleDown className='text-[20px] text-emerald-400' />
      </div>

      <div className='absolute left-0 bottom-[0px] w-full h-[100px] z-10 bg-[linear-gradient(0deg,#ffffff, transparent)]'></div>
    </div>
  );
};

export default HeroSection;
