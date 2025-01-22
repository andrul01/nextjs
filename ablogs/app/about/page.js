import Head from 'next/head';
import React from 'react';

const Page = () => {
  return (
    <div className="">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us." />
      </Head>
      <h1>About Us</h1>
      <p>
        We are a team of passionate developers dedicated to building amazing web applications.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to create user-friendly and efficient software solutions that meet the needs of our clients.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Collaboration</li>
      </ul>
    </div>
  )
}

export default Page;