import React from 'react'

function Footer() {
  return (
    
    
    <footer className='bg-black text-gray-500 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4
        sm:px-6 lg:px-8'>
            <div>
                 <h2 className='text-white '>🎵 About Us </h2>
                 <p>Welcome to our Art website, where passion meets rhythm. We are a community of music lovers,
                     dedicated to helping learners and artists connect, grow, and thrive. From expert-led tutorials 
                     and curated playlists to live performance tips and gear guides — we provide everything 
                     you need to elevate your musical journey.Whether you're a beginner or a seasoned musician, your stage starts here. </p>

            </div>
            <div className='ml-8'>
                <h2 className='text-white'>Quick Links</h2>
                <li>Home</li>
                <li>About-Us</li>
                <li>Course</li>
                <li>Contact</li>

            </div>
            <div>
                <h2 className='text-white'>Follow Us</h2>
                <p>Facebook  Twitter  Instagram</p>

            </div>
            <div>
                 <h2 className='text-white'>Contact Us</h2>
                 <p>College road jauharabad <br/> phone number: +92321-23324312 <br /> Email:Art333@gmail.com </p>

            </div>

        </div>

    </footer>
    
  )
}

export default Footer