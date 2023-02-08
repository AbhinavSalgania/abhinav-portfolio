import React from 'react'
import {motion} from 'framer-motion'

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
        src='https://www.cs.mun.ca/~csclub/assets/elections/fall-2021/candidates/abhinav.jpg'
        alt='Abhinav'
        className=" -mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-96 xl:h-3/5"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
            Here is a {" "} 
            <span className='underline decoration-[cyan]/50 '>little</span> 
            &nbsp; background 
            </h4>
            <p className='text-sm md:text-lg lg:text-lg text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius perferendis quia enim officiis totam, magnam odit dolores. Magni impedit perferendis eaque corporis. Voluptatem reiciendis modi voluptatibus blanditiis dolor nobis esse?
            Ab tenetur repudiandae maxime ut placeat nisi dicta similique consequatur id et repellendus debitis ipsam sed distinctio voluptatum, alias inventore delectus necessitatibus ratione veniam earum. Dignissimos voluptatem quis itaque odio!
            </p>
        </div>

    </motion.div>
  )
}