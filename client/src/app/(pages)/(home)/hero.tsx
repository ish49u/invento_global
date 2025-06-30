import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-secondary relative w-full lg:h-screen h-[400px]"
      aria-label="Invento Global – Leading Hardware Exporters from India"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        title="Invento Global – Premium Hardware Export Showcase"
        aria-label="Invento Global promotional video showcasing screws, fasteners, and hardware exports by Vee Kay Enterprises"
        className="absolute left-0 w-full lg:w-[50%] h-[200px] lg:h-[730px] object-cover"
      >
        <source src="/video/INVENTO_GLOBAL.mp4" type="video/mp4" />
        Your browser does not support the video tag. Watch our hardware and
        fasteners showcase video.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="lg:top-1/3 top-1/2 lg:left-1/2 left-5 absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-exo text-sm sm:text-5xl lg:text-3xl font-bold lg:mb-4 mb-0 text-black lg:px-12 lg:mt-0 px-0">
          Invento by Vee Kay Enterprises – Leading Exporters of Screws,
          Fasteners & Hardware
        </h1>
        <p className="text-[12px] lg:text-[16px] lg:mb-8 mb-4 lg:max-w-xl w-full text-black">
          <strong>Invento</strong>, a brand by
          <span className="font-semibold text-primary">
            {" "}
            Vee Kay Enterprises
          </span>
          , is a trusted Indian exporter of
          <span className="font-semibold text-primary"> hardware products</span>
          ,<span className="font-semibold text-primary"> fasteners</span>,
          <span className="font-semibold text-primary"> screws</span>,
          <span className="font-semibold text-primary"> hand tools</span>, and
          <span className="font-semibold text-primary">
            {" "}
            artisan copper & handicraft bags
          </span>
          . We deliver premium quality and durability to customers around the
          world.
        </p>

        <div className="flex flex-row gap-4 lg:px-0 px-4">
          <Link
            href="#get-a-quote"
            aria-label="Request a quote from Invento Global"
            title="Get a quotation from Invento Global"
            className="bg-secondary text-black lg:py-2 py-1 lg:px-6 px-3 rounded-lg hover:bg-hoversecondary transition-colors no-underline"
          >
            Get a Quote
          </Link>
          <a
            href="#explore-products"
            aria-label="View Invento Global hardware products"
            title="Explore Invento Global's product range"
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
