// src/pages/Strategy.jsx
import React from "react";
import SectionCard from "../components/SectionCard";
import ScrollToHash from "../components/ScrollToHash";
import useActiveSection from "../hooks/useActiveSection";

const strategySections = [
  {
    id: "sustainable-operation",
    title: "Strategy to Make the Operation Sustainable",
    content: (
      <>
        <p>
          The Platform aims at empowering key dairy sector stakeholders in order
          to impart them with abilities for self-reliance that will reduce
          dependence. From 2014 onwards the Platform will implement its
          objectives by playing the role of advocacy, facilitation and support,
          and strengthening of capacities aimed at empowering the dairy sector
          for sustainable improvement.
        </p>
        <p className="mt-4">
          In addition, the Platform will devise ways to make the operations
          effectively sustainable. This would require a well-organised
          tailor-made capacity building program among RNDP staff and dairy
          sector stakeholders.
        </p>
      </>
    ),
  },
  {
    id: "vision",
    title: "Strategic Vision",
    content: <p>The production of high quality and competitive dairy products for health and poverty reduction by improving the livelihoods of the producers and ultimately contribute to the national economy.</p>,
  },
  {
    id: "mission",
    title: "Strategic Mission",
    content: <p>
    • To improve and strengthen the organisation of dairy industry stakeholders by empowering them to be able to own and manage the dairy industry business collectively and efficiently through the integration and linking all relevant stakeholders together for a common goal<br/>
    • Improve the competitiveness of smallholder milk producers to provide more milk and better quality of milk and dairy products to Rwandan consumers and in the region<br/>
    • Increased income and food security for all stakeholders in the milk value chain through sustainable development of the market oriented dairy industry in the country.<br/>
    • Ending poverty and malnutrition at household level through increased production,<br/>
    • Empowering change in skills, knowledge and attitudes of beneficiaries to sustainably integrate dairying into their livelihood systems as well as providing organizational development support.</p>,
  },
  {
    id: "objectives",
    title: "Strategic Objectives",
    content: <p>
        • To improve the organizational and operational capacity of stakeholders involved in the dairy production value chain along their value chain based cluster management arrangements<br/>
        • To define and commit all stakeholders and make them each have role and ownership of actions aimed at improving dairy industry business<br/>
        • To chart out inputs and outputs for the whole chain development aimed at avoiding or reducing production losses<br/>
        • To respond for the emerging potentials of new production technologies<br/>
        • To improve marketing of dairy products domestically and abroad<br/>
        • To advocate, promote and improve Public-Private Partnership in dairy business<br/>
        • To assess impacts of country and regional consumption trends for improved dairy products business transactions<br/>
        • To link smallholder farmers to emerging products markets<br/>
        • To develop capable human resources and knowledge management in dairy sector development and its supporting organizations ; 
        to be carried out through direct collaboration with line Ministries and other supporting organizations<br/>
        • To improve production of quality milk and milk products<br/>
        • To streamline and improve milk supply system<br/>
        • To holistically engage the private sector in the dairy development business<br/>
        • To improve dairy sector competitive position in dairy products marketing and for factors of production<br/>
        • To support dairy farmers to become more productive and profitable<br/>
        • To put smallholder dairy farmer as an instrument for rural poverty reduction and improve food security and nutrition<br/>
        • To advocate and facilitate the formulation of production enhancing laws and regulatory framework<br/>
        • To improve to safety and quality of the products through a pricing system which provides strong incentives for farmers and other value chain actors to improve product quality<br/>
        • To enhance market access through formal market channels and better meet consumer needs and affordability<br/>
        • Advocate and facilitate financial development of the sector including investment by smallholder dairy farmers, SME’s, cooperatives as well as public investment in infrastructure and support services<br/>
        • Eensuring the dairy sector develops in a socially and environmentally responsible manner<br/>
        </p>,
  },
  {
    id: "priorities",
    title: "Strategic Objectives Priorities (SOP)",
    content: <p>Focus on institutional strengthening, quality assurance, infrastructure, and capacity building for all actors in the dairy value chain.</p>,
  },
];

export default function Strategy() {
  const activeId = useActiveSection(strategySections.map((s) => s.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 scroll-smooth">
      <ScrollToHash />

      {/* Main content */}
      <div className="md:col-span-3 space-y-12">
        {strategySections.map((section) => (
          <SectionCard
            key={section.id}
            id={section.id}
            title={section.title}
            content={
              <>
                {section.content}
                <div className="mt-4">
                  <a href="#top" className="text-green-600 hover:underline">
                    Back to top ↑
                  </a>
                </div>
              </>
            }
          />
        ))}
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg shadow-sm sticky top-24">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sections</h3>
        {strategySections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={
              activeId === section.id
                ? "text-green-800 underline"
                : "text-green-700 hover:underline"
            }
          >
            {section.title}
          </a>
        ))}
      </aside>
    </div>
  );
}
