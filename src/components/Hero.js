import React from "react";
// import Background from "./Background";
import facebook from "../images/facebook2.png";
import instagram from "../images/instagram2.png";
import youtube from "../images/youtube2.png";
import spotify from "../images/spotify2.png";

const Hero = () => {
  return (
    <div className='flex flex-col h-screen w-full items-center justify-between bg-black '>
      <div className='flex text-white/80 text-[8rem] font-carnivale'>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>R</h1>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>O</h1>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>W</h1>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>D</h1>
        <h1 className='px-2 md:px-4 lg:px-6 mx-auto'>Y</h1>
      </div>
      <div className='flex text-white/75 font-bronco font-bold pb-8'>
        <h1 className='text-3xl px-4'>PASADENA, TX</h1>
        <h1 className='text-3xl px-6'>SUPER GROUP</h1>
      </div>
      {/* <Background /> */}
      <div className='pt-8 flex mb-8 px-32 bg-black md:bg-background bg-contain bg-center bg-no-repeat h-full w-full justify-center items-center'>
        <div className='flex md:items-center justify-center items-end h-[70%] w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]'>
          <img
            src={facebook}
            alt='facebook'
            className='w-20 h-20 mx-2 md:mx-4'
          />
          <img
            src={instagram}
            alt='facebook'
            className='w-24 h-24 mx-2 md:mx-4'
          />
          <img
            src={youtube}
            alt='facebook'
            className='w-20 h-20 mx-2 md:mx-4'
          />
          <img
            src={spotify}
            alt='facebook'
            className='w-24 h-24 mx-2 md:mx-4'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
