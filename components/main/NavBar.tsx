import { Socials } from '@/constants'
import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full h-[65px] fixed overflow-hidden top-0 shadow-lg shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between md:px-[10px]'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <span className='nav-button'>
                        Mia Nguyen
                    </span>
                </a>

                <div className='w-[250px] md:w-[500px] h-full flex flex-row items-center justify-between'>
                    <div className='flex items-center justify-between w-full h-auto bg-[#0300145e] px-[10px] md:px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className='cursor-pointer nav-button text-opacity-0'>About Me</a>
                        <a href="#experience" className='cursor-pointer nav-button'>Experience</a>
                        <a href="#skills" className='cursor-pointer nav-button'>Skills</a>
                        <a href="#projects" className='cursor-pointer nav-button'>Projects</a>
                        <a href="#contact" className='cursor-pointer nav-button'>Contact</a>
                    </div>
                </div>

                <div className='flex flex-row md:gap-5'>
                    <a href="https://www.linkedin.com/in/mia-n-880538174/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/MiaN11579" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:quynhnhu11579@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar