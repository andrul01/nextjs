"use client";
import React from 'react'

function Footer() {
    return (
      <footer className='bg-black text-white py-10'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-12 lg:px-16'>
          {/* Logo & Description */}
          <div>
            <h2 className='text-xl font-bold mb-4'>Atex Tech Forum</h2>
            <p className='text-gray-400 text-sm'>
              Your go-to platform for tech discussions, tutorials, and community support.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='text-gray-400 text-sm space-y-2'>
              <li><a href='/about' className='hover:text-white'>About Us</a></li>
              <li><a href='/contact' className='hover:text-white'>Contact</a></li>
              <li><a href='/blog' className='hover:text-white'>Blog</a></li>
              <li><a href='/faq' className='hover:text-white'>FAQs</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <p className='text-gray-400 text-sm'>
              Email: support@atextechforum.com<br />
              Phone: +91 7796064374
            </p>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='https://instagram.com/dipendra_chaturvedi.official' className='hover:text-white'>Instagram</a>
              <a href='https://github.com/' className='hover:text-white'>GitHub</a>
              <a href='https://linkedin.com/' className='hover:text-white'>LinkedIn</a>
            </div>
          </div>
        </div>
        <div className='text-center mt-8 text-gray-300 text-sm'>
        <p>© {new Date().getFullYear()} Atex Tech Forum. All Rights Reserved.</p>
      </div>
      </footer>
    );
  }
  
  export default Footer;
  
