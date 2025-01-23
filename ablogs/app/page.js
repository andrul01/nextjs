import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-5 space-y-4">
      <div className="lg:flex lg:flex-row mt-4 space-y-3">
          <Image 
            className="border rounded-lg"
            src="/spidy2.jpg"
            width={500}
            height={500}
          />
        <div className="mt-4 md:mx-4">
          <h1 className="font-bold py-3 ">Gaming Blogs</h1>
          <p>Welcome to our Gaming Blog, your ultimate destination for the latest gaming news, reviews, and in-depth discussions. Whether you're a casual gamer or a hardcore enthusiast, we cover everything from trending titles, game releases, industry updates, tips & tricks, and insightful analysis of the gaming world. Stay ahead with our expert reviews, gaming guides, and exclusive content tailored for every type of gamer. Join us as we explore the ever-evolving universe of gaming 🎮🔥</p>
        </div>
      </div>
      <div className="lg:flex lg:flex-row mt-4 space-y-3">
        <Image 
          className="border rounded-lg"
          src="/next.jpg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mx-4">
          <h1 className="font-bold py-3">Code Blogs</h1>
          <p>Welcome to our Code Blog, your go-to resource for mastering Next.js and modern web development. Whether you're a beginner or an experienced developer, we provide in-depth tutorials, best practices, performance optimization tips, and real-world projects to help you build scalable, high-performance web applications. Stay updated with the latest features, server-side rendering, static site generation, API routes, and everything you need to take your coding skills to the next level. 🚀💻</p>
        </div>
      </div>
      
    </div>
  );
}
