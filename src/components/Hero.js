import React from 'react'
// import Background from "./Background";
// import facebook from '../images/facebook2.png'
// import instagram from '../images/instagram2.png'
// import youtube from '../images/youtube2.png'
// import spotify from '../images/spotify2.png'

// import facebook2 from '../images/facebook.svg'
// import instagram2 from '../images/instagram.svg'
// import spotify2 from '../images/spotify.svg'
// import youtube2 from '../images/youtube.svg'
import Social from './Social'

const Hero = () => {
  return (
    <div className="flex flex-col bg-contain bg-center bg-no-repeat h-screen w-full items-center justify-center md:justify-between bg-black ">
      <div className="flex text-white md:text-white/80 text-[4rem] sm:text-[6rem] md:text-[8rem] font-carnivale">
        <h1 className="rowdy">R</h1>
        <h1 className="rowdy">O</h1>
        <h1 className="rowdy">W</h1>
        <h1 className="rowdy">D</h1>
        <h1 className="rowdy">Y</h1>
      </div>
      <div className="flex text-white md:text-white/75 font-bronco pb-8 text-xl sm:text-2xl md:text-3xl">
        <h1 className="px-4">PASADENA, TX</h1>
        <h1 className="px-6">SUPER GROUP</h1>
      </div>
      {/* <Background /> */}
      <div className="pt-8 md:flex mb-8 px-32 bg-black md:bg-background bg-contain bg-center bg-no-repeat h-full w-full justify-center items-center">
        <Social />
      </div>
    </div>
  )
}

export default Hero
