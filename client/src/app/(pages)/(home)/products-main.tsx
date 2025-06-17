"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const Products: React.FC = () => {
  const handleToggleShow = (index: number) => {
    const updated = [...showMore];
    updated[index] = !updated[index];
    setShowMore(updated);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Invento Global",
      url: "https://www.inventoglobal.com",
      logo: "https://www.inventoglobal.com/logo.png",
      sameAs: [],
      description:
        "Invento Global is a leading exporter of premium hardware, brass hinges, screws, hand tools, handcrafted bags, and copper handicrafts.",
    });
    document.head.appendChild(script);
  }, []);

  const products = [
    {
      name: "🛠️ Hardware Hub",
      description:
        "Premium hardware products crafted for durability, strength, and precision. Perfect for residential, commercial, and industrial use.",
      image: "/products/hardware_tools.jpg",
      related: [
        {
          name: "Brass Butt Hinges",
          image: "/hardware/b1.jpg",
          description:
            "High-quality brass butt hinges offering smooth movement and superior strength for doors and cabinets.",
        },
        {
          name: "Brass Railway Hinges",
          image: "/hardware/b2.jpg",
          description:
            "Heavy-duty brass railway hinges designed for large doors and heavy applications with excellent rust resistance.",
        },
        {
          name: "Brass Railway Hinge Lock Washer",
          image: "/hardware/b3.jpg",
          description:
            "Precision brass lock washers ensuring tight and secure fittings in railway and heavy machinery hinges.",
        },
        {
          name: "Brass Z Hinges",
          image: "/hardware/b4.webp",
          description:
            "Durable Z-shaped brass hinges for added support and stylish architectural designs.",
        },
        {
          name: "Brass Parliament Hinges",
          image: "/hardware/b5.png",
          description:
            "Brass parliament hinges offering wide opening angles, ideal for French doors and wide entrance doors.",
        },
        {
          name: "Brass Tower Bolt",
          image: "/hardware/b6.jpeg",
          description:
            "Solid brass tower bolts providing extra security and strength for doors, windows, and gates.",
        },
        {
          name: "Brass Julla Fittings",
          image: "/hardware/b7.png",
          description:
            "Premium brass fittings designed specifically for swing (julla) installations, ensuring smooth movement and strength.",
        },
        {
          name: "Brass Aldrops",
          image: "/hardware/b8.png",
          description:
            "Elegant and sturdy brass aldrops for traditional locking and decorative door security.",
        },
      ],
    },
    {
      name: "🧰Fasteners & Screws",
      description:
        "Reliable fastening solutions for every industrial and household need.",
      image: "/products/fastner.jpeg", // <-- Add this image to your assets
      related: [
        {
          name: "Stainless Steel Carriage Bolts",
          image: "/screws/s1.jpg",
          description:
            "Durable stainless steel carriage bolts designed for heavy-duty applications in construction and machinery.",
        },
        {
          name: "Carbon Steel Chipboard Screws",
          image: "/screws/s2.jpg",
          description:
            "High-strength screws designed specifically for chipboard and other wood-based materials.",
        },
        {
          name: "MS Csk Slotted Machine Screws",
          image: "/screws/s3.png",
          description:
            "Mild steel screws with a countersunk slotted head, ideal for machine assembly and applications requiring a flush finish.",
        },
        {
          name: "Truss/Wafer Head Self Drilling Screws",
          image: "/screws/s4.jpg",
          description:
            "Self-drilling screws with a wafer head, designed for quick and efficient installation in light metal and wood.",
        },
        {
          name: "Pan Phillips Head Self Drilling Screws",
          image: "/screws/s5.jpg",
          description:
            "Pan-head screws with Phillips drive, featuring self-drilling capabilities for easy installation in various materials.",
        },
        {
          name: "Csk Phillips Head Self Drilling Screws",
          image: "/screws/s6.jpg",
          description:
            "Countersunk Phillips head screws with self-drilling tips, ideal for wood, metal, and plastic materials.",
        },
        {
          name: "Mirror Screws",
          image: "/screws/s7.jpg",
          description:
            "Specialized screws designed for securing mirrors, providing a secure and aesthetic finish with minimal visibility.",
        },
        {
          name: "MS Hardened Self Tapping Screws",
          image: "/screws/s8.webp",
          description:
            "Mild steel hardened screws with self-tapping threads, suitable for a wide range of applications requiring a strong, permanent hold.",
        },
      ],
    },
    {
      name: "👜 Handcrafted Bags",
      description:
        "Eco-friendly, stylish bags hand-crafted with traditional techniques, combining function and beauty.",
      image: "/products/handmade_bags.jpg",
      related: [
        {
          name: "Jute Tote",
          image: "/bags/b1.jpeg",
          description:
            "Sustainable jute tote, perfect for eco-conscious shoppers and everyday use.",
        },
        {
          name: "Canvas Sling",
          image: "/bags/b2.jpeg",
          description:
            "Trendy and practical canvas sling for casual outings and daily wear.",
        },
        {
          name: "Boho Clutch",
          image: "/bags/b3.jpeg",
          description:
            "Elegant evening clutch with intricate embroidery for a boho chic style.",
        },
        {
          name: "Bamboo Handle",
          image: "/bags/b4.jpeg",
          description:
            "Rustic bag with bamboo handle, combining modern design with a traditional touch.",
        },
        {
          name: "Patchwork Bag",
          image: "/bags/b5.jpeg",
          description:
            "Colorful, handmade patchwork bag, showcasing unique patterns and artisan craftsmanship.",
        },
        {
          name: "Recycled Denim",
          image: "/bags/b6.jpeg",
          description:
            "Durable, upcycled denim bag, eco-friendly and stylish for everyday use.",
        },
        {
          name: "Rope Bag",
          image: "/bags/b7.jpeg",
          description:
            "Sturdy rope bag, ideal for carrying beach essentials or casual outings.",
        },
        {
          name: "Leatherette Purse",
          image: "/bags/b8.jpeg",
          description:
            "Compact and stylish leatherette purse for chic, minimalistic fashion.",
        },
      ],
    },
    {
      name: "🏺 Copper Handicrafts",
      description:
        "Health-boosting copperware with elegant traditional designs, crafted for wellness and style.",
      image: "/products/copper.jpg",
      related: [
        {
          name: "Copper Bottle",
          image: "/copper/c9.jpeg",
          description:
            "Stylish copper bottle to improve hydration and promote better digestion naturally.",
        },
        {
          name: "Hammered Jug",
          image: "/copper/c2.jpeg",
          description:
            "Elegant hammered copper jug, ideal for storing beverages with health benefits.",
        },
        {
          name: "Classic Mug",
          image: "/copper/c3.jpeg",
          description:
            "Copper mug perfect for tea or coffee, enhancing your Ayurvedic lifestyle.",
        },
        {
          name: "Gift Set",
          image: "/copper/c4.jpeg",
          description:
            "Festive copper gift set, a thoughtful present with health and style.",
        },
        {
          name: "Travel Flask",
          image: "/copper/c5.jpeg",
          description:
            "Portable copper flask to carry beverages while promoting overall wellness.",
        },
        {
          name: "Engraved Bottle",
          image: "/copper/c6.jpeg",
          description:
            "Handcrafted engraved copper bottle with health benefits and personal charm.",
        },
        {
          name: "Tall Mug",
          image: "/copper/c7.jpeg",
          description:
            "Modern copper mug for larger servings, maintaining beverage temperature and wellness.",
        },
        {
          name: "Storage Container",
          image: "/copper/c8.jpeg",
          description:
            "Copper storage container to keep spices and essentials fresh with benefits.",
        },
      ],
    },
  ];

  const [showMore, setShowMore] = useState(products.map(() => false));

  return (
    <>
      <Head>
        <title>
          Premium Hardware, Brass Hinges, Screws, Copper Products | Invento
          Global
        </title>
        <meta
          name="description"
          content="Explore high-quality hardware, fasteners, screws, brass fittings, copperware, and handmade bags from Invento Global — trusted exporters in India."
        />
        <meta
          name="keywords"
          content="Brass Hinges, Screws, Fasteners, Copper Bottles, Jute Bags, Hand Tools, Hardware Exporters India, Invento Global"
        />
        <meta property="og:title" content="Invento Global Products" />
        <meta
          property="og:description"
          content="Top-quality hardware, screws, copper handicrafts, and eco bags from leading Indian exporters Invento Global."
        />
        <meta
          property="og:image"
          content="https://www.inventoglobal.com/cover.jpg"
        />
        <meta
          property="og:url"
          content="https://www.inventoglobal.com/products"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <section
        className="lg:py-10 py-0 bg-white px-4 lg:px-32"
        id="explore-products"
      >
        <h2 className="lg:text-4xl text-xl font-bold text-center lg:mb-16 mb-4 text-black">
          Explore Our{" "}
          <span className="relative inline-block">
            Products
            <span className="absolute left-1/2 bottom-0 w-1/2 h-0.5 bg-primary"></span>
          </span>
        </h2>

        <div className="space-y-24">
          {products.map((product, index) => {
            const visibleItems = showMore[index]
              ? product.related
              : product.related.slice(0, 4);

            return (
              <div key={index} className="space-y-8">
                <div
                  className={`flex flex-col md:flex-row lg:gap-10 gap-3 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-[500px] lg:h-[300px] w-[50%] h-[150px] mx-auto overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 w-full lg:px-6 text-center md:text-left">
                    <h3 className="lg:text-3xl text-xl font-extrabold lg:mb-4 mb-2 text-primary">
                      {product.name}
                    </h3>
                    <p className="lg:text-lg text-sm text-gray-700">
                      {product.description}
                    </p>
                    <div className="lg:mt-6 mt-3">
                      <button className="lg:px-6 px-3 lg:py-3 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                        View All Products
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-6 gap-3 lg:py-10 py-5">
                  {visibleItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-between bg-[#F9F9F9] border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-md transition duration-300 text-center lg:h-[450px] h-[300px]"
                    >
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="lg:w-full w-[50%] h-[150px] object-cover lg:mt-0 mt-2"
                        />
                        <div className="lg:p-4 p-0 lg:h-[60px]">
                          <h4 className="lg:text-lg text-sm font-semibold lg:mb-2 mb-0 text-black">
                            {item.name}
                          </h4>
                        </div>
                        <div>
                          <p className="lg:text-sm text-xs text-gray-600 lg:mb-2 lg:min-h-[48px] min-h-[20px]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="lg:px-4 px-2 lg:pb-6 pb-3">
                        <button className="bg-primary w-full text-white px-4 py-2 rounded-lg hover:bg-opacity-80">
                          Get this product
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center lg:mt-4 mt-0">
                  <button
                    onClick={() => handleToggleShow(index)}
                    className="text-primary font-medium hover:opacity-80 transition no-underline"
                  >
                    {showMore[index] ? "Show Less" : "View More Products"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
