import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A simple blog homepage using Next.js and Tailwind CSS" />
      </Head>
      
     {/* Hero Section */}
      <header className="bg-white border">
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center md:space-x-3 p-4">
          
          {/* Text Section */}
          <div className="flex text-center md:text-left items-center">
            <div className='p-4'>
              <h2 className="text-3xl md:text-4xl font-extrabold">Welcome to Andrul</h2>
              <h2 className="text-2xl md:text-4xl font-extrabold">
                <span className='text-blue-500 mr-2'>Tech</span>
                And
                <span className='text-blue-500 mx-2'>Gaming</span>
                Blog
              </h2>
              <p className="text-base md:text-lg text-gray-700 mt-4">
                Discover insightful articles and updates.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="m-4">
            <Image 
              src="/games.png" 
              width={500} 
              height={300} 
              alt="Hero Image"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </header>

      
      {/* Blog Section */}
      <main className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-semibold mb-6">Latest Posts</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-xl font-bold">Post Title 1</h4>
            <p className="text-gray-600 mt-2">A short description of the blog post.</p>
            <a href="#" className="text-blue-600 mt-2 inline-block">Read More</a>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-xl font-bold">Post Title 2</h4>
            <p className="text-gray-600 mt-2">A short description of the blog post.</p>
            <a href="#" className="text-blue-600 mt-2 inline-block">Read More</a>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-xl font-bold">Post Title 3</h4>
            <p className="text-gray-600 mt-2">A short description of the blog post.</p>
            <a href="#" className="text-blue-600 mt-2 inline-block">Read More</a>
          </div>
        </div>
      </main>
      
    </div>
  );
}
