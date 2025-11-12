import React from 'react'


function SkillCard({ name, children}) {
  return (
    <>
      <div className='bg-[#5a565671]  h-[200px] w-[200px] flex flex-col items-center justify-center space-y-4 shadow-xl  rounded-xl mb-10 skill-card'>
        <div className='text-8xl'>{children}</div>
        <p className='text-center text-lg text-[white] font-medium'>{name}</p>
      </div>
    </>
  )
}

export default SkillCard;
