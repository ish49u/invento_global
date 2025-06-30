"use client";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Certificates() {
  const certificates = [
    {
      name: "FIEO Certificate",
      image: "/certificates/fieo.svg",
      pdf: "/certificates/fieo.pdf",
      alt: "FIEO Export Promotion Council Certificate - Invento Global",
    },
    {
      name: "ISO Certificate",
      image: "/certificates/iso.jpeg",
      pdf: "/certificates/iso.pdf",
      alt: "ISO 9001 Certified Quality Assurance Certificate - Invento Global",
    },
    {
      name: "EEPC Certificate",
      image: "/certificates/eepc.jpg",
      pdf: "/certificates/eepc.pdf",
      alt: "EEPC India Member Certificate - Invento Global",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const currentCertificate = certificates[currentIndex];

  return (
    <section
      className="flex flex-col items-center justify-center bg-white lg:px-4 px-2 lg:py-10 py-5 relative"
      aria-label="Certifications and Accreditations of Invento by Vee Kay Enterprises"
    >
      <h2 className="text-xl lg:text-4xl font-bold text-center lg:mb-6 mb-3 text-black">
        Certifications & Accreditations
        <span className="relative inline-block ml-2">
          – Proof of Quality
          <span className="absolute left-1/2 bottom-[-4px] w-1/2 h-0.5 bg-primary"></span>
        </span>
      </h2>

      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Prev Button */}
        <button
          onClick={prev}
          aria-label="Previous Certificate"
          className="bg-primary text-white p-2 sm:p-1 rounded-full hover:bg-hoverprimary transition-shadow duration-300 ease-in-out shadow-lg"
        >
          <HiChevronLeft className="lg:w-6 lg:h-6 w-4 h-4" />
        </button>

        {/* Certificate Image */}
        <figure className="w-full sm:flex-1 sm:max-w-[700px] px-4 sm:px-0 text-center">
          <img
            src={currentCertificate.image}
            alt={currentCertificate.alt}
            className="w-full h-auto max-h-[300px] sm:max-h-[500px] object-contain transition-all duration-500 ease-in-out shadow-lg rounded-lg"
          />
          <figcaption className="mt-2 text-gray-700 font-medium text-sm lg:text-base">
            {currentCertificate.name}
          </figcaption>
        </figure>

        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next Certificate"
          className="bg-primary text-white p-2 sm:p-1 rounded-full hover:bg-hoverprimary transition-shadow duration-300 ease-in-out shadow-lg"
        >
          <HiChevronRight className="lg:w-6 lg:h-6 w-4 h-4" />
        </button>
      </div>

      {/* View PDF Button */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
        <span className="text-sm lg:text-lg font-semibold text-gray-800">
          View Full Certificate
        </span>
        <a
          href={currentCertificate.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white lg:py-2 lg:px-4 py-2 px-3 no-underline rounded-full hover:bg-hoverprimary transition-all duration-300 ease-in-out shadow-md transform hover:scale-105 text-sm font-medium"
        >
          Open PDF
        </a>
      </div>
    </section>
  );
}
