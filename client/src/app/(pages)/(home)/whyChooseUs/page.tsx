const WhyChooseUs: React.FC = () => {
  return (
    <section className="lg:py-8 py-4 px-4 sm:px-8 md:px-16 lg:px-32 bg-white text-center text-black">
      <h2 className="text-xl lg:text-3xl font-bold mb-6 lg:mb-8">
        Why Choose Our Services?
      </h2>

      <p className="text-sm lg:text-lg mb-4 lg:mb-12 px-2 lg:px-4 max-w-2xl lg:max-w-3xl mx-auto text-gray-700">
        Our commitment to providing exceptional service is what sets us apart.
        Here’s why we’re trusted by our clients to deliver innovative, reliable,
        and efficient solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {[
          {
            title: "Innovative Solutions",
            description:
              "We embrace the latest technologies and trends to provide cutting-edge solutions tailored to your needs.",
            icon: "🚀",
          },
          {
            title: "Customer-Centric Approach",
            description:
              "Your satisfaction is our priority. We tailor our services to meet your unique requirements and goals.",
            icon: "💬",
          },
          {
            title: "Industry Expertise",
            description:
              "With years of experience in the industry, we understand the challenges and opportunities of your business.",
            icon: "🎓",
          },
          {
            title: "Proven Track Record",
            description:
              "Our clients’ success stories speak for our reliability and quality. We deliver results that matter.",
            icon: "🏆",
          },
          {
            title: "Timely Delivery",
            description:
              "We know the value of your time. Our team works diligently to ensure projects are delivered on time, every time.",
            icon: "⏰",
          },
          {
            title: "24/7 Support",
            description:
              "We are here for you around the clock. Whether it is troubleshooting or assistance, we have got you covered.",
            icon: "💡",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-3 lg:p-6 rounded-lg shadow-md lg:shadow-lg"
          >
            <div className="text-2xl lg:text-4xl mb-2 lg:mb-4">
              {feature.icon}
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-1 sm:mb-2">
              {feature.title}
            </h3>
            <p className="text-xs lg:text-base text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
