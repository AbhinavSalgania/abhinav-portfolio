import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import abhinav from '../assets/abhicoat.jpg'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, I am Abhinav Salgania', 
            'I am resilient, hardworking and a quick learner', 
            'I drink coffee and code ',
            'I eat Butter Chicken and go to the gym',
        ],
        loop: true,
        delaySpeed: 2000,
    })
    
  return (
  <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
    <BackgroundCircles />
    <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src = {abhinav.src}
        alt="abhinav"
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >Data Analyst</h2>
        <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
            <span> {text} </span>
            <Cursor cursorColor='cyan' /> 
        </h1>

        <div className='pt-5'>
            <Link href='#about'>
            <button className='hereButton'>About</button>
            </Link>
            <Link href='#skills'>
            <button className='hereButton'>Skills</button>
            </Link>
            <Link href='#projects'>
            <button className='hereButton'>Projects</button>
            </Link>
            <Link 
            href="/AbhinavSalgania.pdf"
            locale={false}
            target="_blank"
            rel = "noopener noreferrer"
            >
            <button className='hereButton'>CV</button>
            </Link>

            
        </div>

      </div>
  </div>
    );
}
