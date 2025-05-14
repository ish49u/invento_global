// app/about/page.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-32">
      <div className="flex items-center justify-center">
        <div className="text-secondary italic lg:w-[70%] w-full h-32 flex flex-col items-center justify-center bg-primary">
          <h2 className="lg:text-lg text-sm m-0">About Us</h2>
          <p className="m-0 mt-3 lg:px-20 px-5 text-center lg:text-sm text-xs">
            &quot;Merchant Exporters, Mfrs And Suppliers Of Fasteners, Screws,
            Door And Windows Hardware Products, Hand Tools, Copper Handicrafts,
            Handcrafted Bags, etc.&quot;
          </p>
        </div>
      </div>
      <main className="flex items-center justify-center bg-white">
        <div className="w-full flex flex-col md:flex-row p-2 md:p-12">
          {/* Left Image */}
          <div className="lg:mt-8 mt-4 flex justify-center items-center lg:justify-start lg:items-start">
            <Image
              src="/about/hardware.jpg"
              alt="Invento Global - Export Products"
              width={400}
              height={400}
              className="object-cover lg:w-[400px] lg:h-[400px] w-[200px] h-[200px]"
            />
          </div>

          {/* Center Content */}
          <div className="flex-1 flex flex-col justify-center">
            <blockquote className="text-sm md:text-2xl font-semibold italic text-gray-800 lg:mt-40 mt-5 lg:ml-4">
              &quot;Quality is never an accident; it is always the result of
              intelligent effort...
            </blockquote>

            {/* Highlighted Part */}
            <div className="lg:p-6 mb-6 lg:-ml-40 w-[90%] self-center bg-white mt-0 shadow-md">
              <h2 className="text-sm md:text-sm text-center text-black font-normal">
                Merchant Exporters, Mfrs And Suppliers Of Fasteners, Screws,
                Door And Windows Hardware Products, Hand Tools, Copper
                Handicrafts, Handcrafted Bags, etc.
                <p>
                  <strong>Vee Kay Enterprises</strong>, operating under the
                  brand name <strong>Invento</strong>, is one of India&apos;
                  most trusted Merchant Exporters, Manufacturers, and Suppliers
                  of industrial and handicraft products. We have established
                  ourselves as a reputed name in the global market for our
                  commitment to quality, consistency, and innovation.
                </p>
              </h2>
            </div>
            {/* About Content */}
            <div className="text-gray-600 leading-relaxed lg:space-y-6 text-sm md:text-base lg:-ml-96">
              {/* Introduction */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  About Vee Kay Enterprises
                </h3>
                <p>
                  <strong>Vee Kay Enterprises</strong> stands as a symbol of
                  trust, quality, and innovation. With a strong legacy of
                  craftsmanship and excellence, we have become a preferred
                  choice for clients around the world.
                </p>
              </div>

              {/* Our Products */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Our Product Range
                </h3>
                <p>
                  We specialize in a wide variety of products including{" "}
                  <strong>Fasteners</strong>,<strong> Screws</strong>,{" "}
                  <strong> Door and Window Hardware</strong>,
                  <strong> Hand Tools</strong>,{" "}
                  <strong> Copper Handicrafts</strong>, and{" "}
                  <strong> Handcrafted Bags</strong>. Each product is crafted
                  with precision, reflecting our commitment to the highest
                  standards of manufacturing.
                </p>
              </div>

              {/* Our Expertise */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Our Expertise
                </h3>
                <p>
                  With years of experience in global trade,{" "}
                  <strong>Vee Kay Enterprises</strong> has built a strong
                  network across continents. Our focus on delivering the finest
                  quality, ensuring on-time shipments, and maintaining
                  transparent communication has earned us the trust of an
                  international clientele.
                </p>
              </div>

              {/* Our Values */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Our Values
                </h3>
                <p>
                  We are passionate about preserving India’s rich heritage
                  through our beautifully crafted copper artifacts and handmade
                  products. At the same time, we lead innovation in industrial
                  sectors with world-class hardware and fastener solutions.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Our Mission
                </h3>
                <p>
                  Our mission is simple — to deliver products that represent
                  trust, durability, and exceptional craftsmanship.{" "}
                  <strong>Vee Kay Enterprises</strong>
                  is committed to expanding horizons, building lasting
                  partnerships, and making a mark in every market we serve.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 lg:mt-56 mt-5 flex justify-center items-center lg:justify-start lg:items-start">
            <Image
              src="/about/bags.jpg"
              alt="Invento Global - Hardware and Handicrafts"
              width={400}
              height={600}
              className="object-cover lg:w-[400px] lg:h-[600px] w-[200px] h-[200px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
