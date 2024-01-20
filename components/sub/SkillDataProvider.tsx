"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    name: string;
    width: number;
    height: number;
    index: number;
    boxWidth: number;
    boxHeight: number;
}

const SkillDataProvider = ({ src, name, width, height, index, boxWidth, boxHeight }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.2
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className='flex justify-between w-auto h-full'
        >
            <div className='flex flex-col items-center justify-between' style={{ width: boxWidth, height: boxHeight }}>

                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt='skill image'
                />
                <p className='text-gray-200 font-semibold'>{name}</p>
            </div>
        </motion.div>
    )
}

export default SkillDataProvider