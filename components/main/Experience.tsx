"use client"

import React, { Component } from 'react'
import ProjectCard from '../sub/ProjectCard'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import ExperienceCard from '../sub/ExperienceCard'

type Props = {}

type State = {}

class Experience extends Component<Props, State> {
    state = {}
    render() {

        const Frankensolar = 
        `• Collaborated with development team to redesign and implement new features for the company’s website, enhancing user experience and supports business goals by effectively showcases their products and services.
• Utilized web scraping to extract and display relevant product information and images from the company’s external website.
• Developed a custom WordPress plugin to enable advanced filtering of posts based on custom taxonomies.`
        const Zorbit = 
        `• Participated as a team member to design and implement Mathstoria, a digital math learning game for grade 4‑6 students.
• Implemented a variety of rich and interactive math models with unique mechanics to create engaging learning experiences within the game platform.
• Contributed to the development of comprehensive math learning tools that both students and teachers can benefit from.
• Worked closely with artists and designers to implement the game’s design and architecture seamlessly and effectively.
• Collaborated with cross‑functional teams to ensure the effective integration of the models with other aspects of the game. `

        return (
            <motion.div
                initial='hidden'
                animate='visible'
                className='flex flex-col items-center justify-center page-padding z-40' id='experience'
            >
                <motion.h1
                    variants={slideInFromTop(0.25)}
                    className='text-[30px] md:text-[50px] lg:text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'
                >
                    My Experience
                </motion.h1>
                <div className='h-full w-full items-center justify-center flex flex-col gap-10 md:px-20 z-[30] '>
                    <ExperienceCard
                        title='Freelance WordPress Developer'
                        company='Frankensolar Americas Inc.'
                        date='July 2023 – August 2023'
                        location=' Brampton, ON'
                        description={Frankensolar}
                    />
                    <ExperienceCard
                        title='Game Developer Work Term Student'
                        company='Zorbit’s Math Adventure'
                        date='May 2022 – April 2023'
                        location=' St. John’s, NL'
                        description={Zorbit}
                    />
                </div>
            </motion.div>
        )
    }
}

export default Experience