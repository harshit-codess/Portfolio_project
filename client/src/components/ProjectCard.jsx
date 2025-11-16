import React from 'react';
import useOnScreen from '../useOnScreen';

function ProjectCard({title, link, children}) {
    const [ref, isVisible] = useOnScreen();

    return (
        <>
            <div ref={ref} className={`card w:40 sm:w-[80%] md:w-80  bg-[#4f545c] text-white rounded-md mx-20 mb-10 shadow-2xl  fade-up ${isVisible ? "show" : ""}`} >
                <img src="/ProjectOne.png" alt="#" className=" rounded-t-md " />
                <h1 className="pl-10 pt-6 text-white text-lg font-medium">{title}</h1>
                <p className='pl-10 pt-2'>{children}</p>
                <button className='bg-[#F3C069] rounded ml-10 my-4 px-2 project-btn '><a href={link}>Visit</a></button>
            </div>
        </>
    )
}

export default ProjectCard
