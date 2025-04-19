// src/pages/Clusters.jsx
import React, { useState } from "react";
import ClusterSection from "../components/ClusterSection";
import ScrollToHash from "../components/ScrollToHash";
import useActiveSection from "../hooks/useActiveSection";

const clusterData = [
  {
    id: "processors",
    title: "Processors Cluster",
    description:
      "This cluster focuses on processing milk into value-added products such as cheese, yogurt, and butter. It connects farmers and retail chains."
  },
  {
    id: "producers",
    title: "Producers Cluster",
    description:
      "Members in this cluster are responsible for dairy farming and milk production. They ensure the supply of raw milk to the entire value chain."
  },
  {
    id: "service",
    title: "Service Providers Cluster",
    description:
      "This includes transporters, veterinary services, artificial insemination providers, and other support services that enhance dairy productivity."
  },
  {
    id: "sellers",
    title: "Milk Sellers Cluster",
    description:
      "Sellers focus on distribution and retail of milk and dairy products, working with processors and producers to ensure availability."
  },
  {
    id: "consumers",
    title: "Consumers Cluster",
    description:
      "End users of dairy products who play a key role in shaping quality standards, preferences, and demand in the dairy market."
  }
];

export default function Clusters() {
  const [search, setSearch] = useState("");
  const activeId = useActiveSection(clusterData.map((c) => c.id));

  const filteredClusters = clusterData.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 scroll-smooth">
      <ScrollToHash />

      {/* Main content */}
      <div className="md:col-span-3 space-y-12">
        <input
          type="text"
          placeholder="Search clusters..."
          className="w-full p-3 border rounded-md mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredClusters.map((cluster) => (
          <ClusterSection
            key={cluster.id}
            id={cluster.id}
            title={cluster.title}
            description={cluster.description}
          />
        ))}
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg shadow-sm sticky top-24">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Clusters</h3>
        {clusterData.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`${
              activeId === c.id
                ? "text-green-800 font-bold underline"
                : "text-green-700 hover:underline"
            }`}
          >
            {c.title.replace(" Cluster", "")}
          </a>
        ))}
      </aside>
    </div>
  );
}