import React from 'react'
import Contact from "./Contact";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";


function Contacts() {
    return (
        <>
            <div id='contact' className='flex flex-col justify-center items-center border-t-3 border-[#F3C069] h-80  bg-[#8e9094] space-y-3'>
                <h1 className="text-4xl font-bold text-center text-white my-4">Contact Me</h1>
                <div className='flex space-x-10'>
                    <Contact name="hr6087@gmail.com" >
                        <MdOutlineMessage />
                    </Contact>
                    <Contact name="(+91) 8826314821">
                        <IoCallOutline />
                    </Contact>
                </div>
                <Contact name="New Delhi, India">
                    <CiLocationOn />
                </Contact>
                <h1 className='text-2xl mt-10 text-[#3A3B40] font-medium shadow-[#F3C069]'>Thanks For Visiting</h1>
            </div>
        </>
    )
}

export default Contacts
