"use client";
import React, { useEffect } from "react";
import Hero from "./(pages)/(home)/hero";
import Products from "./(pages)/(home)/products-main";
import GlobalReach from "./(pages)/(home)/globalReach";
import IndustriesServed from "./(pages)/(home)/industriesServed";
import Testimonials from "./(pages)/(home)/testimonials";
import Certificates from "./(pages)/(home)/certificates";
import WhyChooseUs from "./(pages)/(home)/whyChooseUs";

function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Invento Global",
      url: "https://inventoglobal.com",
      description:
        "Merchant Exporters, Manufacturers and Suppliers of Hardware, Hand Tools, Fasteners, Screws, Copper Handicrafts and more.",
      logo: "https://inventoglobal.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/invento-global",
        "https://www.facebook.com/inventoglobal",
      ],
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      {/* ✅ Add brand introduction here */}
      <div className="text-center py-8 px-4 pt-28">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-primary">
          Welcome to Invento Global
        </h1>
        <p className="max-w-3xl mx-auto text-base lg:text-lg text-gray-700">
          Invento Global is a trusted name in the export industry, specializing
          in high-quality hardware, hand tools, fasteners, screws, and copper
          handicrafts. With a global customer base and decades of experience, we
          bring precision and durability to every product we offer.
        </p>
      </div>

      <Hero />
      <Products />
      <GlobalReach />
      <IndustriesServed />
      <Testimonials />
      <Certificates />
      <WhyChooseUs />
    </div>
  );
}

export default Page;
