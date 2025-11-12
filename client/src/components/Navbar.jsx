import React, { useState } from 'react'
import NavbarContent from './NavbarContent';
import Search from './Search';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row justify-around  flex-nowrap navbar text-white">
      <p className="text-2xl mt-15  sm:ml-20 home">Home</p>

      {/* Navbar links (hidden on small screens) */}
      <div className="w-[50%] flex flex-row justify-around mt-16 navbar invisible md:visible">
        <a href="#about"><NavbarContent prop={"About"} /></a>
        <a href="#contact"> <NavbarContent prop={"Contact"} /></a>
        <a href="#portfolio"><NavbarContent prop={"Portfolio"} /></a>

      </div>
      {/* Search (hidden on small screens) */}
      <div className="mt-16 hidden md:block">
        <Search />
      </div>
      <div className='text-3xl md:hidden cursor-pointer sm:pr-30 pt-15 w-10 hamburger' onClick={() => { setOpen(true) }}>
        <RxHamburgerMenu />
      </div>

      {open ? <div className='bg-[#8e9094] h-full w-40 text-white text-bold z-50 fixed top-0 right-0 px-5 py-5 border-2 animate-slideIn'>
        <RxCross2 className="text-3xl mb-4 cursor-pointer " onClick={() => setOpen(false)} />

        <div className="flex flex-col space-y-5">
          <a href="#about"><NavbarContent prop={"About"} /></a>
          <a href="#contact"> <NavbarContent prop={"Contact"} /></a>
          <a href="#portfolio"><NavbarContent prop={"Portfolio"} /></a>
        </div>
      </div> : ""}

    </div>
  )
}

export default Navbar
