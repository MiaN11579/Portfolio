"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideInFromBottom } from '@/utils/motion'

interface Props {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

const ExperienceCard = ({ title, company, location, date, description }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottom(0.25)}
    >
    <div className='experience-card relative overflow-hidden shadow-lg px-10 py-10'>
      <div className='flex justify-between items-center '>
        <div>
          <h2 className='text-gray-200 text-xl font-semibold'>{title}</h2>
          <p className='text-gray-200 italic'>{company}</p>
        </div>
        <div>
          <p className='text-gray-200 text-right'>{date}</p>
          <p className='text-gray-200 text-right italic'>{location}</p>
        </div>
      </div>
      <p className='mt-4 text-gray-400 whitespace-pre-wrap'>{description}</p>
    </div>
    </motion.div>
  )
}

export default ExperienceCard