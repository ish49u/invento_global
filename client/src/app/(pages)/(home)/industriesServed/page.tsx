import { FaTools, FaIndustry, FaCar, FaHome } from "react-icons/fa"; // Import icons to represent industries

const IndustriesServed: React.FC = () => {
  return (
    <div>
      {/* Industries We Serve Section */}
      <section className="lg:py-10 py-0 bg-white text-center px-2 sm:px-6 lg:px-32">
        <h2 className="text-xl lg:text-4xl font-bold text-center mb-10 sm:mb-16 text-black">
          Industries We
          <span className="relative inline-block ml-2">
            Serve
            <span className="absolute left-1/2 bottom-0 w-1/2 h-0.5 bg-primary transform -translate-x-1/2"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 px-2 lg:px-6">
          {/* Industry Cards */}
          {[
            {
              name: "Hardware Tools",
              icon: <FaTools className="text-3xl text-white" />,
              description:
                "High-quality tools for every project. Durable and reliable.",
            },
            {
              name: "Tool Bags",
              icon: <FaIndustry className="text-3xl text-white" />,
              description:
                "Spacious and sturdy bags for organizing your tools.",
            },
            {
              name: "Copper Utensils",
              icon: <FaCar className="text-3xl text-white" />,
              description: "Premium copper utensils for your kitchen and home.",
            },
            {
              name: "DIY Equipment",
              icon: <FaHome className="text-3xl text-white" />,
              description:
                "Everything you need for your DIY projects, from tools to accessories.",
            },
          ].map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 lg:p-6 p-2 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <div className="bg-primary lg:p-4 p-2 rounded-full inline-block lg:mb-4 mb-2 lg:text-lg text-sm">
                {industry.icon}
              </div>
              <h3 className="text-sm lg:text-xl font-semibold text-gray-800 mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 mb-2 lg:text-lg text-xs">
                {industry.description}
              </p>
              <p className="lg:text-sm text-xs text-gray-500">
                Premium quality and reliable performance.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustriesServed;
