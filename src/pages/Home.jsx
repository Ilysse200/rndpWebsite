import React from "react";

// src/pages/Home.jsx
import Hero from "../components/Hero";
import ClusterSection from "../components/ClusterSection";
import NewsTabs from "../components/NewsTabs";
import TwitterFeed from "../components/TwitterFeed";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <ClusterSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
        <div className="md:col-span-2">
          <NewsTabs />
        </div>
        <div>
          <TwitterFeed />
        </div>
      </div>
    </div>
  );
}
