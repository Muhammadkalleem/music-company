import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div className="relative w-full h-auto md:h-[40rem] bg-black flex items-center justify-center text-white px-4 py-16 md:py-0 overflow-hidden">
      
      {/* Visible Spotlight */}
      <Spotlight
        className="absolute -top-40 left-0 md:-top-20 md:left-60 opacity-40"
        fill="white"
      />

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Master the Art of Music
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Dive into our comprehensive music course and transform your musical journey today.
          Whether you're a beginner or refining your skills, join us to unlock your full potential.
        </p>

        <Link
          href="/courses"
          className='text-white'
          
        >
         
          <Button
        borderRadius="1.75rem"
        className="bg-black  dark:bg-slate-900  text-white border-neutral-200 dark:border-slate-800"
      >
         🎵 Explore Courses
      </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
