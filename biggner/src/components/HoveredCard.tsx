"use client"

import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

const projects =[
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
]

function HoveredCard() {
  return (
    <div className="p-20 flex flex-col items-center">
      <div className="mx-auto text-3xl">
        <h2>Hovered Section</h2>
      </div>
      <div className="px-40">
        <HoverEffect items={projects}/>
      </div>
      <div className="">
        <Button>
          Read More
        </Button>
      </div>
    </div>
  )
}

export default HoveredCard


