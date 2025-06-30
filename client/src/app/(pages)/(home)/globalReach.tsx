import { FaGlobeAmericas, FaTruck, FaBoxOpen } from "react-icons/fa";

const GlobalReach: React.FC = () => {
  return (
    <section
      className="lg:py-20 py-10 bg-[#F1E2B3] text-center relative overflow-hidden lg:mt-0 mt-5"
      aria-label="Invento by Vee Kay Enterprises - Worldwide Export Presence"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/images/global-bg.jpg)" }} // <- Replace with correct image path
        role="presentation"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-xl lg:text-4xl font-extrabold text-primary lg:mb-8 mb-4 leading-tight">
          Invento by Vee Kay Enterprises’ Worldwide Export Reach
        </h2>

        <p className="text-base lg:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Trusted globally, Invento Global delivers precision hardware, screws,
          fasteners, tools, and copper handicrafts to over 50+ countries. We
          take pride in our consistent quality and seamless international
          logistics.
        </p>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 lg:gap-16 justify-center text-gray-800 text-sm sm:text-xl md:text-2xl">
          {/* Country Served */}
          <div className="flex flex-col items-center">
            <FaGlobeAmericas
              className="text-2xl lg:text-6xl text-primary mb-3"
              title="Global Coverage"
              aria-hidden="true"
            />
            <span className="font-bold">50+ Countries Served</span>
          </div>

          {/* Shipments Annually */}
          <div className="flex flex-col items-center">
            <FaTruck
              className="text-2xl lg:text-6xl text-primary mb-3"
              title="Annual Shipments"
              aria-hidden="true"
            />
            <span className="font-bold">10,000+ Shipments Annually</span>
          </div>

          {/* Product Categories */}
          <div className="flex flex-col items-center">
            <FaBoxOpen
              className="text-2xl lg:text-6xl text-primary mb-3"
              title="Diverse Products"
              aria-hidden="true"
            />
            <span className="font-bold">100+ Product Categories</span>
          </div>
        </div>

        {/* Decorative underline */}
        <div className="mt-10">
          <div className="w-24 mx-auto border-t-4 border-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
