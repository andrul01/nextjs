import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 relative flex flex-col justify-between min-h-[200px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        {/* Company Info */}
        <div>
          <h6 className="footer-title">Company</h6>
          <p>Providing quality services and innovative solutions for your needs.</p>
        </div>
        
        {/* Quick Links */}
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </nav>
        
        {/* Social Links */}
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.linkedin.com">
              <Image src="/linkedin.svg" width={40} height={40} alt="LinkedIn Icon" className="invert cursor-pointer" />
            </Link>
            <Link href="https://www.youtube.com">
              <Image src="/Youtube.svg" width={40} height={40} alt="YouTube Icon" className="invert cursor-pointer" />
            </Link>
            <Link href="https://www.twitter.com">
              <Image src="/twitter.svg" width={40} height={40} alt="Twitter Icon" className="invert cursor-pointer" />
            </Link>
          </div>
        </nav>
      </div>
      {/* Copyright at the bottom, centered */}
      <div className="text-center mt-8 text-sm w-full border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
