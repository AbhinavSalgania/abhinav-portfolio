import React from 'react'
import {motion} from 'framer-motion'
import abhinav from '../assets/abhinav.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        viewport={{
            once: true,
        }}
        src = {abhinav.src}
        alt='Abhinav'
        className=" -mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-96 xl:h-3/5"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
            Here is a {" "} 
            <span className='underline decoration-[cyan]/50 '>little</span> 
            &nbsp;background 
            </h4>
            <p className='text-sm md:text-lg lg:text-lg text-justify'>
            Hi, I am a Computer Science undergraduate student at Memorial University of Newfoundland.
            I am competitive and I like to challenge myself to keep improving. Through school and personal projects,
            I have gained experience in developing responsive web applications and analysing large amounts of data.
            I am also passionate about health and fitness and am very proud of my hard work and consistency in the gym.
            I am currently in a co-op program and I am looking for an internship beginning in May 2023.
            </p>
        </div>

    </motion.div>
  )
}