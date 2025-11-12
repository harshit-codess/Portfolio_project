import React from 'react'
import SkillCard from "./SkillCard.jsx";
import { FaReact, FaCss3Alt, FaNodeJs, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiCplusplus } from "react-icons/si";

function SkillCards() {
    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-4xl font-bold my-10 text-white'>My Skills</h1> 
                <div className=' flex gap-10 mb-10 mx-10 justify-center flex-wrap  '>
                    <SkillCard name={"React"}><FaReact className='text-[#00D8FF]' /></SkillCard>
                    <SkillCard name={"Html"}><FaHtml5 className='text-[#E44D26]' /></SkillCard>
                    <SkillCard name={"CSS"}><FaCss3Alt className='text-[#00d8ff]' /></SkillCard>
                    <SkillCard name={"JavaScript"}><FaJsSquare className='text-[#F0DB4F]' /></SkillCard>
                    <SkillCard name={"Node.js"}><FaNodeJs className='text-[#539E43]' /></SkillCard>
                    <SkillCard name={"Express"}><SiExpress className='text-[#000000]' /></SkillCard>
                    <SkillCard name={"MongoDB"}><SiMongodb className='text-[#4DB33D]' /></SkillCard>
                    <SkillCard name={"SQL"}><SiMysql className='text-[#00758F]' /></SkillCard>
                    <SkillCard name={"C++"}><SiCplusplus className='text-[#00599C] ' /></SkillCard>
                </div>

            </div>
        </>
    )
}

export default SkillCards
