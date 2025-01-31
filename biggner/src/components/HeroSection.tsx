'use client'
import Link from 'next/link'
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='mt-4 text-center'>
        <h1 className='mt-28 md:mt-0 text-4xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>Hello Developers</h1>
        <p className='mt-4 md:text-lg max-w-lg mx-auto font-mono'>
          Welcome to the ever-evolving world of development! Whether you're crafting sleek UIs, optimizing backend logic, or fine-tuning SEO strategies, every line of code you write shapes the future of the web. Keep experimenting.
        </p>

        <div className='mt-4'>
          <Link href={'/'}>
            <Button
              borderRadius='1.75rem'
              className='bg-white md:bg-black text-black md:text-white'
            >Explore now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
