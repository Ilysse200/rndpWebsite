// src/pages/PressRelease.jsx
import React, { useEffect, useState } from "react";
import ScrollToHash from "../components/ScrollToHash";
import useActiveSection from "../hooks/useActiveSection";
import SectionCard from "../components/SectionCard";

const pressReleases = [
  {
    id: "private-sector-body",
    title: "Private sector-led body succeeds dairy board",
    content: (
        <p>
        The National Dairy Board has been replaced with a new private sector-led organisation, the Rwanda National Dairy Platform (RNDP), as government moves to boost the country’s milk production and export.<br/>

        <br/>The platform, formed last week, will be managed by the private sector with USAID-supported Rwanda Dairy Competitiveness Programme (RDCP II) that is being implemented by Land O’Lakes, according to George William Kayonga, the National Agriculture Export Board director general.<br/>

        <br/>Kayonga said the new body will be mandated with overseeing the Rwanda National Dairy Farmers Federation, the Dairy Processors Association of Rwanda, and milk and input dealers.<br/>

        <br/>Besides being a voice for the sector at the national and lower levels, the new organisation will seek to professionalise the country’s dairy industry by training and equipping farmers with modern skills.<br/>

        <br/>The main priority of the platform is to ensure increased milk production and value addition to serve the export market. Statistics from the Rwanda Agriculture Board indicate that Rwanda’s milk production has increased by 11 per cent over the past two years, thanks to the Girinka programme.<br/>

        <br/>“Milk has the potential to become one of the leading export earners of the country. It’s, therefore, important for stakeholders to work together in promoting the industry,”Kayonga said.<br/>

        <br/>National Dairy Strategy (NDS) 2013-2018 proposed an implementation framework, which highlighted the importance of bringing the private sector on board to strengthen the sector.<br/>

        <br/>Minister for Agriculture and Animal Husbandry Dr. Agnes Kalibata said the platform will empower value chain actors to build a strong dairy sector that will help drive government programmes as enshrined in the EDPRS II.<br/>

        <br/>“A lot is expected from the platform – being actors in the dairy value chain, members of RNDP play a critical role in self-regulation and compliance to meeting standards and ensuring consumer protection. In addition, the platform will formulate policies and disseminate information that is relevant for dairy development,” Kalibata said in a statement.<br/>

        <br/>Dr. Dennis Karamuzi, the Rwanda Dairy Competitiveness Programme acting chief of party, said there is need to sensitise Rwandans about the importance of milk consumption as one of the ways to expand the market and boost the industry.<br/>

        <br/>“We are working hard to streamline the dairy sector to ensure sustainability,” Karamuzi said at the launch of RNDP last week in Kigali"
      </p>
    ),
  },
  {
    id: "5-year-strategic-plan",
    title: "Rwanda National Dairy Platform launches 5-year strategic plan",
    content: (
      <>
        <p>
          Members of the Rwanda National Dairy Platform (RNDP) have launched a five-year
          strategic plan that will help in streamlining dairy industry.
        </p>
        <br/>
        <p>
          The strategic plan was officially launched on November 20, 2015 in Kigali during a
          one-day dialogue on how to use existing efforts to address today’s dairy industry
          challenges and contribute to more off-farm jobs and exports.
        </p>
        <br/>
        <p>
          RNDP, a private organization of dairy industry business professionals operating in
          various milk value chain segments in Rwanda, is comprised by smallholder dairy
          such as cattle breeders and the organization of consumers, medium dairy industry
          entrepreneurs, and biggest milk processors.
        </p>
        <br/>
        <p>
          The strategic vision of RNDP is to increase the production of high quality and
          competitive dairy products for health and poverty reduction by improving the
          livelihoods of the producers and ultimately contribute to the national economy.
        </p>
        <br/>
        <p>
          Speaking during the launch, the State Minister for Agriculture, Tony Nsanganira,
          commended the members of the platform; noting that “we are very happy that this
          trend is changing towards the right direction.”
        </p>
        <br/>
        <p>
          “We really want to remind ourselves to work even harder to achieve a number of
          targets we set ourselves,” the State Minister told RNDP members, adding that dairy
          industry has huge potential not only to reduce poverty and malnutrition, but also
          increase exports.
        </p>
        <br/>
        <p>
          The 5-year strategic plan would ultimately lead to a vibrant and economically
          strong dairy business that will benefit all operators in the value chain segments;
          thus contributing to the GDP as well as improving the livelihoods of the majority
          of dairy producers.
        </p>
        <br/>
      </>
    ),
  },
  {
    id: "cooperation-commitment",
    title: "Dairy corporation members commit to develop sector",
    content: (
        <>
        <p>
        Members of Rwanda National Dairy Platform (RNDP) have committed to 
        improve their work to spur progress of the dairy industry.
        </p>
        <br/>
        <p>
        RNDP is a private sector-led organisation of dairy business professionals operating in various milk value chain segments 
        (producers, processors, milk sellers, animal health workers, suppliers and service providers).
        </p>
        <br/>
        <p>
        They made the commitment at the launch of a five-year dairy 
        strategic plan in Kigali last week.
        </p>
        <br/>
        <p>
        Florence Musiime Umurungi, the RNDP chairperson, said the strategic plan will help members achieve their goals easily and 
        urged dairy operators who don’t belong to the platform to join so as to develop the sector.
        </p>
        <br/>
        <p>
        She cited lack of equipment and transport among the challenges they face
        </p>
        <br/>
        <p>
        The Minister for Trade and Industry, Francois Kanimba, who officiated at the event, pointed to the importance of the dairy industry to the economic development of the country
         and encouraged operators to work harder.
        </p>
        <br/>
        <p>“The successful implementation of the strategic plan would ultimately 
          lead to a vibrant and economically strong dairy business. This would benefit all operators in the value chain, 
          thus contributing to GDP as well as improving the livelihood 
          of dairy producers,” Kanimba said</p>
          <br/>
        <p>During the function, stakeholders in the dairy sector discussed their challenges 
          and explored measures to overcome them.</p>
          <br/>
        <p>Milton Harerimana, who represented Gicumbi-based Blessed Dairies Ltd, 
          said the platform had helped farmers increase 
          milk products and milk consumption.</p>
          <br/>
        <p>“Since we joined this platform, we have been able to work with farmers and the 
          consumption of our products has notably increased,” he said.</p>
          <br/>
  
          <p>
          “This platform helps us reach customers, it created a link between us and farmers and this facilitates 
          the marketing of our products,” 
          said Emmanuel Tuyambaze, the production officer at Premier Animal Feed Industry.
          </p>
          <br/>
          <p>
          The strategic plan outlines advocacy for farmers and training them on best animal husbandry practices, 
          creating a network of the dairy value chain, 
          ending malnutrition in households and improving production of quality milk and supply system.
          </p>
          <br/>
          <p>
          The famers also committed to strengthening linkage between operators in 
          dairy value chain and financial institutions, enhancing policies and 
          regulatory frameworks, promotion and diversification of dairy products.
          </p>
          <br/>
          <p>
          Tony Nsanganira, the minister of state for agriculture, told the dairy 
          stakeholders to work hard to achieve their targets.
          </p>
          <br/>
          <p>“You’ve the platform and government is always willing to offer support
          ,” he said.</p>
          <br/>
          <p>
          Agriculture contributes 32 per cent to the national economy while livestock
          input is less than 10 per cent.
          </p>
          <br/>
          <p>
          Established a year ago, RNDP is mandated to advocate for and empower members
          toward developing the dairy sector.
          </p>
        </>
    ),
  },
  {
    id: "sector-plan-increase",
    title: "Dairy sector unveils plan to increase milk production",
    content: (
      <p>
        A new strategy aimed at enhancing the dairy sector competitiveness and production has been unveiled by the Rwanda National Dairy Platform.<br/>

        <br/>According to Florence Umurungi, the president of Rwanda National Dairy Platform, the plan will help streamline the dairy sector and ensure proper co-ordination of stakeholders, as well as enhance skills of small farmers to improve the quality of milk and its products.<br/>

        <br/>The two-year strategy will also focus on resource mobilisation, institutional capacity building, increasing consumption of milk among Rwandans and strengthening of linkages between stakeholders in the dairy value chain to spur growth and support milk exports.<br/>

        <br/>Umurungi said it was important for dairy sector stakeholders to work together to make the industry competitive, noting that proper marketing and improving product quality were a must to access export markets.<br/>

        <br/>According to Umurungi, the strategy will also help them formulate policies to strengthen the dairy industry, especially as far as putting safety measures along the milk value chain is concerned.<br/>

        <br/>“Bringing together dairy farmers, processors and consumers will not only strengthen the sector, but also make the country’s milk industry attractive to investors,” she said.<br/>

        <br/>Umurungi, who was speaking during a two-day national dairy farmers retreat in Remera, Gasabo in Kigali yesterday, added that the sector lacked personnel, calling for stakeholders to seek training especially in managerial and business skills.<br/>

        <br/>She said they envisage that by the end of the two-year implementation period, the dairy sector would have become sustainable to improve livelihoods of farmers.<br/>

        <br/>Gahiga Gashumba, the chairman of diary farmers’ federation in Nyagatare District, called for more investment in dairy infrastructure, rural roads, processing plants, as well as acquiring better animal breeds to increase productivity and quality of milk products.<br/>

        <br/>According to Gashumba, rural farmers still face big challenges like access to electricity, credit and market information.<br/>

        <br/>The government dissolved the former sector watchdog Rwanda Dairy Board to boost the dairy industry and empower the private sector to focus on the export market.<br/>

        <br/>The Gir’Inka programme is, besides promoting nutrition and improving incomes of rural households, geared at increasing milk production in the country.
      </p>
    ),
  },
  {
    id: "usaid-support",
    title: "USAID supports dairy sector with Rwf253 million",
    content: (
      <p>
        The United States Agency for International Development (USAID) has extended Rwf253 million ($335,095) to key players in the local dairy sector.<br/>

        <br/>The support was chanelled through the Rwanda Dairy Competitiveness Programme II (RDCP II) and is to be implemented by Land O’Lakes International Development, Inc.<br/>

        <br/>Rwf106 million ($142,481) of the support will go to Rwanda National Dairy Platform – a private multi–stakeholder group advocating for the needs of the dairy industry. Rwf103 million ($138,524) will go to the Rwanda Agricultural Livestock Inspection and Certification Services (RALIS). Additionally, ten milk collection centres will receive assorted equipment worth Rwf45 million ($59,367).<br/>

        <br/>Malick Haidara, the acting director of the USAID economic growth office, said the grant would play a key role in sustaining the growth of the dairy industry.<br/>

        <br/>“We are confident that this grant will be properly used to develop the dairy sector and promote sustainability. I believe that this will be achieved when all levels have the common understanding about the activity,” he said.<br/>

        <br/>According to Dennis Karamuzi, the leader of RDCP II, this grant will help in improving production and quality of the milk, as well as ease the process of collecting the milk.<br/>

        <br/>Francis Karemera, the president of Kibondo Farmers Cooperative in Gatsibo that received a milk tanker, said the equipment will be important to both the dairy cooperatives and the society.<br/>

        <br/>“Our services cut across the whole society and this equipment will benefit all. For example, our partner, Inyange Industries need milk, so this equipment will be used to transport it easily to them,” he said.<br/>

        <br/>In attendance was also the permanent secretary in the Ministry of Agriculture and Animal Resources, Innocent Musabyimana, who reminded the dairy farmers to work hard to increase production.<br/>

        <br/>He also reaffirmed government support to enhance milk production and consumption as it contributes to the development of the country.<br/>

        <br/>From 2012, USAID’s Rwanda Dairy Competitiveness Program II has provided Rwf855 million ($1,145,130) to dairy value chain actors.<br/>

        <br/>editorial@newtimes.co.rw
      </p>
    ),
  },
  {
    id: "milk-donations",
    title: "Rwanda National Dairy Platform and its partners donated milk to the Children ; World Milk Day",
    content: (
      <p>
        Every 1st June of the year is a celebration of world milk day. Rwanda National Dairy Platform (RNDP) in collaboration with Rwanda Dairy Development Project (RDDP) organized the event and was celebrated in Burera District at national level. Burera Dairy Limited donated 200 liters of milk to 694 pupils of Gitovu primary School in Burera District, Ruhunde Sector.<br/>
        <br/>In her remarks, Ms Florence UMURUNGI MUSIIME the Executive Secretary of RNDP expressed her gratitude for the hospitality of the officials of Burera District and further explained the origin of world milk consumption day to the participants that ; The June 1st, 2001-was launched by FAO ; since then the day has been celebrated globally with events and programs 
        aimed at highlighting the importance of milk with an objective to make people aware of the importance of milk and dairy products in our lives. She further informed the audience of June 1st, 2021 being observed by FAO as World Milk Day to celebrate the dairy sector and highlight the importance of milk products as a global food. This year’s WMD has been restricted by the COVID pandemic and globally events will be through social media outlets.<br/>
        <br/>Significantly, she emphasized that milk is a great source of nutrition and means of livelihood for nearly a billion people across the globe. The market of dairy products is a very important component of the global economy.
        The Theme being : SUSTAINABILTY & Quotes
        This year ; World Milk Day is celebrated under restrictions but it will focus on sustainability of the dairy sector along with empowering the environment ; nutrition and social economic.
        The theme aims at spreading more information on awareness about including dairy products in the diets on regular basis. It also aims at re-introducing dairy farming by helping people to create a low carbon print through climate smart dairy farming best practices.
        Statistically, she shared the Global milk production trends : 2015 (497 million MT) ; 2020 : 532 million MT ; EU : 157.5 million MT ; USA : 101 million MT ; Rwanda : 864,000 MT :
        Export Values : 2020 : 55.75 billion USD ; up from 55.3 billion in 2019.<br/>
        <br/>She concluded with an appeal to the leaders, parents and pupils of Burera District to always refer to FAO recommendation of 200 liters per person per year vs Rwanda : 72 liters per person per year-consumption of milk which is still very low.
        Hence the culture of milk consumption should continue in schools at least triweekly which would be a good daily practice”
        The Vice Mayor in -charge of economic development in Burera District Mr Joseph Munyaneza Supported the culture of pre- and school milk feeding to fight against stunting of children below 2 years and advised the locals to change their mindset and do farming professionally in order to increase milk production.<br/>

        <br/>
        <strong>From RNDP Communication Team</strong>
      </p>
    ),
  },
  {
    id: "committee-elections",
    title: "Rwanda National Dairy Platform Committee Elections at the District level",
    content: (
      <p>
        <br/>
        <strong>Rwanda National Dairy Platform Committee Elections at the District level</strong>
        <br/>

        <br/>In order to develop the dairy sector and interrelated activities in partnership 
        with Rwanda Dairy Development Project (RDDP), Rwanda National Dairy Platform (RNDP) 
        organized an event from 10th March 2021 to 1st April 2021 aiming to structure the committee 
        that will represent RNDP at the district level in Gicumbi, Burera, Musanze, Nyabihu, 
        Rutsiro, Rubavu, Ngororero, Nyagatare, Gatsibo, Kayonza, Rwamagana, Huye, Ruhango and 
        Nyanza districts in which the project operates.<br/>
        <br/>The event was chaired by RNDP management in collaboration with the district leaders. 
        In order to comply with COVID-19 guidelines, the elections were held as follows : 
        As RNDP comprised by five clusters, which include : Producers Cluster, Processors Cluster, 
        Service Providers Cluster, Milk Sellers Cluster, and Consumers Cluster.<br/>
        <br/>Each cluster group elected five delegates in which five delegates 
        from each cluster compose RNDP General Assembly at the district level. 
        The general assembly convened to elect seven members of the committee at 
        the district level. Comprising of the : President, First Vice President 
        and Second, Secretary, Treasurer and two Counselors. In order to improve advocacy, 
        it is important to ensure that each cluster is represented in the committee.<br/>
        <br/>

        <strong>From RNDP Communication Team</strong>
      </p>
    ),
  },
];

export default function PressRelease() {
  const activeId = useActiveSection(pressReleases.map((p) => p.id));
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 scroll-smooth relative">
      <ScrollToHash />

      {/* Main content */}
      <div className="md:col-span-3 space-y-12">
        {pressReleases.map((item) => (
          <SectionCard
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg shadow-sm sticky top-24">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Press Releases</h3>
        {pressReleases.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${
                activeId === item.id
                  ? "text-green-700 font-bold"        
                  : "text-green-700 hover:underline"   
              }`}
          >
            {item.title}
          </a>
        ))}
      </aside>

      {/* Scroll to top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
}
