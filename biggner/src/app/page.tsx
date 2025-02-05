"use client";
import HeroSection from "@/components/HeroSection";
import LatestBlogs from "@/components/LatestBlogs";
import TestimonialCards from "@/components/TestimonialCards";
import WhyJoinUs from "@/components/WhyJoinUs";
import HoveredCard from "@/components/HoveredCard";
import Instructors from "@/components/Instructors";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (  
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.35]">
        <HeroSection/>
        <LatestBlogs/>
        <WhyJoinUs/>
        <TestimonialCards/>
        <HoveredCard/>
        <Instructors/>
        <Footer/>
    </main>
  );
}
