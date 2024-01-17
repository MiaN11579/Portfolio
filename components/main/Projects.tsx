"use client"

import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-col items-center justify-center page-padding z-40' id='projects'
        >
            <motion.div
                variants={slideInFromTop(0.25)}
            >
                <h1 className='text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                    My Projects
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromTop(0.5)}
            >

                <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 z-[30] items-center'>
                    <ProjectCard
                        link='https://www.youtube.com/watch?v=Sdq8twxePco'
                        github='https://github.com/david-dong828/COMP4300_Project'
                        src="/shadebound.png"
                        title="Shadebound - Fantasy 2D Platformer"
                        description="An action-adventure game with fantasty theme made from scratch with C++ and SFML."
                    />
                    <ProjectCard
                        link='https://www.youtube.com/watch?v=549-b2WlWQA'
                        github='https://github.com/MiaN11579/COMP4768-Final-Project'
                        src="/calorX.jpg"
                        title="CalorX - Calorie Tracker App"
                        description="A calorie tracker app made with Flutter and Firebase."
                    />
                    <ProjectCard
                        link='https://genrify-app.herokuapp.com/'
                        github=''
                        src="/portfolio.png"
                        title="Personal Portfolio Website"
                        description="This website is made with Next.js, Tailwind CSS, and Framer Motion."
                    />
                </div>
                <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 py-10 z-[30] items-center'>
                    <ProjectCard
                        link='https://genrify-app.herokuapp.com/'
                        github='https://github.com/dchicasduena/genrify'
                        src="/genrify.png"
                        title="Genrify - Spotify Playlist Generator"
                        description="Spotify random playlist generator based on genres and sub-genres of music. Made with MongoDB, Node.js, Bootstrap, and Spotify API."
                    />
                    <ProjectCard
                        link='https://www.youtube.com/watch?v=Z_p-ZlnlAR0'
                        github=''
                        src="/starcraft.png"
                        title="Starcraft AI Bot"
                        description="An AI bot that plays Starcraft 2. Made with C++ and BWAPI."
                    />
                    <ProjectCard
                        link='https://walkerneo.itch.io/owlets-adventure'
                        github='https://github.com/MiaN11579/Owlet-Adventure'
                        src="/owl_adventure.png"
                        title="Owlet's Adventure - 2D Platformer"
                        description="A simple platformer with pixel art style made with Godot. This is my first game project ever so it's not perfect, but I'm proud of it nonetheless!"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Projects