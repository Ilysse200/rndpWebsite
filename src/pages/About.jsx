// src/pages/About.jsx
import React from "react";
import SectionCard from "../components/SectionCard";
import structureImage from "../assets/orgStructure.jpg";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Main Content */}
      <div className="md:col-span-3 space-y-10">
        <SectionCard
          id="rnpd-values"
          title="RNDP Values"
          content={
            <>
              <p className="mb-2">
                <strong>Delight</strong> – We aim to delight our customers and partners with our quality products and services.
              </p>
              <p>
                <strong>Efficiency</strong> – We believe in having effective and sustainable practices.
              </p>
              <p>
                <strong>Innovation </strong> – We are focused on being on the cutting edge in order to deliver and offer the most innovative and contemporary professional services and products
              </p>
              <p>
                <strong>Pioneering spirit</strong> – We have a strong desire to venture into new, breakthrough areas of business opportunity, where we can be market pioneers in the dairy value chain.
              </p>
              <p>
                <strong>Respect </strong> – We strive to develop a culture and environment where each individual and cluster member can express and share in the excitement of being part of RNDP
              </p>
              <p>
                <strong>Reward </strong> – We recognize and reward individuals and clusters contributions that make it possible for us to meet and exceed the high standards and goals of the platform, through high levels of commitment as well as responsible.
              </p>
              <p>
                <strong>Relationships </strong> –  We strongly value and understand the importance of developing and maintaining strong long term stakeholder relationships and partnerships, which are at the cornerstone of our long term sustainability as a dairy industry development organization
              </p>
            </>
          }
        />

        <SectionCard
          id="goal"
          title="Overall Goal"
          content="To advocate for the promotion and support activities operated by stakeholders’ clusters in the dairy development value chain aimed at scaling up..."
        />

        <SectionCard
          id="structure"
          title="Organisational Structure"
          content={
            <div className="rounded-xl border border-gray-300 shadow-md mt-8 w-full max-w-4xl pl-11 py-6 bg-white flex justify-center">
              <img
                src={structureImage}
                alt="Organisational Structure Diagram"
                className="rounded-xl max-w-3xl"
              />
            </div>
          }
          />
    </div>

      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col space-y-3 bg-gray-50 p-4 rounded-lg shadow-sm sticky top-24">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sections</h3>
        <a href="#rnpd-values" className="text-green-700 hover:underline">RNDP Values</a>
        <a href="#goal" className="text-green-700 hover:underline">Overall Goal</a>
        <a href="#structure" className="text-green-700 hover:underline">Structure</a>
      </aside>
    </div>
   
  )
}
