"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

const ProjectCard = ({ src, title, description, href, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: {  y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5
      },
    }
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
    >
      <div className='project-card relative overflow-hidden shadow-lg border border-[#2A0E61]'>
        <a href={href} target="_blank">
          <img
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className='w-full object-contain'
          />

          <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='pt-2 text-gray-300'>{description}</p>
          </div>
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard