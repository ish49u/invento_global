import { FaTools, FaBriefcase, FaUtensilSpoon, FaHammer } from "react-icons/fa";

const IndustriesServed: React.FC = () => {
  const industries = [
    {
      name: "Brass Hardware & Tools",
      icon: <FaTools className="text-3xl text-white" />,
      description:
        "High-quality brass tools and hardware for professional and industrial use.",
    },
    {
      name: "Fastener & Fixing Industry",
      icon: <FaBriefcase className="text-3xl text-white" />,
      description:
        "Precision-engineered fasteners trusted by builders and manufacturers.",
    },
    {
      name: "Copper Utensils & Kitchenware",
      icon: <FaUtensilSpoon className="text-3xl text-white" />,
      description:
        "Handcrafted copper kitchen products for premium culinary experiences.",
    },
    {
      name: "DIY & Home Improvement",
      icon: <FaHammer className="text-3xl text-white" />,
      description:
        "Affordable, reliable tools and accessories for home DIY projects.",
    },
  ];

  return (
    <section
      className="lg:py-20 py-10 bg-[#F1E2B3] text-center relative overflow-hidden lg:mt-0 mt-5"
      aria-label="Industries served by Invento by Vee Kay Enterprises"
    >
      <h2 className="text-xl lg:text-4xl font-bold text-black mb-10 sm:mb-16">
        Industries Invento by Vee Kay Enterprises
        <span className="relative inline-block ml-2 text-primary">
          Serves
          <span className="absolute left-1/2 bottom-0 w-1/2 h-0.5 bg-primary transform -translate-x-1/2"></span>
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 px-2 lg:px-6">
        {industries.map((industry, index) => (
          <article
            key={index}
            itemScope
            itemType="https://schema.org/Service"
            className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 lg:p-6 p-3 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            <div
              className="bg-primary lg:p-4 p-2 rounded-full inline-block lg:mb-4 mb-2"
              role="img"
              aria-label={`${industry.name} icon`}
            >
              {industry.icon}
            </div>
            <h3
              itemProp="name"
              className="text-sm lg:text-xl font-semibold text-gray-800 mb-2"
            >
              {industry.name}
            </h3>
            <p
              itemProp="description"
              className="text-gray-600 mb-2 lg:text-base text-xs"
            >
              {industry.description}
            </p>
            <p className="lg:text-sm text-xs text-gray-500">
              Premium quality. Trusted globally.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default IndustriesServed;
