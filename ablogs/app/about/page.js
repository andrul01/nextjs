"use client";
import Head from 'next/head';
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <Head>
        <title>About - Andrul Gaming & Tech</title>
        <meta name="description" content="Discover more about Andrul Gaming & Tech Blog." />
      </Head>
      
      <h1 className="text-3xl font-bold mb-4">About Andrul Gaming & Tech</h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to Andrul Gaming & Tech, your go-to source for gaming news, reviews, and the latest technology trends.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
      <p className="text-gray-600 mb-6">
        Our mission is to provide in-depth insights into gaming and technology, keeping our readers informed and engaged.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3">What We Cover</h2>
      <ul className="text-gray-600 list-disc list-inside mb-6">
        <li>Gaming reviews & updates</li>
        <li>Tech news & innovations</li>
        <li>Game tutorials & walkthroughs</li>
        <li>Hardware & software recommendations</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-3">Join Us</h2>
      <p className="text-gray-600">
        Stay updated by following us and being part of our growing tech and gaming community!
      </p>
    </div>
  );
};

export default About;
