"use client"

import React from 'react'

interface Props {
  title: string;
  description: string;
}

const ExperienceCard = ({ title, description }: Props) => {
  return (
    <div className='experience-card relative overflow-hidden shadow-lg'>
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='pt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard