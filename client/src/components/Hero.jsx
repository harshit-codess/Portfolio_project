import Typed from 'typed.js';
import { useState, useEffect, useRef } from "react";
import { Link } from '@fluentui/react-link';


function Hero() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Engineer", " Web Designer", " &amp; FullStack  Devloper"],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <>
            <div id="portfolio" className='flex'>
                <div className="content mx-[10%] my-[15%] text-white text-lg md:text-2xl lg:text-4xl">
                    <div className="name flex">
                        <p className="mt-[2%]">I'M</p> &nbsp;&nbsp;&nbsp;
                        <p className="text-[#F3C069] lg:text-6xl ">Harshit</p>
                    </div>
                    <div className="profession mt-[2%]">
                        <span ref={el} />
                    </div>
                    <button className='text-[#F2B56B] border-4 border-[#F2B56B] rounded-[0.5vw]  mt-5 px-4 py-2 text-base '>Contact Me</button>
                </div>
                <div className='absolute top-[20%]  left-[55%] '>
                    <img className="rounded-full bg-[#F3C069] shadow-xs w-60 md:w-120 md:mt-10" src="/MyPhoto.png" alt="my photo" />
                </div>
            </div>

            <div className="socialMedia flex flex-col text-2xl gap-2 text-amber-50 fixed top-[60%] left-[90%] md:left-[95%]">
                <div className="border-l-3 h-[100px] ml-3 mb-1 text-[#F2B56B]"></div>
                <Link href='#facebook'><i className="fa-brands fa-facebook  opacity-70 hover:opacity-100" /></Link>
                <Link href='https://github.com/harshit-codess'><i className="fa-brands fa-github opacity-70 hover:opacity-100" /></Link>
                <i className="fa-brands fa-x-twitter opacity-70 hover:opacity-100"></i>
                <Link href='https://www.linkedin.com/in/harshit-00882a265'><i className="fa-brands fa-linkedin-in opacity-70 hover:opacity-100"></i></Link>
            </div>
        </>
    )
}

export default Hero