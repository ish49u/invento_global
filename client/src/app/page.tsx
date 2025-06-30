"use client";
import React, { useEffect } from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>
          Invento by Vee Kay Enterprises | Screws, Fasteners & Hardware
          Exporters
        </title>
        <meta
          name="description"
          content="Official website of Invento by Vee Kay Enterprises – manufacturers and exporters of screws, fasteners, hand tools, and copper handicrafts. Quality products with global reach."
        />
        <meta
          name="keywords"
          content="Invento, Invento Global, Invento by Vee Kay Enterprises, Invento Screws, Vee Kay Enterprises, hardware exporters, screws manufacturers"
        />
        <link rel="canonical" href="https://inventoglobal.com" />
        {/* Open Graph for better social sharing */}
        <meta property="og:title" content="Invento by Vee Kay Enterprises" />
        <meta
          property="og:description"
          content="Your trusted source for screws, fasteners, and high-quality hardware – Invento Global by Vee Kay Enterprises."
        />
        <meta property="og:url" content="https://inventoglobal.com" />
        <meta property="og:type" content="website" />
      </Head>

      <div>
        <div className="text-center lg:py-8 py-4 px-4 lg:pt-24 pt-20">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-primary">
            Welcome to Invento by Vee Kay Enterprises
          </h1>
          <p className="max-w-3xl mx-auto text-base lg:text-lg text-gray-700">
            Invento Global is a trusted name in the export industry,
            specializing in high-quality hardware, hand tools, fasteners,
            screws, and copper handicrafts. With a global customer base and
            decades of experience, we bring precision and durability to every
            product we offer.
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
    </>
  );
}

export default Page;
