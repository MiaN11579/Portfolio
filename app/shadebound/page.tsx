"use client"

import { Shadebound } from "@/constants";
import React from "react";
import { slideInFromTop, slideInFromBottom, slideInFromLeft } from '@/utils/motion'
import { motion } from 'framer-motion'
import SkillDataProvider from "@/components/sub/SkillDataProvider";

type Props = {}

export default function genrify({ }: Props) {
  const BOXWIDTH = 120;
  const BOXHEIGHT = 90;

  return (
    <div>
      <div className='flex flex-col relative items-center project-padding z-40'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={slideInFromTop(0.25)}
        >
          <h1 className='text-[30px] md:text-[50px] lg:text-[70px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20 pb-10'>
            Shadebound
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate='visible'
          variants={slideInFromBottom(0.25)}
          className='experience-card flex flex-wrap w-full relative overflow-hidden shadow-lg px-20 py-10 mb-10'
        >
          <p
            className='mt-4 text-gray-400 text-[15px] md:text-[17px] whitespace-pre-wrap'>
            Shadebound is a pixel-style 2D fantasty-action platformer game, where you play as a brave warrior on an excursion to defeat the almighty dragon, the final boss who controls the world...and win!
          </p>
        </motion.div>

        <div className="flex flex-row justify-center flex-wrap items-center">
          {Shadebound.map((image, index) => (
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

        <motion.p
          initial="hidden"
          animate='visible'
          variants={slideInFromLeft(0.75)}
          className='text-white text-1xl md:text-1xl my-8 max-w-[1000px] indent-8'>
          This project contains three levels that players can move through and can revisit the level once completed. Each level offers a unique map, with mobs varying from level to level,
          with the final boss, the dragon, met at the end of the final level. To keep things interesting and challenging yourself, we implemented a difficulty setting,
          for novice players to understand and ease into the game and keep gaming enthusiasts challenged and engaged. Players can create their own challenges as well.
          With the Level Editor, players can customize each level to be as tame or wild as they wish, never leaving a dull moment.
          <br />
          <img src="/shadebound1.png" alt="" />
        </motion.p>

        <motion.p
          initial="hidden"
          animate='visible'
          variants={slideInFromLeft(0.75)}
          className='text-white text-1xl md:text-1xl my-8 max-w-[1000px] indent-8'>
          You as the hero have multiple methods and ways you can complete your journey and defeat the final boss. In your possession are two weapons; a golden sword which you can use
          to directly attack your enemies, facing them in one-on-one combat, or the golden bow, which you can use to attack at a distance, while the ammo lasts. But beware: some enemies
          are sharper than they seem, and will follow you seeking revenge. But you can be faster. Dashing, wall-jumping and double-jumping, you can parkour through each platform and right
          above enemies' shoulders and swiftly take them down.
          <br />
          <img src="/shadebound_gameover.png" alt="" />
        </motion.p>

        <motion.p
          initial="hidden"
          animate='visible'
          variants={slideInFromLeft(0.75)}
          className='text-white text-1xl md:text-1xl my-8 max-w-[1000px] indent-8'>
          Say you take an arrow to the knee, notching down your health and making you one step closer to "Game Over", use the coins you collected throughout the maps to purchase items and
          potions through the Shadebound Shop, and keep them for when you need. You can stock up on health packs and regain your HP, a sprint potion to boost your speed despite the weak
          knees, and plot out your revenge with the full map scroll, which allows you to see where all those who oppose you loiter, even beyond the mini-map of the local area. Once you are
          faced with the mobs, you can use a potion of slowness to make them sluggish to your attacks, or you can leave them confused, blind and unable to attack with the smoke bomb. If
          you feel particularly vengeful, you can fill up on the Quad-Damage potion to bludgeon your enemies to dust. All these tools and potions are locally sourced and conveniently
          available at anytime right at the Shadebound Shop.
        </motion.p>

        <motion.p
          initial="hidden"
          animate='visible'
          variants={slideInFromLeft(0.75)}
          className='text-white text-1xl md:text-1xl my-8 max-w-[1000px] indent-8'>
          Customize and play your way. Be the hero you were meant to be, in Shadebound.
        </motion.p>
      </div>
    </div>
  )
}