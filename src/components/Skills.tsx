import { motion} from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mxlauto items-center'>
    <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Skills
    </h3>

    <div className='grid grid-cols-4 gap-4 md:gap-5'>

      <Skill directionLeft={true} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'  />
      <Skill directionLeft={true} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'  />
      <Skill directionLeft={true} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'  />
      <Skill directionLeft={true} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'  />
      <Skill directionLeft={true} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'  />
      <Skill directionLeft={true} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'  />
      <Skill directionLeft={true} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'  />
      <Skill directionLeft={true} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'  />
      <Skill directionLeft={false} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'  />
      <Skill directionLeft={false} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'  />
      <Skill directionLeft={false} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'  />
      <Skill directionLeft={false} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'  />
      <Skill directionLeft={false} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'  />
      <Skill directionLeft={false} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'  />
      <Skill directionLeft={false} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg'  />
      <Skill directionLeft={false} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg'  />
      
    </div>
    
    </motion.div>
  )
}

export default Skills