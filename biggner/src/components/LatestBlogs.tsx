'use client';

import Link from 'next/link'
import { Button } from "./ui/moving-border";
import postData from "../data/post.json";
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';

interface Posts {
  id:number,
  title:string,
  content:string,
  author:string,
  slug:string,
  isFeatured:boolean,
}

function LatestBlogs() {

  const featuredPosts = postData.posts.filter((posts:Posts) => posts.isFeatured)

  return (
    <div className="mt-3 py-5 bg-gray-200 ">
      <div>
        <div className="text-center text-black">
          <h2 className="text-4xl font-bold font-serif">LATEST BLOG POST</h2>
          <p className="mt-4 font-mono">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quasi!</p>
        </div>
      </div>
      <div className='mt-5'>2
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center'>
          {featuredPosts.map((posts:Posts) => (
              <div
                key={posts.id} 
                className='text-black flex justify-center' 
              >
                <BackgroundGradient
                  className="rounded-[22px] max-w-sm p-3 sm:p-10 bg-white dark:bg-zinc-900"
                >
                  <div className='text-center text-white flex flex-col items-center'>
                    <p className='text-3xl font-serif mb-2'>{posts.title}</p>
                    <Image 
                      className='border rounded-lg my-3'
                      src="/fnspidy.png"
                      width={500}
                      height={50}
                      alt='fnspidy image'
                    
                    />
                    <p className='font-mono mb-5'>{posts.content}</p>
                    <Link 
                      href={`/posts/${posts.slug}`}
                    >
                      <Button>Read More</Button>
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
          ))}
        </div>

      </div>
      <div className="text-center mt-5">
        <Link href={'/'}>           
          <Button 
            borderRadius='2rem'
            className='bg-black text-white'
          >
            View More
          </Button>
        </Link>

      </div>
    </div>
  )
}

export default LatestBlogs
