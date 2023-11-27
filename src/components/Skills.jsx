import React from 'react'
import Python from '../assets/python.svg'
import JS from '../assets/javascript.svg'
import CPP from '../assets/cpp.svg'
import NodeJS from '../assets/nodejs.svg'
import ExpressJS from '../assets/express.svg'
import ReactJS from '../assets/react.svg'
import TailwindCSS from '../assets/tailwind.svg'
import SKLearn from '../assets/sklearn.svg'
import Git from '../assets/git.svg'
import Resume from '../assets/Resume - Nabeel Shaikh.pdf'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#002756] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are my favorite technologies to work with. For a comprehensive list of skills, please see my <a className='text-blue-500 hover:underline' href={Resume} target='_blank'>resume</a>.</p>
            </div>
            
            <div className='w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='Python icon' />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt='JavaScript icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NodeJS} alt='Node.js icon' />
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ExpressJS} alt='Express.js icon' />
                    <p className='my-4'>Express</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactJS} alt='React.js icon' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TailwindCSS} alt='Tailwind CSS icon' />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CPP} alt='C++ icon' />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-6' src={SKLearn} alt='sklearn icon' />
                    <p className='my-4'>scikit-learn</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt='Git icon' />
                    <p className='my-4'>Git</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills