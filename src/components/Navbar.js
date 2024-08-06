import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import facebook from '../images/facebook2.png'
import instagram from '../images/instagram2.png'
import youtube from '../images/youtube2.png'
import spotify from '../images/spotify2.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] text-white"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20 text-white font-bronco text-xl">
          {/* <a
            onClick={handleNav}
            href="#main"
            className="hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span>Landing Page</span>
          </a> */}
          <Link
            to="/"
            onClick={handleNav}
            href="#main"
            className="hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/bio"
            onClick={handleNav}
            href="#bio"
            className="hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span>Bio</span>
          </Link>
          {/* <a
            onClick={handleNav}
            href="#bio"
            className="hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span>BIO PAGES</span>
          </a> */}
          <a
            onClick={handleNav}
            href="#videos"
            className="hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span>Videos</span>
          </a>
          <a
            onClick={handleNav}
            href="#streaming"
            className="hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span>Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#extra"
            className="hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span>Lil Extra Sumthin</span>
          </a>
          <div className="md:hidden">
            <img src={facebook} alt="facebook" className="icons my-2" />
            <img src={instagram} alt="facebook" className="icons my-2" />
            <img src={youtube} alt="facebook" className="icons my-2" />
            <img src={spotify} alt="facebook" className="icons my-2" />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Navbar
