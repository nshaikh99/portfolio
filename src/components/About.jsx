import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#002756] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-4 px-4'>
                <div className='sm:text-right col-span-1'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div className='col-span-2'>
                    <p>I am passionate about being part of a team that builds extensible and scalable software for customer-facing applications. My interests lie in the realm of data-driven decision-making and predictive analytics.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About