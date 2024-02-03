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
                <h1 className='text-[30px] md:text-[50px] lg:text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                    My Projects
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromTop(0.5)}
            >

                <div className='h-full w-full flex flex-col md:flex-row gap-10 md:px-10 z-[30]'>
                    <ProjectCard
                        link='https://www.youtube.com/watch?v=Sdq8twxePco'
                        github=''
                        readmore='/shadebound'
                        src="/shadebound.png"
                        title="Shadebound - Fantasy 2D Platformer"
                        description="An action-adventure game with fantasty theme made from scratch with C++ and SFML."
                    />
                    <ProjectCard
                        link='https://www.youtube.com/watch?v=549-b2WlWQA'
                        github='https://github.com/MiaN11579/CalorX'
                        readmore=''
                        src="/calorX.jpg"
                        title="CalorX - Calorie Tracker App"
                        description="A user-friendly calorie tracking CRUD app made with Flutter, Firebase, and FoodData Central API."
                    />
                    <ProjectCard
                        link='https://genrify-app.herokuapp.com/'
                        github='https://github.com/dchicasduena/genrify'
                        readmore=''
                        src="/genrify.png"
                        title="Genrify - Spotify Playlist Generator"
                        description="Spotify random playlist generator based on genres and sub-genres of music. Made with MongoDB, Node.js, Bootstrap, and Spotify API."
                    />
                </div>
                <div className='h-full w-full flex flex-col md:flex-row gap-10 md:px-10 py-10 z-[30]'>
                    <ProjectCard
                        link='https://www.youtube.com/watch?v=Z_p-ZlnlAR0'
                        github=''
                        readmore='/starcraft'
                        src="/starcraft.png"
                        title="Starcraft AI Bot"
                        description="A Terran bot that fights against the built-in StarCraft Broodwar Bot using a good general-purpose strategy
                        and combat units. Made with BWAPI and C++."
                    />
                    <ProjectCard
                        link='https://walkerneo.itch.io/owlets-adventure'
                        github='https://github.com/MiaN11579/Owlet-Adventure'
                        readmore=''
                        src="/owl_adventure.png"
                        title="Owlet's Adventure - 2D Platformer"
                        description="A simple platformer with pixel art style made with Godot. This is my first game project ever so it's not perfect, but I'm proud of it nonetheless!"
                    />
                    <ProjectCard
                        link='https://mian11579.github.io/Library/'
                        github='https://github.com/MiaN11579/Library'
                        readmore=''
                        src="/library.png"
                        title="Personal Library"
                        description="A library web app that keeps track of books you read, made with HTML, CSS and JS. This is a project from The Odin Project's curriculum."
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Projects