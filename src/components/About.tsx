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
        className=" -mb-24 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-96 xl:h-3/5"
        />

        <div className='space-y-2 md:space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl md:text-3xl font-semibold'>
            Here is a {" "} 
            <span className='underline decoration-[cyan]/50 '>little</span> 
            &nbsp;background 
            </h4>
            <p className='text-sm md:text-base lg:text-lg text-justify'>
            Hi, I am a Computer Science undergraduate student at Memorial University of Newfoundland.
            I am competitive and I am constantly seeking to improve and challenge myself. 
            I have a passion for understanding the bigger picture, analyzing data and creating visually appealing solutions. 
            This drives my interest in the fields of data science and web development, where I can combine my skills and utilize my creativity to bring data to life and create impactful experiences for users.
            I am also dedicated to my health and fitness and take pride in my consistency and hard work at the gym.
            I am currently participating in a co-op program, and I am eager to further my professional development through an internship starting in May 2023.
            </p>
        </div>

    </motion.div>
  )
}