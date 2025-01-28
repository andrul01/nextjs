
'use client';

import React from 'react'
import Link from 'next/link';
import {UserButton} from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">Chatter</Link>
        
        {/* Navigation Menu */}
        <div className="flex space-x-6 hidden md:flex md:block">
          <Link href="/forum" className="hover:text-gray-400">Forum</Link>
          <Link href="/chat" className="hover:text-gray-400">Chats</Link>
          <Link href="/contact" className="hover:text-gray-400">Contacts</Link>
          <UserButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
