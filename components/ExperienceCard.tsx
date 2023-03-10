import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer 
    transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://carrierwave.fuzu.com/employers/medium_b3217a79-6dba-4870-8cf8-b21964bd9553.png'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light '>INTERN</h4>
            <p className='font-bold text-2xl mt-1'>UJUZI FURSA</p>
            <div className='flex space-x-2 my-2'>
                <img
                    className='h-10 w-10 rounded-full' 
                    src="https://download.logo.wine/logo/Microsoft_Access/Microsoft_Access-Logo.wine.png" alt="" 
                />

                <img
                    className='h-10 w-10 rounded-full' 
                    src="https://download.logo.wine/logo/Microsoft_Access/Microsoft_Access-Logo.wine.png" alt="" 
                />

                <img
                    className='h-10 w-10 rounded-full' 
                    src="https://download.logo.wine/logo/Microsoft_Access/Microsoft_Access-Logo.wine.png" alt="" 
                />
                
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work...-Ended...</p>
            
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard