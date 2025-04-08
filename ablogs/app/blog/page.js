import Image from "next/image";

const Page = () => {
  return (
    <div className="m-5 space-y-4">
      <div className="lg:flex lg:space-x-3 mt-4 space-y-3 lg:space-y-0">
        <div className="lg:w-1/2">
          <Image
            className="border rounded-lg"
            src="/spidy2.jpg"
            width={500}
            height={500}
            alt="spidy"
            priority
          />
        </div>
        <div className="lg:w-1/2 mt-4 md:mx-4">
          <h1 className="font-bold py-3">Gaming Blogs</h1>
          <p>
            Welcome to our Gaming Blog, your ultimate destination for the latest gaming news, reviews, and in-depth discussions. Whether youre a casual gamer or a hardcore enthusiast, we cover everything from trending titles, game releases, industry updates, tips & tricks, and insightful analysis of the gaming world. Stay ahead with our expert reviews, gaming guides, and exclusive content tailored for every type of gamer. Join us as we explore the ever-evolving universe of gaming.
          </p>
        </div>
      </div>

      <div className="lg:flex lg:space-x-3 mt-4 space-y-3 lg:space-y-0">
        <div className="lg:w-1/2">
          <Image
            className="border rounded-lg"
            src="/next.jpg"
            width={500}
            height={500}
            alt="nextjs"
            priority
          />
        </div>
        <div className="lg:w-1/2 mt-4 md:mx-4">
          <h1 className="font-bold py-3">Code Blogs</h1>
          <p>
            Welcome to our Code Blog, your go-to resource for mastering Next.js and modern web development. Whether youre a beginner or an experienced developer, we provide in-depth tutorials, best practices, performance optimization tips, and real-world projects to help you build scalable, high-performance web applications. Stay updated with the latest features, server-side rendering, static site generation, API routes, and everything you need to take your coding skills to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
