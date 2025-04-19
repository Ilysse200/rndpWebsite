// src/components/SectionCard.jsx
import React from "react";

export default function SectionCard({ id, title, content }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-green-800 mb-3">{title}</h2>
      <div className="text-gray-700 text-base leading-relaxed">
        {content}
      </div>
    </section>
  );
}
