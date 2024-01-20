"use client"

import {
  Language,
  Database,
  Framework,
  Frontend_skill,
  Game_engine,
  Tool,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import { slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'

const Skills = () => {
  const BOXWIDTH = 120;
  const BOXHEIGHT = 120;
  
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-40"
      style={{ transform: "scale(0.9)" }}
    >
      <motion.div
        initial='hidden'
        animate='visible'
        variants={slideInFromTop(0.25)}
      >
        <h1 className='text-[30px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
          My Skills
        </h1>
      </motion.div>

      <h1 className='text-[20px] md:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6'>
        Programming Languages
      </h1>
      <div className="flex flex-row justify-center flex-wrap gap-5 md:gap-10 items-center">
        {Language.map((image, index) => (
          <SkillDataProvider
            key={index}
            name={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            boxWidth={BOXWIDTH}
            boxHeight={BOXHEIGHT}
          />
        ))}
      </div>
      <h1 className='text-[20px] md:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6'>
        Web Development
      </h1>
      <div className="flex flex-row justify-center flex-wrap gap-5 md:gap-10 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            name={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            boxWidth={BOXWIDTH}
            boxHeight={BOXHEIGHT}
          />
        ))}
      </div>
      <h1 className='text-[20px] md:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6'>
        Frameworks
      </h1>
      <div className="flex flex-row justify-center flex-wrap gap-5 md:gap-10 items-center">
        {Framework.map((image, index) => (
          <SkillDataProvider
            key={index}
            name={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            boxWidth={BOXWIDTH}
            boxHeight={BOXHEIGHT}
          />
        ))}
      </div>
      <h1 className='text-[20px] md:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6'>
        Databases
      </h1>
      <div className="flex flex-row justify-center flex-wrap gap-5 md:gap-10 items-center">
        {Database.map((image, index) => (
          <SkillDataProvider
            key={index}
            name={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            boxWidth={BOXWIDTH}
            boxHeight={BOXHEIGHT}
          />
        ))}
      </div>
      <h1 className='text-[20px] md:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6'>
        Game Engines
      </h1>
      <div className="flex flex-row justify-center flex-wrap gap-5 md:gap-10 items-center">
        {Game_engine.map((image, index) => (
          <SkillDataProvider
            key={index}
            name={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            boxWidth={BOXWIDTH}
            boxHeight={BOXHEIGHT}
          />
        ))}
      </div>
      <h1 className='text-[20px] md:text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
        Developer Tools
      </h1>
      <div className="flex flex-row justify-center flex-wrap gap-5 md:gap-10 items-center">
        {Tool.map((image, index) => (
          <SkillDataProvider
            key={index}
            name={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            boxWidth={BOXWIDTH}
            boxHeight={BOXHEIGHT}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;