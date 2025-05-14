"use client";
import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      review: "Excellent products and fast delivery. Highly recommend!",
      name: "John Doe",
      location: "USA",
    },
    {
      review: "Top quality tools, exceptional customer service!",
      name: "Jane Smith",
      location: "UK",
    },
    {
      review: "Very satisfied with my purchase! Will buy again.",
      name: "Alex Brown",
      location: "Canada",
    },
    {
      review: "Fantastic selection of products. Quick shipping!",
      name: "Emily Clark",
      location: "Australia",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="lg:py-10 py-5 bg-white text-center flex flex-col items-center justify-center px-4 sm:px-6 lg:px-0">
      <h2 className="text-xl lg:text-4xl font-bold text-center mb-3 lg:mb-8 text-black">
        What Our Client
        <span className="relative inline-block ml-2">
          Say
          <span className="absolute left-1/2 bottom-[-4px] w-1/2 h-0.5 bg-primary transform -translate-x-1/2"></span>
        </span>
      </h2>

      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl flex items-center justify-center">
        {/* Review Card */}
        <div className="bg-white lg:p-6 p-3 sm:p-8 rounded-xl shadow-xl w-full text-center">
          <p className="text-sm lg:text-lg font-semibold text-gray-700 mb-4">
            &quot;{testimonials[currentIndex].review}&quot;
          </p>
          <span className="text-xs lg:text-base text-gray-500">
            - {testimonials[currentIndex].name},{" "}
            {testimonials[currentIndex].location}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2">
          <button
            className="bg-primary text-white rounded-full p-2 hover:scale-110 transition"
            onClick={prevTestimonial}
          >
            <HiChevronLeft className="lg:w-5 lg:h-5 w-3 h-3" />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2">
          <button
            className="bg-primary text-white rounded-full p-2 hover:scale-110 transition"
            onClick={nextTestimonial}
          >
            <HiChevronRight className="lg:w-5 lg:h-5 w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
