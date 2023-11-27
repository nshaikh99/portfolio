import React from 'react'
import WebServer from '../assets/web-server.jpg'
import EarthLights from '../assets/earth-lights.jpg'
import Ekg from '../assets/ekg.jpg'
import ChartData from '../assets/chart-data.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#002756] pt-[80px] md:pt-0'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-4'>// These are some of the cooler things that I've worked on.</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 gap-4 py-8'>
                {/* grid item */}
                <div style={{backgroundImage: `url(${WebServer})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-xl md:text-2xl font-bold text-white tracking-wider'>
                            Bingsoo
                        </span>
                        <p className='text-sm md:text-base px-4 pt-4'>A configurable multi-threaded web server with support for echoing HTTP requests, serving static content, handling CRUD API requests, and rendering HTML from Markdown</p>
                        <div className='pt-4'>
                            <a href="https://github.com/nshaikh99/bingsoo" target='_blank'>
                                <button className='text-sm md:text-base text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}
                <div style={{backgroundImage: `url(${EarthLights})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-xl md:text-2xl font-bold text-white tracking-wider'>
                            Project Theia
                        </span>
                        <p className='text-sm md:text-base px-4 pt-4'>A full stack web application that can take snapshots of websites from different geographic locations</p>
                        <div className='pt-4'>
                            <a href="https://github.com/noah8368/Project_Theia" target='_blank'>
                                <button className='text-sm md:text-base text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}
                <div style={{backgroundImage: `url(${Ekg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-xl md:text-2xl font-bold text-white tracking-wider'>
                            Heart Disease Binary Classification
                        </span>
                        <p className='text-sm md:text-base px-4 pt-4'>A series of models that predict whether a patient will suffer from heart disease with up to 85% accuracy based on age, sex, lab results, and history of disease</p>
                        <div className='pt-4'>
                            <a href="https://github.com/nshaikh99/heartdiseasebinaryclassification" target='_blank'>
                                <button className='text-sm md:text-base text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects