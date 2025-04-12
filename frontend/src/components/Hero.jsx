import React from 'react'
import blog from "../assets/blog1.svg"
const Hero = () => {
    return (
        <div className='mt-8 flex flex-col gap-8 items-center md:items-start md:mx-8 pb-10'>
         <div className='flex-col flex items-center gap-8 md:flex-row'>
         <h1 className='text-white text-4xl md:text-5xl motion-rotate-in-45 motion-ease-spring-bounce lg:text-6xl motion-preset-fade xl:text-7xl 2xl:text-8xl max-md:text-center font-bold animate-slide-right'>Stay Informed With Latest Updates And Trends..</h1>
         <img src={blog} alt="" className='size-90 lg:size-110 xl:size-130 2xl:size-160 animate-slide-left'/>
         </div>
         <form className='flex gap-4 lg:w-screen'>
            <input type="text" placeholder='Enter your email to subcribe' className='p-4 bg-white/10 backdrop-blur-3xl lg:w-[40%] text-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-sky-300'/>
            <button className='px-4 py-2 bg-white rounded-lg font-medium'>Subscribe!</button>
         </form>
        </div>
    )
}

export default Hero
