import React from 'react'
import ArtistOne from './ArtistOne'
import ArtistTwo from './ArtistTwo'
import ArtistThree from './ArtistThree'
import ArtistFour from './ArtistFour'
import ArtistFive from './ArtistFive'
import ImageBar from './ImageBar'

const Bio = () => {
  return (
    <div className="flex flex-col w-full h-screen text-white">
      <ImageBar />
      <div className="flex flex-col h-[50%] w-full items-center justify-center">
        <div className="flex text-white/80 text-[3rem] sm:text-[5rem] md:text-[7rem] font-carnivale pb-8">
          <h1 className="rowdy">R</h1>
          <h1 className="rowdy">O</h1>
          <h1 className="rowdy">W</h1>
          <h1 className="rowdy">D</h1>
          <h1 className="rowdy">Y</h1>
        </div>
        <h1 className="font-bronco text-sm md:text-lg lg:text-xl xl:text-3xl px-24 pb-8">
          From the depths of the bayou city comes a multigenerational gathering
          of some of the scenes greatest individuals that came together to
          create what some say is a: PASADENA, TEXAS SUPER GROUP years in the
          making. Nothing falls short on these five fellas shoulders. They have
          been noted as saying, "We're not trying to reinvent the wheel here,
          we're just putting 4x4 tires on it". With major influences of southern
          rock, groove metal, rockin riffs, heavy metal and a whole host of
          other extravagancies. You will leave their live set begging for more.
          A complete working man's band, they are constantly putting out new
          material and videos to boot. Conquering Texas is the short term goal.
          The big picture has them playing on major stages across the greatest
          planet in our solar system. With the moniker "LET'S GET ROWDY!" how
          can you not be infatuated with this super-group five piece?
        </h1>
      </div>
      <ImageBar />

      <ArtistOne />
      <ArtistTwo />
      <ArtistThree />
      <ArtistFour />
      <ArtistFive />
    </div>
  )
}

export default Bio
