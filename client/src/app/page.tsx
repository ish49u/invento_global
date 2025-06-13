"use client";
import React, { useEffect } from "react";
import Hero from "./(pages)/(home)/hero/page";
import Products from "./(pages)/(home)/products-main/page";
import GlobalReach from "./(pages)/(home)/globalReach/page";
import IndustriesServed from "./(pages)/(home)/industriesServed/page";
import Testimonials from "./(pages)/(home)/testimonials/page";
import Certificates from "./(pages)/(home)/certificates/page";
import WhyChooseUs from "./(pages)/(home)/whyChooseUs/page";

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
      logo: "https://inventoglobal.com/logo.png", // Update to actual logo URL
      sameAs: [
        "https://www.linkedin.com/company/invento-global",
        "https://www.facebook.com/inventoglobal",
      ],
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div>
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
