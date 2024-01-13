import { Socials } from '@/constants'
import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        Mia Nguyen
                    </span>
                </a>

                <div className='w-[500px] h-full flex flex-row items-center justify-between'>
                    <div className='flex items-center justify-between w-full h-auto bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className='cursor-pointer nav-button'>About Me</a>
                        <a href="#experience" className='cursor-pointer nav-button'>Experience</a>
                        <a href="#skills" className='cursor-pointer nav-button'>Skills</a>
                        <a href="#projects" className='cursor-pointer nav-button'>Projects</a>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <a href="https://www.linkedin.com/in/mia-n-880538174/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/MiaN11579" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://github.com/MiaN11579" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                    <a href="https://discord.com/users/515311435593547779" target="_blank"><i className="fa-brands fa-discord"></i></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar