"use client";

import Image from "next/image";
import MediaGallery from "./Profile";
import Map from "./Map";

const FounderMessage = () => {
  return (
    <>
      <section className="px-3 lg:px-16 mt-32">
        <div className="flex items-center justify-center">
          <div className="text-secondary italic lg:w-[70%] w-full h-32 flex flex-col items-center justify-center bg-primary">
            <h1 className="lg:text-lg text-sm m-0">Company Overview</h1>
            <p className="m-0 mt-3 lg:px-20 px-5 text-center lg:text-sm text-xs">
              "Merchant Exporters, Mfrs And Suppliers Of Fasteners, Screws, Door
              And Windows Hardware Products, Hand Tools, Copper Handicrafts,
              Handcrafted Bags, etc."
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center lg:mt-10 mt-5">
          <div className="lg:w-32 lg:h-32 w-16 h-16 mx-auto lg:mb-8 mb-4 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/founder.jpeg"
              alt="Akhil Aggarwal - Founder of Vee Kay Enterprises"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>

          <h2 className="lg:text-3xl text-xl font-bold text-gray-800 lg:mb-4 mb-2">
            A Message from Our Founder
          </h2>

          <p className="text-black lg:text-[17px] text-[13px] lg:mb-4 mb-2">
            In 2001, I established{" "}
            <span className="font-semibold text-primary">
              Vee Kay Enterprises
            </span>{" "}
            with a simple vision: to craft products that blend innovation with
            quality. Today, under the brand{" "}
            <span className="font-semibold text-primary">Invento</span>, we
            continue to honor that vision in everything we do.
          </p>

          <p className="text-black lg:text-[17px] text-[13px] lg:mb-6 mb-3">
            From our humble beginnings to becoming a leader in the industry,
            every product we create is a testament to our commitment to
            excellence. Our team is passionate, our products are reliable, and
            our values remain as strong as ever.
          </p>

          <div className="text-center lg:mt-8 mt-4">
            <p className="font-semibold text-gray-800 lg:text-lg text-sm">
              — Akhil Aggarwal
            </p>
            <p className="text-gray-500 lg:text-sm text-sm">
              Founder & CEO, Vee Kay Enterprises
            </p>
          </div>
        </div>
      </section>
      <MediaGallery />
      <Map />
    </>
  );
};

export default FounderMessage;
