import React, { useState, useRef, useEffect } from 'react'
import NavbarContent from './NavbarContent';
import Search from './Search';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";



function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(0);
  const [isVisble, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if(ref.current) {
      observer.observe(ref.current);
    }
  }, [])

  return (
    <div className="fixed top-0 flex items-center justify-around  flex-nowrap navbar   w-full z-1 bg-[#F3C069] h-20">
      <p className="text-2xl  sm:ml-20 home ">Home</p>

      {/* Navbar links (hidden on small screens) */}
      <div ref={ref} className={`w-[50%] flex flex-row justify-around  navbar invisible md:visible fade-down ${isVisble ? "show" : " "}`}>
        <a href="#about"><NavbarContent prop={"About"} /></a>
        <a href="#contact"> <NavbarContent prop={"Contact"} /></a>
        <a href="#portfolio"><NavbarContent prop={"Portfolio"} /></a>

      </div>
      {/* Search (hidden on small screens) */}
      <div className="hidden md:block">
        <Search />
      </div>
      <div className='text-3xl md:hidden cursor-pointer sm:pr-30  w-10 hamburger' onClick={() => { setOpen(true) }}>
        <RxHamburgerMenu />
      </div>

      {open ? <div className='bg-[#8e9094] h-full w-40  text-black text-bold z-5 fixed top-0 right-0 px-5 py-5 border-2 border-[#C9B59C] animate-slideIn'>
        <RxCross2 className="text-3xl mb-4 cursor-pointer opacity-60 hover:opacity-100" onClick={() => setOpen(false)} />

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
