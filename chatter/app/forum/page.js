
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


const techstack = [
  { 
    name: "React.js",
    description:"React is a JavaScript-based UI development library.",
    image: "/react.png"
  },
  { 
    name: "Node.js", 
    description:"Node.js is an open-source JavaScript runtime environment that allows developers to run JavaScript code on the server side",
    image: "/nodejs.webp"
  },
  { 
    name: "PHP", 
    description:"PHP (Hypertext Preprocessor) is a scripting language and interpreter that's used to build web applications and websites",
    image: "/php.png"
  },
  { 
    name: "Python", 
    description:"Python is a general-purpose programming language that is used to build software and websites, analyze data, and automate tasks.",
    image: "/python.png"
  },
  { 
    name: "AI & ML", 
    description:"Artificial intelligence (AI) and machine learning (ML) are technologies that enable computers to learn and perform tasks that mimic human intelligence.",
    image: "/aiml.png"
  },
];
const Forum = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-20 ">
      {techstack.map((tech) => (
        <div key={tech.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Image 
            className='rounded-lg shadow-lg border-2 '
            src={tech.image} 
            alt={tech.name} 
            width={500}
            height={100}
          />
          <h3 className="text-2xl text-black font-bold mb-2">{tech.name}</h3>
          <p className="text-black-600 mb-4">{tech.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
          <Button variant="outline">Button</Button>

        </div>
      ))}
    </div>
  )
}

export default Forum