"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Avatar from '../main/Avatar';

export const HeroContent = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center page-padding mt-40 w-full z-[40]'>
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
                    className='flex flex-col gap-6 mt-6 text-8xl font-bold text-white max-w-[1000px] w-auto h-auto'>
                    <span>
                    Hello, I'm
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Mia</span>
                    . 
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.75)}
                    className='text lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl my-8 max-w-[1000px]'>
                    A <span className='text-white'>Software Developer</span> who loves to solve <span className='text-white'>challenging problems</span> and work on <span className='text-white'>fun projects</span>.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                    Contact me!
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(1.25)}
                className='w-full h-full flex justify-center items-center'>
                    <Avatar src='/avatar.jpg' alt='work icons' size={450} />
            </motion.div>
        </motion.div>
    )
}

