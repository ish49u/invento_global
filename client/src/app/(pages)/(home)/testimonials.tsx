"use client";
import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      review:
        "Excellent brass hardware products and fast delivery. Highly recommend!",
      name: "John Doe",
      location: "USA",
    },
    {
      review:
        "Top quality tools and exceptional customer service from Invento Global!",
      name: "Jane Smith",
      location: "UK",
    },
    {
      review:
        "Very satisfied with my purchase! Will buy again. Trusted company.",
      name: "Alex Brown",
      location: "Canada",
    },
    {
      review:
        "Fantastic selection of industrial hardware products. Quick shipping!",
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
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { review, name, location } = testimonials[currentIndex];

  return (
    <section
      className="lg:py-14 py-8 bg-white text-center flex flex-col items-center justify-center px-4 sm:px-6 lg:px-0"
      aria-label="Customer reviews and testimonials"
    >
      <h2 className="text-xl lg:text-4xl font-bold text-center mb-6 text-black">
        Client Testimonials for{" "}
        <span className="text-primary">Invento by Vee Kay Enterprises</span>
      </h2>

      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl flex items-center justify-center">
        <figure
          className="bg-white lg:p-6 p-3 sm:p-8 rounded-xl shadow-xl w-full text-center"
          itemScope
          itemType="https://schema.org/Review"
        >
          <meta
            itemProp="itemReviewed"
            content="Invento by Vee Kay Enterprises"
          />
          <blockquote
            className="text-sm lg:text-lg font-medium text-gray-700 mb-4"
            itemProp="reviewBody"
          >
            “{review}”
          </blockquote>
          <footer>
            <p className="text-xs lg:text-base text-gray-500" itemProp="author">
              - <span itemProp="name">{name}</span>, {location}
            </p>
          </footer>
        </figure>

        {/* Navigation Buttons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2">
          <button
            className="bg-primary text-white rounded-full p-2 hover:scale-110 transition"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="lg:w-5 lg:h-5 w-4 h-4" />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2">
          <button
            className="bg-primary text-white rounded-full p-2 hover:scale-110 transition"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <HiChevronRight className="lg:w-5 lg:h-5 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
