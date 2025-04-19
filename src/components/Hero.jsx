// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
      <section
        className="relative h-[70vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-green-600/30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rwanda National Dairy Platform</h1>
          <p className="text-lg max-w-2xl">
            Our Milk, Our Health, Our Future. Empowering communities through dairy sector innovation.
          </p>
          <Link to='/pressRelease'>
          <button className="mt-6 px-6 py-2 bg-white text-green-700 font-semibold rounded-md shadow hover:bg-gray-100 transition">
            Learn More
          </button>
          </Link>
        </div>
      </section>
    );
  }