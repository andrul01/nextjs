"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "G H Raisoni College Of Arts Commere and Science",
      description:
        "Pursuing a BCA degree with a focus on software development and gaining comprehensive knowledge in programming, problem-solving, and application design.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/ghrce.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "S M Patel Junior College",
      description:
        "Achieved 91.2% in Higher Secondary Education, showcasing strong academic performance and a solid foundation in computer science and related subjects.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/smpatel.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "S T Aadharsh English School ",
      description:
        "Secondary Education | 77.40 % Successfully completed 10th grade with a strong academic record, demonstrating dedication and consistency in studies.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/fnspidy.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
        
      ),
    }
  ];

function WhyJoinUs() {
  return (
    <div className="h-[20rem] border-black">
      <StickyScroll content={content} />
    </div>  
  )
}

export default WhyJoinUs
