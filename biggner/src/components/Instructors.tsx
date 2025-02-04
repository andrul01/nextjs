import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: "Dr. John Smith",
        designation: "Professor of Computer Science",
        image: "/fnspidy.png"
    },
    {
        id: 2,
        name: "Ms. Emily Johnson",
        designation: "Senior Lecturer in AI",
        image: "/fnspidy.png"
    },
    {
        id: 3,
        name: "Mr. David Brown",
        designation: "Assistant Professor in Web Development",
        image: "/fnspidy.png"
    },
    {
        id: 4,
        name: "Dr. Sarah Lee",
        designation: "Data Science Specialist",
       image: "/fnspidy.png"
    }
];

console.log(instructors);

function Instructors() {
  return (
    <div className='relative h-[40rem] justify-center items-center flex overflow-hidden' >
        <WavyBackground>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-7xl'>Meet Our Instructors</h2>
            <div className='flex flex-row justify-center items-center p-10 mt-10'>
                <AnimatedTooltip items={instructors}></AnimatedTooltip>
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors
