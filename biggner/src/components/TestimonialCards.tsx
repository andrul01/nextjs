"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialCardsData = [

    {
      "quote": "Cloud gaming eliminates hardware limitations and opens up a new era of gaming accessibility.",
      "name": "Cloud Gaming",
      "title": "Cloud Gaming: The Future of Gaming?"
    },
    {
      "quote": "Artificial Intelligence is shaping the way we interact with technology, making it smarter and more intuitive.",
      "name": "AI in Tech",
      "title": "AI in Tech: Revolutionizing Our Future"
    },
    {
      "quote": "From action-packed adventures to deep storytelling, PlayStation has redefined gaming experiences.",
      "name": "PlayStation Games",
      "title": "Top 10 PlayStation Games You Must Play"
    }
      
]

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white  flex flex-col items-center justify-center space-y-4 overflow-hidden">
      <h1 className="text-center">Revolutionizing the Future: Gaming, AI, and More</h1>
      <div className="flex justify-center w-full overflow-hidden">
      <InfiniteMovingCards
        items={TestimonialCardsData}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
  )
}

export default TestimonialCards
