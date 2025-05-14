import React from "react";
import Hero from "./(pages)/(home)/hero/page";
import Products from "./(pages)/(home)/products-main/page";
import GlobalReach from "./(pages)/(home)/globalReach/page";
import IndustriesServed from "./(pages)/(home)/industriesServed/page";
import Testimonials from "./(pages)/(home)/testimonials/page";
import Certificates from "./(pages)/(home)/certificates/page";
import WhyChooseUs from "./(pages)/(home)/whyChooseUs/page";

function page() {
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

export default page;
