"use client"

import { Genrify } from "@/constants";
import React from "react";
import { slideInFromTop, slideInFromBottom } from '@/utils/motion'
import { motion } from 'framer-motion'
import SkillDataProvider from "@/components/sub/SkillDataProvider";

type Props = {}

export default function genrify({ }: Props) {
  const BOXWIDTH = 100;
  const BOXHEIGHT = 90;
  
  return (
    <div>
      <div className='flex flex-col relative items-center justify-center page-padding z-40'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={slideInFromTop(0.25)}
        >
          <h1 className='text-[30px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20 pb-10'>
            Genrify
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate='visible'
          variants={slideInFromBottom(0.25)}
          className='experience-card flex flex-wrap w-full relative overflow-hidden shadow-lg px-10 py-10 mb-20'
        >
          <p
            className='mt-4 text-gray-400 text-[15px] md:text-[17px] whitespace-pre-wrap'>
            Spotify random playlist generator based on genres and sub-genres of music. Made with MongoDB, Node.js, Bootstrap, and Spotify API.
          </p>
        </motion.div>

        <div className="flex flex-row justify-center flex-wrap items-center mb-20">
          {Genrify.map((image, index) => (
            <SkillDataProvider
              key={index}
              name={image.skill_name}
              src={image.Image}
              width={image.width / 1.5}
              height={image.height / 1.5}
              index={index}
              boxWidth={BOXWIDTH}
              boxHeight={BOXHEIGHT}
            />
          ))}
        </div>
      </div>
    </div>
  )
}