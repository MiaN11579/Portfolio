"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideInFromBottom } from '@/utils/motion'

interface Props {
  src: string;
  title: string;
  description: string;
  github: string;
  link: string;
  readmore: string;
}

const ProjectCard = ({ src, title, description, github, link, readmore }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottom(0.25)}
    >
      <div className={`project-card ${isHovered ? 'hovered' : ''}  relative overflow-hidden shadow-lg`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='img-container'>
          <Image
            src={src}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%'}}
          />
          {isHovered && (
            <div className='overlay'>
              <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex items-center justify-center w-full h-auto px-[200px]'>
                  {github && (
                    <a href={github} target="_blank">
                      <i className="fa-brands fa-square-github"></i>
                    </a>
                  )}
                  {link && (
                    <a href={link} target="_blank">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
                <div className='read-more-button px-[20px] py-[10px]'>
                  <a href={readmore} className='cursor-pointer'>Read more</a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='p-4'>
          <h1 className='text-1xl md:text-2xl lg:text-4xl font-semibold text-white'>{title}</h1>
          <p className='lg:text-2xl pt-2 text-gray-300'>{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard