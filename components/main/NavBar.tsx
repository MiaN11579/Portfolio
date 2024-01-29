"use client"

import React from 'react'

const NavBar = () => {

    return (
        <div className='w-full h-[65px] fixed overflow-hidden top-0 shadow-lg shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between px-[4px] md:px-[10px]'>
                <a href="/" className='h-auto w-auto flex flex-row items-center'>
                    <span className='nav-button'>
                        Mia Nguyen
                    </span>
                </a>

                <div className='w-[270px] md:w-[500px] lg:w-[700px] h-full flex flex-row items-center justify-between'>
                    <div className='flex items-center justify-between w-full h-auto bg-[#0300145e] px-[10px] md:px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a onClick={onClickAbout.bind(this)} className='cursor-pointer nav-button'>About Me</a>
                        <a onClick={onClickExperience.bind(this)} className='cursor-pointer nav-button'>Experience</a>
                        <a onClick={onClickSkills.bind(this)} className='cursor-pointer nav-button'>Skills</a>
                        <a onClick={onClickProjects.bind(this)} className='cursor-pointer nav-button'>Projects</a>
                        <a onClick={onClickContact.bind(this)} className='cursor-pointer nav-button'>Contact</a>
                    </div>
                </div>

                <div className='flex flex-row gap-1 md:gap-5 lg:gap-10'>
                    <a href="https://www.linkedin.com/in/mia-n-880538174/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/MiaN11579" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:quynhnhu11579@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                </div>
            </div>
        </div>
    )
}

const onClickAbout = (e: React.MouseEvent) => {
    e && e.preventDefault(); // to avoid the link from redirecting
    const aboutElement = document.getElementById("about");
    aboutElement?.scrollIntoView({ behavior: 'smooth' });
};

const onClickExperience = (e: React.MouseEvent) => {
    e && e.preventDefault(); // to avoid the link from redirecting
    const aboutElement = document.getElementById("experience");
    aboutElement?.scrollIntoView({ behavior: 'smooth' });
};

const onClickSkills = (e: React.MouseEvent) => {
    e && e.preventDefault(); // to avoid the link from redirecting
    const aboutElement = document.getElementById("skills");
    aboutElement?.scrollIntoView({ behavior: 'smooth' });
};

const onClickProjects = (e: React.MouseEvent) => {
    e && e.preventDefault(); // to avoid the link from redirecting
    const aboutElement = document.getElementById("projects");
    aboutElement?.scrollIntoView({ behavior: 'smooth' });
};

const onClickContact = (e: React.MouseEvent) => {
    e && e.preventDefault(); // to avoid the link from redirecting
    const aboutElement = document.getElementById("contact");
    aboutElement?.scrollIntoView({ behavior: 'smooth' });
};

export default NavBar