"use client";
import React from "react";
import { useState } from "react";
import handleClick from "@/action/count";
import submitAction from "@/action/form";

const Home = () => {
  const [count, setCount] = useState(0);
  const handleClick = async () => {
    const data = {
      name: "Andrul",
      age: 20,
    };
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
} 
 
  return (
    <>
      {/* cover */}
      <div className="bg-blue-600 text-white py-20 mb-5 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-2 text-lg">Discover amazing content and resources</p>
      </div>

      {/* form */}
      <div className="container mx-auto mb-5 p-6 max-w-2xl bg-white text-black shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-gray-900">Contact Page</h1>
        <p className="mt-2 text-gray-700">Feel free to reach out to us!</p>
        <form className="mt-4 space-y-4" action={submitAction}>
          <div>
            <label className="block text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 p-3 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 p-3 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Message</label>
            <textarea
              name="message"
              id="message"
              required
              className="mt-1 p-3 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 font-semibold">
            Send Message
          </button>
        </form>
      </div>
      
      {/* count button  */}
      <div className="container mx-auto p-6 max-w-2xl bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900">Home Page</h1>
        <p className="mt-2 text-gray-600 text-lg">Welcome to our website! We’re glad to have you here.</p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Counter: {count}</h2>
        <button 
          onClick={() => setCount(count + 1)}
          className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
        >
          Click Me
        </button>
      </div>

      <div className="container mx-auto mb-5 p-6 max-w-2xl bg-white text-black shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-gray-900">Api Route</h1>
        <button 
          onClick={handleClick}
          className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
        >Click</button>
      </div>

    </>
  );
};

export default Home;
