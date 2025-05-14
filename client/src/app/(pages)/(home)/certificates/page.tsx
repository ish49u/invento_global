"use client";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Certificates() {
  const certificates = [
    {
      name: "FIEO",
      image: "/certificates/fieo.svg",
      pdf: "/certificates/fieo.pdf",
    },
    {
      name: "ISO",
      image: "/certificates/iso.jpeg",
      pdf: "/certificates/iso.pdf",
    },
    {
      name: "EEPC",
      image: "/certificates/eepc.jpg",
      pdf: "/certificates/eepc.pdf",
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

  return (
    <section className="flex flex-col items-center justify-center bg-white lg:px-4 px-2 lg:py-10 py-5 relative">
      <h2 className="text-xl lg:text-4xl font-bold text-center lg:mb-6 mb-3 text-black">
        Our
        <span className="relative inline-block ml-2">
          Certifications
          <span className="absolute left-1/2 bottom-[-4px] w-1/2 h-0.5 bg-primary"></span>
        </span>
      </h2>

      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="bg-primary text-white p-2 sm:p-1 rounded-full hover:bg-hoverprimary transition-shadow duration-300 ease-in-out shadow-lg"
        >
          <HiChevronLeft className="lg:w-6 lg:h-6 w-3 h-3" />
        </button>

        {/* Certificate Image */}
        <div className="w-full sm:flex-1 sm:max-w-[700px] px-4 sm:px-0">
          <img
            src={certificates[currentIndex].image}
            alt={certificates[currentIndex].name}
            className="w-full h-auto max-h-[300px] sm:max-h-[500px] object-contain transition-all duration-500 ease-in-out shadow-lg rounded-lg"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="bg-primary text-white p-2 sm:p-1 rounded-full hover:bg-hoverprimary transition-shadow duration-300 ease-in-out shadow-lg"
        >
          <HiChevronRight className="lg:w-6 lg:h-6 w-3 h-3" />
        </button>
      </div>

      {/* View PDF Button */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
        <span className="text-sm lg:text-lg font-semibold text-gray-800">
          Want to See the Full Certificate?
        </span>
        <a
          href={certificates[currentIndex].pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white lg:py-2 lg:px-4 py-2 px-3 no-underline rounded-full hover:bg-hoverprimary transition-all duration-300 ease-in-out shadow-md transform hover:scale-105 text-sm font-medium"
        >
          View Certificate
        </a>
      </div>
    </section>
  );
}
