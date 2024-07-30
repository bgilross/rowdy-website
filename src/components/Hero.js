import React from "react";
import rowdyPic from "../images/rowdy-pic-1.png";

const Hero = () => {
  return (
    <div className='flex flex-col h-screen w-full items-center justify-between'>
      <div className='flex text-white/80 text-[8rem]'>
        <h1 className='px-4'>R</h1>
        <h1 className='px-4'>O</h1>
        <h1 className='px-4'>W</h1>
        <h1 className='px-4'>D</h1>
        <h1 className='px-4'>Y</h1>
      </div>
      <div className='flex text-white/80'>
        <h1 className='text-3xl px-4'>PASADENA, TX</h1>
        <h1 className='text-3xl px-6'>SUPER GROUP</h1>
      </div>
      <div className='pt-8 flex'>
        <img src={rowdyPic} alt='Rowdy Band' height={600} width={600}></img>
      </div>
    </div>
  );
};

export default Hero;
