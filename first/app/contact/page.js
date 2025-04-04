"use client";
import React from "react";

const Contact = () => {  
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold">Contact Page</h1>
      <p className="mt-2 text-gray-700">Feel free to reach out to us!</p>

      <form className="mt-4 space-y-4" action={submitAction}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            required
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <button

          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
