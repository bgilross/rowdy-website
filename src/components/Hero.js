import React from "react";
import rowdyPic from "../images/rowdy-pic-1.png";

const Hero = () => {
  return (
    <div className='flex flex-col h-screen w-full items-center justify-between'>
      <div className='flex text-white/80 text-[8rem] font-carnivale'>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>R</h1>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>O</h1>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>W</h1>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>D</h1>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>Y</h1>
      </div>
      <div className='flex text-white/75 font-bronco font-bold'>
        <h1 className='text-3xl px-4'>PASADENA, TX</h1>
        <h1 className='text-3xl px-6'>SUPER GROUP</h1>
      </div>
      <div className='pt-8 flex mb-8'>
        <img
          src={rowdyPic}
          alt='Rowdy Band'
          className='max-h-screen max-w-full sm:w-[600px] sm:h-[600px]'
        ></img>
      </div>
    </div>
  );
};

export default Hero;
