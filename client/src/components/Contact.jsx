import React from 'react'

function Contact({children, name}) {
  return (
    <div className='flex items-center space-x-3 bg-[#3A3B40] text-[#F3C069] rounded px-4 py-1'>
      <h1 className='text-white text-xl'>{children}</h1>
      <p>{name}</p>
    </div>
  )
}

export default Contact
