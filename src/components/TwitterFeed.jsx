// src/components/TwitterFeed.jsx
import React from "react";
import { FaTwitter } from "react-icons/fa"; // ✅ install react-icons if not yet installed

export default function TwitterFeed() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
      {/* Twitter Logo */}
      <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
        <FaTwitter className="text-green-700 text-3xl" />
      </div>

      {/* Text and Link */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-green-700">@RNDP</h2>
        <p className="text-gray-600 mb-3 text-sm">
          Rwanda Agriculture & Animal Resources Dept Board - stay updated with the latest!
        </p>
        <a
          href="https://twitter.com/RwandaAgriBoard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition text-sm"
        >
          View on Twitter →
        </a>
      </div>
    </section>
  );
}
