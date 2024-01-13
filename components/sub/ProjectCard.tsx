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

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className={`project-card ${isHovered ? 'hovered' : ''}  relative overflow-hidden shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full object-contain'
        />
        {isHovered && (
          <div className='overlay'>
            <div className='flex flex-col items-center justify-between w-full h-full py-[90px]'>
              <div className='flex items-center justify-between w-full h-auto px-[200px]'>
                <a href={href} target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href={href} target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
              <a href={href} target="_blank">
                <div className='read-more-button px-[20px] py-[10px]'>
                  <a href="#about-me" className='cursor-pointer'>Read more</a>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='pt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard