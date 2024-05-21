import React from 'react'
import {HiArrowNarrowRight, HiDocumentDownload} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Resume from '../assets/Resume - Nabeel Shaikh.pdf'
import FadeIn from 'react-fade-in/lib/FadeIn'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#002756]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <FadeIn>
              <p className='text-pink-600'>Hi, my name is</p>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nabeel Shaikh</h1>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a recent CS graduate from UCLA.</h2>
              <p className='text-[#8892b0] py-4 max-w-[700px]'>Welcome to my personal website. This is where I like to showcase the latest projects that I've been working on.</p>
              <div className='flex flex-col sm:flex-row gap-4'>
                  <a href={Resume} target='_blank'><button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Download my resume<span><HiDocumentDownload className='ml-3' /></span></button></a>
                  <Link to='projects' smooth={true} duration={500}><button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>See my projects<span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></button></Link>
              </div>
            </FadeIn>
        </div>
    </div>
  )
}

export default Home
