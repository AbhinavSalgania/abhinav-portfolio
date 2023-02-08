import { motion} from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mxlauto items-center'>
    <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Skills
    </h3>

    <div className='grid grid-cols-4 gap-5'>
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    <Skill />
    </div>
    
    </motion.div>
  )
}

export default Skills