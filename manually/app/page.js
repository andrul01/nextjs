"use client";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image 
          src="/god-of-war-4.jpg" 
          alt="Next.js Logo" 
          width={500} 
          height={300} 
          className="rounded-lg shadow-lg my-3"
          />
        <Image
          src="/god_of_war_screen_07_ps4_us_12jun17.jpg"
          alt="Picture of the author"
          width={500}
          height={300}
          className="rounded-lg shadow-lg my-3"
        />
        <h1 className="text-5xl font-bold text-blue-500 underline py-2">God of War 4</h1>
      </div> 
    );
}
  
  