import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import facebook from "../images/facebook2.png";
import instagram from "../images/instagram2.png";
import youtube from "../images/youtube2.png";
import spotify from "../images/spotify2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] text-white'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20 text-white font-bronco text-xl'>
          <a
            onClick={handleNav}
            href='#main'
            className='hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            onClick={handleNav}
            href='#work'
            className='hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <GrProjects size={20} />
            <span className='pl-4'>Work</span>
          </a>
          <a
            onClick={handleNav}
            href='#projects'
            className='hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            onClick={handleNav}
            href='#main'
            className='hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <BsPerson size={20} />
            <span className='pl-4'>Resume</span>
          </a>
          <a
            onClick={handleNav}
            href='#contact'
            className='hidden md:w-[40%] lg:w-[30%] xl:w-[25%] md:flex justify-center items-center rounded-full shadow-md bg-black/60 shadow-slate-600 hover:bg-slate-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
          <div className='md:hidden'>
            <img src={facebook} alt='facebook' className='icons my-2' />
            <img src={instagram} alt='facebook' className='icons my-2' />
            <img src={youtube} alt='facebook' className='icons my-2' />
            <img src={spotify} alt='facebook' className='icons my-2' />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
