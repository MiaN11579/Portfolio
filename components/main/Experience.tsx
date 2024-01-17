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

        const Frankensolar = '• Worked with PHP code to design WordPress templates for category and post pages.\n• Applied web scraping to pull related product information and images from the company’s external site.\n• Created a custom WordPress plugin to filter posts using custom taxonomy.';
        const Zorbit = '• Developed game behavior that adheres to design specifications.\n• Wrote and maintained client-side code to interface with data-driven websites.\n• Built tools for artists and designers to aid in the development of game content.\n• Collaborated with artists and designers to establish project specifications.\n• Built and executed unit tests for game systems.';
        return (
            <motion.div
                initial='hidden'
                animate='visible'
                className='flex flex-col items-center justify-center page-padding z-40' id='experience'
            >
                <motion.h1
                    variants={slideInFromTop(0.25)}
                    className='text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'
                >
                    My Experience
                </motion.h1>
                <div className='h-full w-full items-center justify-center flex flex-col gap-10 px-10 z-[30] '>
                    <motion.div
                        variants={slideInFromRight(0.5)}
                    >
                        <ExperienceCard
                            title='Contract WordPress Developer'
                            company='Frankensolar Americas Inc.'
                            date='July 2023 – August 2023'
                            location=' Brampton, ON'
                            description={Frankensolar}
                        />
                    </motion.div>
                    <motion.div
                        variants={slideInFromRight(0.5)}
                    >
                        <ExperienceCard
                            title='Game Developer Work Term Student'
                            company='Zorbit’s Math Adventure'
                            date='May 2022 – April 2023'
                            location=' St. John’s, NL'
                            description={Zorbit}
                        />
                    </motion.div>
                </div>
            </motion.div>
        )
    }
}

export default Experience