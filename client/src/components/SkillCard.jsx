import React from 'react'
import { useState, useRef, useEffect } from 'react';
import useOnScreen from '../useOnScreen';


function SkillCard({ name, children }) {
  const [ref, isVisible] = useOnScreen();

  return (
    <>
      <div ref={ref} className={`fade-up ${isVisible ? "show" : ""}`}>
        <div className='bg-[#5a565671]  h-[200px] w-[200px] flex flex-col items-center justify-center space-y-4 shadow-xl  rounded-xl mb-10 skill-card ' >
          <div className='text-8xl'>{children}</div>
          <p className='text-center text-lg text-[white] font-medium'>{name}</p>
        </div>
      </div>
    </>
  )
}

export default SkillCard;
