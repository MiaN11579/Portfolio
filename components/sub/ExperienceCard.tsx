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
      className='experience-card flex flex-wrap w-full relative overflow-hidden shadow-lg px-10 py-10'
    >
      <div className='flex w-full justify-between items-center '>
        <div>
          <h2 className='text-gray-200 text-l md:text-xl lg:text-2xl font-semibold'>{title}</h2>
          <p className='text-gray-200 text-[15px] md:text-[18px] lg:text-[22px] italic'>{company}</p>
        </div>
        <div>
          <p className='text-gray-200 text-[15px] md:text-[18px] lg:text-[22px] text-right'>{date}</p>
          <p className='text-gray-200 text-[15px] md:text-[18px] lg:text-[22px] text-right italic'>{location}</p>
        </div>
      </div>
      <p className='mt-4 text-gray-400 text-[15px] md:text-[18px] lg:text-[22px] whitespace-pre-wrap'>{description}</p>
    </motion.div>
  )
}

export default ExperienceCard