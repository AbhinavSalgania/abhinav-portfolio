import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[cyan]/80'>
      <Head>
        <title>Abhinav Salgania Portfolio</title>
      </Head>

      <Header />

      {/*Hero*/}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/*About*/}
      <section id="about" className='snap-center'>
        <About />
      </section>
  
      {/*Projects*/}
      <section id="projects" className='snap-start'>
       <Projects />
      </section>
      
      {/*Skills*/}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/*Contact*/}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

    <Link href='#hero'>
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
      <HomeIcon className='text-[cyan] h-7 w-7 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'/>
      </div>
    </footer>
    </Link>

    </div>
  )
}
