const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Innovative Solutions",
      description:
        "We embrace the latest manufacturing technologies to deliver innovative hardware solutions customized for global industries.",
      icon: "🚀",
      label: "Innovation icon",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our top priority. We provide tailored hardware and logistics services to meet unique business goals.",
      icon: "💬",
      label: "Customer-first icon",
    },
    {
      title: "Industry Expertise",
      description:
        "With decades of experience in the export and manufacturing sector, we bring deep insight into international hardware trade.",
      icon: "🎓",
      label: "Expertise icon",
    },
    {
      title: "Proven Track Record",
      description:
        "Trusted by hundreds of global clients, our track record demonstrates success through consistent quality and delivery.",
      icon: "🏆",
      label: "Trophy icon",
    },
    {
      title: "Timely Delivery",
      description:
        "We prioritize deadlines and deliver shipments on schedule — every time — backed by a robust logistics system.",
      icon: "⏰",
      label: "Time icon",
    },
    {
      title: "24/7 Global Support",
      description:
        "Our team is always available to assist you, whether it's technical help or export documentation — anytime, anywhere.",
      icon: "💡",
      label: "Support icon",
    },
  ];

  return (
    <section
      className="lg:py-8 py-4 px-4 sm:px-8 md:px-16 lg:px-32 bg-white text-center text-black"
      aria-labelledby="why-choose-heading"
    >
      <h2
        id="why-choose-heading"
        className="text-xl lg:text-3xl font-bold mb-6 lg:mb-8"
      >
        Why Choose Invento by Vee Kay Enterprises – Trusted Hardware Exporters
      </h2>

      <p className="text-sm lg:text-lg mb-4 lg:mb-12 px-2 lg:px-4 max-w-2xl lg:max-w-3xl mx-auto text-gray-700">
        At Invento by Vee Kay Enterprises, we blend quality manufacturing with
        expert logistics to provide reliable, certified, and timely hardware
        export services worldwide. Here’s why clients around the globe trust
        Invento by Vee Kay Enterprises for their hardware needs.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-white p-3 lg:p-6 rounded-lg shadow-md lg:shadow-lg"
          >
            <div
              className="text-2xl lg:text-4xl mb-2 lg:mb-4"
              role="img"
              aria-label={feature.label}
            >
              {feature.icon}
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-1 sm:mb-2">
              {feature.title}
            </h3>
            <p className="text-xs lg:text-base text-gray-600">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
