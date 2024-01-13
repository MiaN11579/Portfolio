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
        return (
            <motion.div
                initial='hidden'
                animate='visible'
                className='flex flex-col items-center justify-center page-padding z-40' id='experience'
            >
                <motion.h1
                    variants={slideInFromTop(0.25)}
                    className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'
                >
                    My Experience
                </motion.h1>
                <div className='h-full w-full items-center justify-center flex flex-col md:flex-row gap-10 px-10 z-[30] '>
                    <motion.div
                        variants={slideInFromRight(0.5)}
                    >
                        <ExperienceCard
                            title='Software Developer Intern'
                            description='Developed a web application for the company’s internal use using React, TypeScript, and Material UI.'
                        />
                    </motion.div>
                </div>
            </motion.div>
        )
    }
}

export default Experience