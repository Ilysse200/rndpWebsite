// src/pages/ClusterInfo.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const clusters = [
  {
    slug: "producers",
    title: "Producers Cluster",
    description: [
        "This cluster is made up of dairly farmers of Rwanda under the primary cooperatives. Each district should form one dairy cooperative union according to the law establishing cooperative in Rwanda.",
        "Destrict unions combines to form a national dairy farmers federation (NDFF).",
        "At least three or more primary cooperative unite to form a district dairy cooperative union.",
        "Currently there are 16 district dairy cooperatives in Rwanda.",
        "The platform is still in the process of establishing those not yet formed. The process begins the formation of primary cooperative at the grassroots level.",
        "The cluster has leaders at all levels of local administrative."],
  },
  {
    slug: "processors",
    title: "Processors Cluster",
    description: [
        "This is the cluster which is composed of individual, company as well as corporate companies that are involved into processing of milk into various dairy products.",
        "There are large scale milk processing plants as well as small scale milk transforming units mainly for cheese, yoghurt, butter, fermented milk etc., where large scale milk processing plants are engaged into producing UHT milk, cheese, yoghurt and various diversified dairy products to mention but a few.",
        "The cluster has its leadership structure at national level. The leadership structure captures members from all sizes of production irrespective of the level and magnitude of processing.",
        "Inyange Industries is so far the largest milk processing plant that produces UHT milk in the country."
      ],
  },
  {
    slug: "service",
    title: "Service Providers Cluster",
    description: [
        "This a cluster of made up of individuals companies and cooperative of people involved into varies activities that enhance dairy production and business.",
        "The cluster is sub divided into varies sub cluster according to the service each would provide." ,
        "Such sub cluster include the following:",
        "I) Sub cluster of animal feed manufactures these are persons directly involved into manufacturing and compounding of animal treats according to type of production, age and other parameters as maybe requested.",
        "This sub cluster is made up of large scale animal feeds, manufacturing plants as well as small scale animal food production.",
        "The cluster also has member who are involved into supplying of animal feed, raw materials.",
        "II) Sub cluster of equipment/input supplier is this is the cluster made up of companies or individuals who owns stores, shop of dairy equipment various input, including veterinary, drugs and equipment.",
        "III) Sub cluster of animal with core and breading",
        "This sub cluster is comprised by individuals veterinary technician and divisionary forgoes who are dairy basis are involved into diagnostics and treatment properly axis of dairy cattle.",
        "The cluster also includes people who follows up breeding of cows through provision of artifice and insemination service.",
        "The cluster has leadership structure at provincial and national level"
    ],
  },
  {
    slug: "sellers",
    title: "Milk Sellers Cluster",
    description: [
        "This is the cluster which is composed of individual, company as well as corporate companies that are involved into processing of milk into various dairy products.",
        "There are large scale milk processing plants as well as small scale milk transforming units mainly for cheese, yoghurt, butter, fermented milk etc., where large scale milk processing plants are engaged into producing UHT milk, cheese, yoghurt and various diversified dairy products to mention but a few.",
        "The cluster has its leadership structure at national level. The leadership structure captures members from all sizes of production irrespective of the level and magnitude of processing.",
        "Inyange Industries is so far the largest milk processing plant that produces UHT milk in the country."
      ],
  },
  {
    slug: "consumers",
    title: "Consumers Cluster",
    description:[
      "This cluster is made up of consumer rights production group registered under the law of the land as a non-profit making and non-government organisation.",
      "It was registered under the name abbreviated as ADECOR."]
  }
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ClusterInfo() {
  const query = useQuery();
  const navigate = useNavigate();
  const slug = query.get("cluster");
  const cluster = clusters.find((c) => c.slug === slug);

  if (!cluster) {
    return <p className="p-6 text-red-600">Cluster not found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Main content */}
      <div className="md:col-span-3 space-y-4">
        <h1 className="text-3xl font-bold text-green-800">{cluster.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{cluster.description}</p>
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg shadow-sm sticky top-24">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Other Clusters</h3>
        {clusters.map((c) => (
          <button
            key={c.slug}
            onClick={() => navigate(`/clusters/info?cluster=${c.slug}`)}
            className={`text-left ${
              c.slug === slug
                ? "text-green-800 font-bold underline"
                : "text-green-700 hover:underline"
            }`}
          >
            {c.title.replace(" Cluster", "")}
          </button>
        ))}
      </aside>
    </div>
  );
}
