'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Navbar = () => {
  return (
    <nav className="bg-white-300 text-blue border-b  p-3 flex justify-between items-center w-full sticky top-0 backdrop-blur">
        <Link href="/" className="text-xl font-bold text-blue-500">Ablogs</Link>
        <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <Link href="/blog" className="hover:text-blue-500">Blogs</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
            <Button variant="outline" className="hover:text-blue-500">Login</Button>
            <Button variant="outline" className="hover:text-blue-500">Signup</Button>
        </div>
        
        <Sheet>
            <SheetTrigger>
                <button className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Andrul Blogs</SheetTitle>
                <SheetDescription>
                    <div className="flex flex-col space-y-4 text-start">
                        <Link href="/" className="hover:text-blue-500 bg-black-500">Home</Link>
                        <Link href="/about" className="hover:text-blue-500">About</Link>
                        <Link href="/blog" className="hover:text-blue-500">Blogs</Link>
                        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                        <div className='space-x-2'>
                            <Button variant="outline" className="hover:text-blue-500">Login</Button>
                            <Button variant="outline" className="hover:text-blue-500">Signup</Button>
                        </div>
                    </div>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    </nav>
  );
};

export default Navbar;