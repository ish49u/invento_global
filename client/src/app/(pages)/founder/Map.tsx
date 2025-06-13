// pages/contact.tsx
import React from "react";

const Map: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="lg:text-4xl text-xl font-bold text-center mb-8 text-black">
        Our Company Location
      </h1>

      {/* Google Map Embed */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2855203125023!2d74.95169607541035!3d31.626031974165798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197d456631b37f%3A0xde6683a66c91393b!2sVee%20Kay%20Enterprises!5e0!3m2!1sen!2sin!4v1745764333626!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;
