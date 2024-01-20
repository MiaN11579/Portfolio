"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Avatar from '../main/Avatar';

export const HeroContent = () => {
    const handleButtonClick = () => {
        window.open('resume.pdf', '_blank');
    };

    return (
        <div>
            <motion.div
                initial='hidden'
                animate='visible'
                className='relative flex flex-col md:flex-row items-center justify-center page-padding mt-40 mb-20 w-full z-40'>
                <div className='h-full w-full flex flex-col gap-6 justify-center m-auto text-start'>
                    <motion.div
                        variants={slideInFromTop(0.25)}
                        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
                    >
                        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                        <h1 className='Welcome-text text-[13px]'>My Portfolio</h1>
                    </motion.div>

                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className='flex flex-col gap-6 mt-6 text-4xl md:text-7xl font-bold text-white max-w-[1000px] w-auto h-auto'>
                        <span>
                            Hello! My name is
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Mia</span>
                            .
                        </span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.75)}
                        className='text lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  text-1xl md:text-4xl my-8 max-w-[1000px]'>
                        A <span className='text-white'>Software Developer</span> who loves to solve <span className='text-white'>challenging problems</span> and work on <span className='text-white'>fun projects</span>.
                    </motion.p>

                    <motion.a
                        variants={slideInFromLeft(1)}
                        className='flex justify-center md:justify-between'>
                        <button
                            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 px-6 mb-10 rounded-xl text-[20px]"
                            onClick={handleButtonClick}>
                            {'Resume'}
                        </button>
                    </motion.a>
                </div>

                <motion.div
                    variants={slideInFromRight(1.25)}
                    className='w-full h-full flex justify-center items-center'>
                    <Avatar src='/avatar.jpg' alt='work icons' size={450} />
                </motion.div>
            </motion.div>


            <motion.div
                initial='hidden'
                animate='visible'
                variants={slideInFromTop(1.5)}
                className='flex flex-col items-center justify-center py-20 px-20'>
                <i style={{ animation: 'fadeAnimation 2s infinite 0.5s' }} className="fa-solid fa-chevron-down mb-2"></i>
                <i style={{ animation: 'fadeAnimation 2s infinite 1s' }} className="fa-solid fa-chevron-down mb-2"></i>
                <i style={{ animation: 'fadeAnimation 2s infinite 1.5s' }} className="fa-solid fa-chevron-down mb-2"></i>
            </motion.div>
        </div>

    )
}

