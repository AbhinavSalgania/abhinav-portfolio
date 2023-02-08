import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean,
    icon: string
}

function Skill({ directionLeft, icon}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
    <motion.img
    initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
    }}
    transition={{ duration: 1 }}
    whileInView={{ x: 1, opacity: 1 }}
    src= {icon}
    className='w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
    />
    </div>
  )
}

export default Skill