import React from 'react'
import { motion } from 'framer-motion'
import cryptoImg from '../assets/crypto.jpg'
import netflixImg from '../assets/netflix.jpg'
import portfolioImg from '../assets/portfolio.jpg'
import weatherImg from '../assets/weather.jpg'
import tttImg from '../assets/ttt.jpg'
import calculator from '../assets/calculator.jpg'
import rps from '../assets/rps.jpg'
import eas from '../assets/eas.jpg'

type Props = {}

function Projects({}: Props) {
    const projects = [
        {
          title: 'Portfolio Website',
          image: portfolioImg.src,
          description: 'A dynamic portfolio website built with React and TypeScript.',
          link: 'https://abhinav-portfolio-qjae.vercel.app/#projects',
          newpage: false
        },
        {
          title: 'Weather Website',
          image: weatherImg.src,
          description: 'A weather website that displays current weather and time for any city.',
          link: 'https://weather-f6be5.web.app/',
          newpage: true
        },
        {
          title: 'Smart Tic Tac Toe',
          image: tttImg.src,
          description: 'A Tic Tac Toe game with an unbeatable AI.',
          link: 'https://abhinavsalgania.github.io/Smart-tictactoe/',
          newpage: true
        },
        {
          title: 'Data Science Project',
          image: cryptoImg.src,
          description: 'A project that uses machine learning to analyze and predict trends in a dataset.',
          newpage: true
        },
        {
          title: 'KingDomino',
          image: netflixImg.src,
          description: 'A digital version of the board game KingDomino.',
          newpage: true
        },
        {
          title: 'Calculator',
          image: calculator.src,
          description: 'A simple calculator built with JavaScript.',
          link: 'https://abhinavsalgania.github.io/Calculator/',
          newpage: true
        },
        {
          title: 'Rock Paper Scissors',
          image: rps.src,
          description: 'A simple Rock Paper Scissors game built with JavaScript.',
          link:'https://abhinavsalgania.github.io/Rock_Paper_Scissors/',
          newpage: true
        },
        {
          title: 'Etch-a-Sketch',
          image: eas.src,
          description: 'A simple Etch-a-Sketch game built with JavaScript.',
          link: 'https://abhinavsalgania.github.io/Etch_a_Sketch/',
          newpage: true
        }
    ]

  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1.5 }} 
    whileInView={{ opacity: 1 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[cyan]/80'>
            {projects.map((project, i) => (
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen'>
                    <motion.img
                    initial={{
                        y:-300,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once: true}}
                    className=" h-48 xl:h-80 md:h-60 object-contain"
                    src = {project.image}
                    alt='project'
                    />

                    <div className='pace-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-lg md:text-2xl lg:text-3xl font-semibold text-center'>
                            <span className="underline decoration-[cyan]/50">
                                Project {i + 1}:
                                </span> {''}
                            {
                            project.link ? 
                            <a href={project.link} className=' hover:text-cyan-300' target={project.newpage ? "_blank" : "_self"} rel="noopener noreferrer"> {project.title} ↗ 
                            </a> : project.title}
                        </h4>

                        <p className='text-base md:text-md lg:text-lg text-justify'>
                            {project.description}
                        </p>

                    </div>
                </div>
            ))}
        </div>


        <div className='w-full absolute top-[20%] md:top-[30%] bg-[cyan]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects

