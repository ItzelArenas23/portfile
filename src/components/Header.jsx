import React from 'react'
import { Link } from "react-scroll"

const Header = () => {
  return (
    <section name="Header" className='bg-[url("/images/bgheader.jpg")] bg-cover md:min-h-[700px] max-w-screen h-full text-white md:grid md:grid-cols-[1fr_2fr]'> 
        <div className='md:relative'>
            <img className='w-full  md:absolute md:top-1/2 md:-translate-y-1/2 md:w-[130%] md:max-w-none' src="/images/Image2.jpeg" alt="" />
        </div>

        <section className='px-2 py-10 md:grid md:place-content-center md:px-10'>
            <h2 className='text-3xl font-bold md:text-5xl md:relative md:z-20'>Hi, I’m Itzel Arenas</h2>
            <h1 className='text-xl lg:text-2xl font-bold mt-3 md:relative md:z-20'>a Full-Stack Devoloper based in Mexico</h1>
            <p className='text-lg lg:text-xl mt-4 md:mt-10 md:relative md:z-20'>
            interested in the use of new technologies applied to projects that contribute to improv the quality of life of people and their communities
            </p>
        </section>
              
    </section>
    
    
  )
}

export default Header