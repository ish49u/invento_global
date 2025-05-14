import { FaGlobeAmericas, FaTruck, FaBoxOpen } from "react-icons/fa"; // You can install these icons using `npm install react-icons`

const GlobalReach: React.FC = () => {
  return (
    <section className="lg:py-20 py-0 bg-[#F1E2B3] text-center relative overflow-hidden lg:mt-0 mt-5">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
      ></div>

      <div className="relative z-10 px-4">
        <h2 className="text-xl lg:text-4xl font-extrabold text-primary lg:mb-8 mb-4">
          Our Global Presence
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 lg:space-x-24 space-y-4 sm:space-y-0">
          {/* Country Served */}
          <div className="flex flex-col items-center text-sm sm:text-xl md:text-2xl text-gray-800">
            <FaGlobeAmericas className="text-2xl lg:text-6xl text-primary mb-4" />
            <div>50+ Countries Served</div>
          </div>

          {/* Shipments Annually */}
          <div className="flex flex-col items-center text-sm sm:text-xl md:text-2xl text-gray-800">
            <FaTruck className="text-2xl lg:text-6xl text-primary mb-4" />
            <div>10,000+ Shipments Annually</div>
          </div>

          {/* Product Categories */}
          <div className="flex flex-col items-center text-sm sm:text-xl md:text-2xl text-gray-800">
            <FaBoxOpen className="text-2xl lg:text-6xl text-primary mb-4" />
            <div>100+ Product Categories</div>
          </div>
        </div>
      </div>

      {/* Animated line for emphasis */}
      <div className="mt-10">
        <div className="w-24 mx-auto border-t-4 border-primary animate-pulse"></div>
      </div>
    </section>
  );
};

export default GlobalReach;
