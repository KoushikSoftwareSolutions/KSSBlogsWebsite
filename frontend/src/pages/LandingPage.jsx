import React from 'react'
import Hero from '../components/Hero'
import Details from './Details'
import NavBar from '../components/Navbar'

export default function LandingPage() {
  return (
    <div className="relative w-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950 via-sky-950 to-sky-950 blur-xl" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl" />
      <div className="relative pt-20">
      <NavBar />
      <Hero />
      <div className='bg-white'>
      <Details />
      </div>
      </div>
    </div>
  )
}
