import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
        <h1>Hello I'm Anushka</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo unde non maxime commodi eveniet soluta! Enim assumenda nam nostrum quidem, necessitatibus iure harum quisquam quam, porro culpa non! Autem.</p>
        <Image
              src="/image0_0.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
    </section>
  )
}

export default Hero
