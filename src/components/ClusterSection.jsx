import React from "react";
import { Link } from "react-router-dom"; // ✅ make sure this is imported
import image from "../assets/RNDP_logo.jpeg";

const clusters = [
  {
    title: "Producers Cluster",
    description: "This cluster is made up of dairly farmers of Rwanda",
    image,
    slug: "producers",
  },
  {
    title: "Processors Cluster",
    description: "This cluster is composed of individual, company as well as",
    image,
    slug: "processors",
  },
  {
    title: "Service Providers",
    description: "The cluster is sub divided into varies sub cluster according",
    image,
    slug: "service",
  },
  {
    title: "Milk Sellers",
    description: "This cluster has its leadership structure at national level",
    image,
    slug: "sellers",
  },
  {
    title: "Consumers Cluster",
    description: "This cluster is made up of consumer rights production",
    image,
    slug: "consumers",
  },
];

export default function ClusterSection() {
  return (
    <section className="py-10 px-6 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-8 text-green-700">In Focus</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {clusters.map((cluster, index) => (
          <Link to={`/clusters/info?cluster=${cluster.slug}`}
            key={index}
            className="bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition p-4 block"
          >
            <img
              src={cluster.image}
              alt={cluster.title}
              className="w-full h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {cluster.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{cluster.description}</p>
            <span className="mt-4 text-green-700 hover:underline font-medium inline-block">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
