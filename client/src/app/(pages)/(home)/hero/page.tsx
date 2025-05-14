import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-secondary relative w-full lg:h-screen h-[500px]">
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-[88px] w-full lg:w-[50%] h-[200px] lg:h-[640px] object-cover"
      >
        <source src="/video/INVENTO_GLOBAL.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="lg:top-1/3 top-1/2 lg:left-1/2 absolute inset-0 flex flex-col lg:items-center lg:justify-center lg:text-center text-white px-4 justify-start items-start text-start">
        <h1 className="font-exo text-xl sm:text-5xl lg:text-5xl font-bold lg:mb-4 mb-0 text-black lg:px-12 lg:mt-0 px-0 mt-14">
          Crafting Excellence. Connecting the World.
        </h1>
        <p className="text-[12px] lg:text-[16px] mb-8 lg:max-w-xl w-full text-black">
          <span className="font-semibold text-">Premium Quality</span>
          <span className="font-semibold text-primary"> Hardware Products</span>
          ,<span className="font-semibold text-primary"> Fasteners</span>,
          <span className="font-semibold text-primary"> Screws</span>,
          <span className="font-semibold text-primary"> Hand Tools</span>, and
          <span className="font-semibold text-primary">
            {" "}
            Exquisite Copper & Handicraft Bags
          </span>{" "}
          —{" "}
          <span className="text-black">
            Designed for Durability, Delivered Globally.
          </span>
        </p>

        <div className="flex flex-row gap-4 lg:px-0 px-4">
          <Link
            href="#get-a-quote"
            className="bg-secondary text-black lg:py-2 py-1 lg:px-6 px-3 rounded-lg hover:bg-hoversecondary transition-colors no-underline"
          >
            Get a Quote
          </Link>
          <a
            href="#explore-products"
            className="border-2 bg-primary text-secondary lg:py-2 py-1 lg:px-6 px-3 rounded-lg hover:bg-hoverprimary transition-colors no-underline"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
