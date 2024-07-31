import React from 'react'
import Background from './Background'
import { ReactComponent as FacebookIcon } from '../images/facebook.svg'
import { ReactComponent as InstagramIcon } from '../images/instagram.svg'
import { ReactComponent as SpotifyIcon } from '../images/spotify.svg'
import { ReactComponent as YoutubeIcon } from '../images/youtube.svg'

const Hero = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-between bg-black ">
      <div className="flex text-white/80 text-[8rem] font-carnivale">
        <h1 className="px-2 md:px-4 lg:px-6 mx-auto">R</h1>
        <h1 className="px-2 md:px-4 lg:px-6 mx-auto">O</h1>
        <h1 className="px-2 md:px-4 lg:px-6 mx-auto">W</h1>
        <h1 className="px-2 md:px-4 lg:px-6 mx-auto">D</h1>
        <h1 className="px-2 md:px-4 lg:px-6 mx-auto">Y</h1>
      </div>
      <div className="flex text-white/75 font-bronco font-bold">
        <h1 className="text-3xl px-4">PASADENA, TX</h1>
        <h1 className="text-3xl px-6">SUPER GROUP</h1>
      </div>
      {/* <Background /> */}
      <div className="pt-8 flex mb-8 bg-background bg-contain bg-center bg-no-repeat h-full w-full justify-between items-center">
        <FacebookIcon className="w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50" />
        <InstagramIcon className="w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50" />
        <SpotifyIcon className="w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50" />
        <YoutubeIcon className="w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50" />
      </div>
    </div>
  )
}

export default Hero
