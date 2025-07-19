"use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Vocal Coach & Music Theory Specialist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzZVFr7iZANsk7u_DZJgjx1c0AnVnGTU2SQ&s",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Lead Guitar Instructor & Songwriting Mentor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Classical & Jazz Piano Teacher",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Drum & Percussion Technique Expert",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Bass Guitar & Rhythm Specialist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "Opera & Stage Performance Coach",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

function Helpers() {
  return (
    <div className="relative flex justify-center items-center h-[40rem] overflow-hidden">
      <WavyBackground speed='fast' className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Instructor
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Here the professional teacher who will help your musical journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
        </div>

      </WavyBackground>
    </div>
  )
}

export default Helpers
