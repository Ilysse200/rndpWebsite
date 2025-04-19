// src/components/NewsTabs.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["News", "Announcements", "Reports"];
const content = {
  News: [
    { title: "Milk donation to children on World Milk Day", date: "01-06-2021", link: "/pressRelease#milk-donations"},
    { title: "Committee Elections at District Level", date: "10-03-2021",link: "/pressRelease#committee-elections" },
  ],
  Announcements: [
    { title: "Final Result of RND Accountant", date: "25-08-2021", link: "https://rndp.rw/IMG/pdf/final_results_for_the_recruitment_accountant_.pdf", external:true },
  ],
  Reports: [
    { title: "2023 Annual Dairy Sector Report", date: "31-12-2023" },
  ],
};

export default function NewsTabs() {
  const [activeTab, setActiveTab] = useState("News");

  return (
    <section className="bg-white p-6 rounded shadow-sm">
      <div className="flex gap-4 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-1 text-sm font-medium border-b-2 transition ${
              activeTab === tab ? "border-green-600 text-green-700" : "border-transparent text-gray-500 hover:text-green-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
          <ul className="space-y-3">
      {content[activeTab].map((item, index) => (
        <li key={index} className="text-sm">
          <span className="text-gray-500 mr-2 italic">{item.date}</span>

          {item.link ? (
            item.external ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                {item.title}
              </a>
            ) : (
              <Link to={item.link} className="text-blue-700 hover:underline">
                {item.title}
              </Link>
            )
          ) : (
            <span className="text-blue-700">{item.title}</span>
          )}
        </li>
      ))}
    </ul>
    </section>
  );
}
