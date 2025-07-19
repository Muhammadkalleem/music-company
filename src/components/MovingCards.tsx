"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";



const MovingCards= ()=> {
  return (
    
        <div 
        
     className="relative h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 py-10"
       
   >
          
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎶 Hear Our Harmony: Voice of Success
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              Our students share their real stories of transformation through music. From mastering their first instrument to performing live, see how IntelliMall's music courses helped shape their creative journey.
            </p>
          </div>
    
          {/* Moving Testimonials */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
    )
}

const testimonials = [
    {
      quote:
        "Thanks to IntelliMall, I learned guitar from scratch and now perform confidently on stage. It changed my life!",
      name: "Ayaan Malik",
      title: "Beginner Guitar Student",
    },
    {
      quote:
        "I never thought online piano lessons could feel so personal and effective. The instructors are top-notch.",
      name: "Hira Khan",
      title: "Piano Essentials Graduate",
    },
    {
      quote:
        "As a producer, the FL Studio course helped me refine my beats and take my sound to the next level.",
      name: "Zeeshan Ali",
      title: "Music Production Learner",
    },
    {
      quote:
        "The vocal training bootcamp helped me increase my vocal range and confidence in live performances.",
      name: "Mehwish Fatima",
      title: "Vocal Student",
    },
    {
      quote:
        "IntelliMall is the best online platform for music lovers. The flexibility, support, and depth of content are unmatched.",
      name: "Usman Rauf",
      title: "Advanced Theory Student",
    },
  ];
  export default MovingCards;