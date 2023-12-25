import React from 'react'

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description } : Props) => {
  return (
    <div className='project-card relative overflow-hidden shadow-lg border border-[#2A0E61]'>
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
    </div>
  )
}

export default ProjectCard