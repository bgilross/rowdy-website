/* eslint-disable react/prop-types */
// import { useState } from "react";
import { IoMdHome, IoMdPerson, IoMdMail, IoMdCalendar } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col items-center
        justify-center bg-inherit text-white md:hidden"
    >
      <Link to="/">
        <SidebarIcon icon={<IoMdHome size={25} />} text={'Home'} />
      </Link>
      <Link to="/bio">
        <SidebarIcon icon={<IoMdPerson size={25} />} text={'About'} />
      </Link>
      <SidebarIcon icon={<IoMdCalendar size={25} />} text={'Events'} />
      <SidebarIcon icon={<IoMdMail size={25} />} text={'Contact'} />
    </div>
  )
}

const SidebarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
)

export default Sidebar
