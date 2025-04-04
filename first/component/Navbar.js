"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importing icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Andrul
        </Link>

        {/* Desktop Navbar Items */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Login & Sign Up Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 text-white border border-gray-500 rounded-lg hover:bg-gray-700">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-700 hover:text-white">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navbar Menu */}
      <div
        className={`absolute left-0 top-16 w-full bg-black transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>

          {/* Mobile Login & Sign Up Buttons */}
          <li>
            <Link href="/login">
              <button className="w-full px-4 py-2 text-white border border-gray-500 rounded-lg hover:bg-gray-700">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <button className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-700">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
