import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale:0.5
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {  /* Social Icons */ }
            <SocialIcon 
            url="https://github.com/AbhinavSalgania" 
            target='_blank' 
            rel = 'noopener noreferrer'
            fgColor= 'gray'
            bgColor='transparent' 
            />

            <SocialIcon 
            url="https://www.linkedin.com/in/abhinavsalgania/"
            target='_blank' 
            rel = 'noopener noreferrer' 
            fgColor='gray'
            bgColor='transparent' 
            />

            <SocialIcon
            url="https://www.instagram.com/abhinav_salgania/"
            target='_blank' 
            rel = 'noopener noreferrer'
            fgColor='gray'
            bgColor='transparent'
            />

            <SocialIcon
            url="https://twitter.com/abhinavsalgania"
            target='_blank' 
            rel = 'noopener noreferrer'
            fgColor='gray'
            bgColor='transparent'
            />
        </motion.div>

        
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale:0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{ 
                duration:1.5 
            }}
            className='flex flex-row items-center text-gray-300'>
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400"> 
                Get in touch
                </p>
            </motion.div>
        
    </header>
  )
}

export default Header