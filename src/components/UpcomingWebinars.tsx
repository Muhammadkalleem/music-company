import React from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {
  return (
    <div className='py-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-center font-semibold tracking-wide uppercase text-white text-4xl' >FEATURED WEBINARS</h2>
                <p className='text-center text-3xl sm:text-4xl text-green-500 mt-10'>Enchance Your Musical Journey </p>

            </div>

        </div>
       
        <div className='mt-10'>
             
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>

        </div>
        <div className='mt-10 text-center'>
   
   <Link href={"/"} className="text-center text-white border border-amber-400 px-4 py-2 rounded hover:bg-amber-400 hover:text-black transition duration-300">
View All Webinars
</Link>



   </div>

    </div>
  )
}

export const projects = [
    {
        title: "Bandcamp",
        description:
          "A platform that allows independent artists and labels to share, stream, and sell their music directly to fans, supporting musicians globally.",
        link: "https://bandcamp.com",
      },
      {
        title: "YouTube Music",
        description:
          "A music streaming service by YouTube offering official tracks, live performances, remixes, and music videos tailored to user preferences.",
        link: "https://music.youtube.com",
      },
      {
        title: "Spotify",
        description:
          "A digital music streaming service that gives users access to millions of songs, podcasts, and artists from around the world.",
        link: "https://spotify.com",
      },
      {
        title: "SoundCloud",
        description:
          "An open music platform that enables artists to upload, promote, and share their music directly with listeners worldwide.",
        link: "https://soundcloud.com",
      },
      {
        title: "Apple Music",
        description:
          "A premium music streaming service from Apple that offers curated playlists, radio stations, and over 100 million songs.",
        link: "https://music.apple.com",
      },
      {
        title: "Ultimate Guitar",
        description:
          "The world’s largest catalog of guitar, bass, and ukulele chords, tabs, and lyrics for musicians of all skill levels.",
        link: "https://www.ultimate-guitar.com",
      }
  ];

export default UpcomingWebinars